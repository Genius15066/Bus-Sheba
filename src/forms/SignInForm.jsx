import React from 'react'
import { useForm } from 'react-hook-form'

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <form onSubmit={handleSubmit()} className="login_page">
      <input
        placeholder="Email ID"
        {...register('Email', {
          required: true,
        })}
      />
      {errors.Email && (
        <span className="warning">
          This field is required or Email ID is not correct
        </span>
      )}
      <input
        placeholder="Password"
        {...register('Password', {
          required: true,
          pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
        })}
      />
      {errors.Password && (
        <span className="warning">
          This field is required or password is not correct
        </span>
      )}
      <input type="submit" />
    </form>
  )
}

export default SignInForm
