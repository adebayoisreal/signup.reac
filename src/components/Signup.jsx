import React from 'react'
import "./Signup.css"
import { IoMdMail } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

const Signup = () => {
  return (
    <div className='container'>
     <div className="box">
        <div className="texts">
            Sign up
        </div>
        <form action="" className='forms'>
        <div className="inputs">
     <div className="input">
      <div className='icons'>
      <IoMdMail />
      </div>
      
        <input type="email" placeholder='Email ID' />
     </div>
     <div className="input">
     <div className='icons'>
      <FaUserAlt />
      </div>
        <input type="text" placeholder='Username' />
     </div>
     <div className="input">
     <div className='icons'>
     <RiLockPasswordFill />
      </div>
        <input type="password"  placeholder='Password'/>
     </div>
        </div>

        <div className="submit">
            <div className="sub">
                <button className='butt'>
                    Sign up
                </button>
            </div>
        </div>
        </form>
     </div>
    </div>
)

}
export default Signup
