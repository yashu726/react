import React from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <div className="bg-black text-white flex flex-col items-center pt-14  sm:justify-center text-2xl">Please Login</div>
  return (
    <>
    <div className="bg-black text-white flex flex-col items-center pt-14 sm:justify-center text-2xl">Username : {user.username}</div>
    <div className="bg-black text-white flex flex-col items-center pt-2 sm:justify-center text-2xl">Password : {user.password}</div>
    </>
  )
}

export default Profile