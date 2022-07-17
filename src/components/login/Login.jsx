import { Button } from 'react-bootstrap'
import { React, useState } from 'react'
import SignInForm from '../../Utilities/forms/SignInForm'
import SignUpForm from '../../Utilities/forms/SignUpForm'

function Login() {
  const [newUser, setNewUser] = useState(false)

  return (
    <div className="login_style">
      <div className="left">
        <div className="title">
          {newUser ? (
            <h1 className="text-center mb-4">SignUp</h1>
          ) : (
            <h1 className="text-center mb-4">SignIn</h1>
          )}
        </div>
        {newUser ? <SignUpForm /> : <SignInForm />}
      </div>

      <div className="right">
        <div className="reg_img">
          {newUser ? (
            <div className="reg_text">
              <h2>Welcome Back</h2>
              <p>If you already have an account, just sign in.</p>
            </div>
          ) : (
            <div className="reg_text">
              <h2>Glad to see you</h2>
              <p>Sign up and Explore our website! Book your seat</p>
            </div>
          )}
          {newUser ? (
            <div className="img_btn">
              <Button onClick={() => setNewUser(false)} className="reg_btn">
                Sign In
              </Button>
            </div>
          ) : (
            <div className="img_btn">
              <Button onClick={() => setNewUser(true)} className="reg_btn">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
