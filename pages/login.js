import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth'
import { auth, provider } from '../firebase'

const Login  = () => {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push('/')
            }
        })
    },[])
    return (
        <Wrapper>
            <UberLogo src='https://i.ibb.co/ZMhy8ws/uber-logo.png' />
            <Title>Login to access your account</Title>
            <HeadImg src='https://i.ibb.co/CsV9RYZ/login-image.png' />
            <SignIn onClick={() => signInWithPopup(auth, provider)} >Sign in with Google</SignIn>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`flex flex-col h-screen p-4`
const UberLogo = tw.img`h-20 w-auto object-contain self-start`
const HeadImg = tw.img`h-64 object-contain w-full`
const Title = tw.div`text-3xl pt-4 text-gray-400 `
const SignIn = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full
`