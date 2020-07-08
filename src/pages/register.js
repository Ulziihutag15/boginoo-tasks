import React, { useEffect, useState } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAIa59Ge1r1l2aZLH0EX66YbMDUdie0h8o",
    authDomain: "boginoo-auth.firebaseapp.com",
    databaseURL: "https://boginoo-auth.firebaseio.com",
    projectId: "boginoo-auth",
    storageBucket: "boginoo-auth.appspot.com",
    messagingSenderId: "852732978740",
    appId: "1:852732978740:web:0410adf477e4adfc18cc61",
    measurementId: "G-VN2CFBE8MP"
};


const Register = () => {

    const his = useHistory()
    const [acc, setAcc] = useState({ email: '', password: '', name: ''})
    const [user, setUser] = useState(null)
    const [name, setName] = useState('')

    useEffect(() => {
        firebase.initializeApp(firebaseConfig)
    }, [])

    useEffect(() =>{
        
        if(user){
            firebase.firestore().collection('users').doc(user.uid).onSnapshot(ele => {
                setName(ele.data().name)
            })
        }

    }, [user]) 

    useEffect(() => {
        if(user){

            console.log('Logged in!!!')
            console.log(user.email)
            setUser(user)
        }else{
            console.log("Couldn't log in!!!")
        }

    }, [])

    const signUp = async () => {

        console.log(acc.email, acc.password);
        let uid = await firebase.auth().createUserWithEmailAndPassword(acc.email, acc.password).then((el) => {
            return el.user.uid
        })
        console.log('user created');
        await firebase.firestore().collection('users').doc(uid).set({
            displayName: acc.name,
            email: acc.email
        })
        console.log('db updated');
    }

    return (


        <div className='flex flex-col items-center pa-3 justify-center' style={{ width: '100vw', height: '100vh' }}>

        {user && <h1 className = 'c-primary'>Та амжилттай нэвтэрлээ {name}</h1>}
          
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-56 lh-70 text-center normal'>
                    Boginoo Register
                </div>
                <div className='mt-5 flex justify-center items-center flex-col'>


                    <div className='flex-row'>
                        <div className='font-ubuntu fs-20 lh-23 bold c-primary mr-3'>Цахим Хаяг</div>
                        <Input placeholder='Email' className='h-5 w-8 br-secondary-2' value={acc.email} onChange={(e) => setAcc({...acc, email: e.target.value})} />
                    </div>

                    <div className='flex-row mt-4'>
                        <div className='font-ubuntu fs-20 lh-23 bold c-primary mr-3'>Нууц үг</div>
                        <Input placeholder='Password' className='h-5 w-8 br-secondary-2' type='password' value={acc.password} onChange={(e) => setAcc({...acc, password: e.target.value})} />
                    </div>


                <div className='flex-row mt-4'>
                        <div className='font-ubuntu fs-20 lh-23 bold c-primary mr-3'>Нэр</div>
                        <Input placeholder='Name' className='h-5 w-8 br-secondary-2' value={acc.name} onChange={(e) => setAcc({...acc, name: e.target.value})} />
                    </div>

                    <Button className='font-ubuntu fs-20 lh-23 bold c-default b-primary h-5 ph-4 mt-4 pointer' onClick={signUp}>Бүртгүүлэх</Button>
                </div>
           
        </div>
    )
    }

export default Register

