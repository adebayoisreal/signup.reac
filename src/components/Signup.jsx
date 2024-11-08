import React from 'react'
import "./Signup.css"

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
        <input type="email" placeholder='Email ID' />
     </div>
     <div className="input">
        <input type="text" placeholder='Username' />
     </div>
     <div className="input">
        <input type="password"  placeholder='Password'/>
     </div>
        </div>

        <div className="submit">
            <div className="sub">
                <button>
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
