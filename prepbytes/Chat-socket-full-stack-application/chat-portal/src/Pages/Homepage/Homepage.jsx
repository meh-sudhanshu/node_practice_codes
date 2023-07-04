import React, { useEffect, useState } from "react";

import axios from 'axios'

import styles from './homepage.module.css'

import { useNavigate } from "react-router-dom";


const Homepage = ()=>{
    let navigate = useNavigate()
    const [responseData,setResponseData] = useState({})
    const [userData,setUserData] = useState({})

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    useEffect(async ()=>{
        const api = 'http://localhost:8080/user/login-user'
        const response = await  axios.get(api)
        setResponseData(response.data)
    },userData)

    const buttonHandler = ()=>{
        setUserData({
            email:email,
            password:password
        })
        // response.then((response)=>{
        //     setResponseData(response.data)
        // }).catch((err)=>{
        //     console.log(err)
        // })
        navigate("/login")
    }
    return(
        <div className={styles.main}>
            <div className={styles.info}>
                <h2 className={styles.heading}>Welcome to ChatSocket,Please login to continue</h2>
                <h2 className={styles.heading}>Welcome to ChatSocket,Please login to continue</h2>
                <button className={styles.login_btn} onClick={buttonHandler}>Login</button>
            </div>
            <div className={styles.licence}>
                <h2>All Licence Reserver@Prepbytes</h2>
            </div>
        </div>
    )
}

// user-login 

export default Homepage