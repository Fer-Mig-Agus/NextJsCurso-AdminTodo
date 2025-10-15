'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import { CiLogin, CiLogout } from "react-icons/ci"

const LogoutButton = () => {

    const {data:session, status} = useSession();

    if (status === 'loading') {
        return(
            <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group  cursor-pointer">
            <CiLogout />
            <span className="group-hover:text-gray-700">Wait please...</span>
          </button>
        )
    } 

    if (status === 'unauthenticated') {
        return(
            <button
            onClick={()=> signIn()}
            className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group  cursor-pointer">
            <CiLogin />
            <span className="group-hover:text-gray-700">Log In</span>
          </button>
        )
    } 

  return (
          
          <button
          onClick={()=>{signOut()}}
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group  cursor-pointer">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
  )
}

export default LogoutButton
