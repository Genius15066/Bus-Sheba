import React from 'react'
import { useForm } from 'react-hook-form'

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  // const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit()} className="login_page">
      <input placeholder="Name" {...register('Name', { required: true })} />
      {errors.Name && <span className="warning">This field is required</span>}
      <input
        placeholder="Mobile Number"
        {...register('Number', { required: true })}
      />
      {errors.Number && <span className="warning">This field is required</span>}
      <input
        placeholder="Email ID"
        {...register('Email', {
          required: true,
          pattern:
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
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
          Field is empty or Password may not contain at least eight characters
          including one uppercase letter, one lowercase letter, and one number
          or special character
        </span>
      )}
      <input placeholder="City" {...register('City', { required: true })} />
      {errors.City && <span className="warning">This field is required</span>}
      <input type="submit" />
    </form>
  )
}

export default SignUpForm
