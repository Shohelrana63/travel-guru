import { FormGroup } from '@material-ui/core';
import React, { useContext } from 'react';
import Header from '../Header/Header';
import facebookLogo from '../../images/Icon/fb.png';
import googleLogo from '../../images/Icon/google.png';
import { useState } from 'react';
import './LoginAuth.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const LoginAuth = () => {
    const[placeArea, setPlaceArea,loggedIn, setLoggedIn, name, setName] = useContext(UserContext);
    const[submit, setSubmit] = useState("")
    const[user, setUser] = useState({})
    const [isSignUp , setIsSignUp] = useState(false)
    const [confirmationError, setConfirmationError]=useState(false)


    const location= useLocation().location?.pathname
    const history = useHistory()

    const formHandler =(e) =>{
        e.preventDefault()

        // submit === "signup" && 
        // firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
        // .then(res=>{
        //     console.log(res)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        if(submit === "signup") {
            user.password===user.confirmationPassword ?
            firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
            .then(res=>{

            setConfirmationError(false)
            setUser({...user, signupError:""})
                setIsSignUp(true)
                localStorage.setItem("loggedIn",true)
            })
            
            .catch(err=>{
                setUser({...user, signupError:err.message})
            })
            : setConfirmationError(true)
    
        }

        // submit === "signin" &&
        // firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        // .then(res=>{
        //     setLoggedIn(true)
        //     history.replace(location)
        // })
        // .catch(err=>{
        //     console.log(err.message)
        // })
        submit === "signin" &&
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then(res=>{
            const currentUser = firebase.auth().currentUser;
            setName(currentUser.displayName)
            setLoggedIn(true)
            history.replace(location || "/")
        })
        .catch(err=>{
            setUser({...user, signinError:err.message})
        })

    }
    
    const fbSigninHandler =()=>{
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            setLoggedIn(true)
            history.replace(location)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const googleSigninHandler =()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            setLoggedIn(true)
            history.replace(location || '/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
   
    return (
        <div>
            <Header></Header>

            <form className="form-group account-form" onSubmit={formHandler}>
                <FormGroup>
                    {/* <h3>Create an Account</h3>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/> */}
             {
                isSignUp? <h2>Login</h2>
                        : <h2>Create an account</h2>
            }


            { 
                  !isSignUp && <>
                      
                    <input  onBlur={(event)=>setUser({...user,fname:event.target.value})} type="text" placeholder="First Name" required/>
                   
                    <input  onBlur={(event)=>setUser({...user,lname:event.target.value})} type="text" placeholder="Last Name" required/>
                  </>
            } 
                   
                    {/* <input type="email" placeholder="Username and Email"/>
                    <input type="password" placeholder="Password"/> */}
                    
                    
                    <input onBlur={(event)=>setUser({...user,email:event.target.value})} type="email" placeholder="Email address" required/>
                    <input onBlur={(event)=>setUser({...user,password:event.target.value})} type="password" placeholder="Password" required/>
                   
                    

                    {
                       
                        !isSignUp && <input onBlur={(event)=>setUser({...user,confirmationPassword:event.target.value})}
                         type="password" placeholder="Confirm Password" required/>
                        
                    }
                     {
                        // isSignUp && 
                        //     <div style={{display:"flex", justifyContent:"space-between", fontSize:"13px", fontWeight:"500"}}>
                        //         <div style={{display:"flex", alignItems:"center"}}>     
                        //             <input id="checkbox" type="Checkbox" />
                        //             <label  style={{marginBottom:"6px"}}>
                        //                 Remember me
                        //             </label>
                        //         </div>
                        //         <p style={{color:"orange", cursor:"pointer"}}>Fogot Password</p>
                        //     </div>
                    }
                      {
                         user.signupError ?
                            <p style={{color:"red", fontSize:"13px"}}>
                                {user.signupError}
                            </p>
                         : ""
                    }
                    {
                        confirmationError ?
                            <p style={{color:"red", fontSize:"13px"}}>
                                Doesn't match your password
                            </p>
                        : ""
                    }
                    {
                        
                         isSignUp ? <input name="signin" style={{cursor:"pointer"}} onClick={(event)=>setSubmit(event.target.name)} type="submit" value="Signin"/>
                         : <input name="signup" style={{cursor:"pointer"}} onClick={(event)=>setSubmit(event.target.name)} type="submit" value="Signup"/>
                    } 
                </FormGroup>

            
                {
                        isSignUp ?<>
                        <span>Don't have an account? </span>
                        <span onClick={()=>setIsSignUp(false)} style={{color:"orange",cursor:"pointer"}}>Signup</span>
                    </>
                        
                        :<>
                        <span>Already have an account? </span>
                        <span onClick={()=>setIsSignUp(true)} style={{color:"orange",cursor:"pointer"}}>Login</span>
                        </>

                    } 

            </form>

             
            <div onClick={fbSigninHandler} className="fb-google-form">
                <p>  Or</p>
                <div className="facebook">
                    <img style={{width:"30px", height:"30px"}} src={facebookLogo} alt=""/>
                    <p>Continue with Facebook</p>
                </div>

                <div onClick={googleSigninHandler} className="google">
                    <img style={{width:"30px", height:"30px"}} src={googleLogo} alt=""/>
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default LoginAuth;