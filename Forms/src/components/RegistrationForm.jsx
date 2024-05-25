
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert('Registration successful!');
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          {...register('firstName', { required: 'Please enter your first name!' })}
        />
        {errors.firstName && <span className="error">{errors.firstName.message}</span>}
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          {...register('lastName', { required: 'Please enter your last name!' })}
        />
        {errors.lastName && <span className="error">{errors.lastName.message}</span>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          {...register('email', {
            required: 'Please enter your email!',
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: 'Invalid email',
            },
          })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register('password', {
            required: 'Please enter your password!',
            minLength: {
              value: 5,
              message: 'Password must be more than 4 characters',
            },
            maxLength: {
              value: 20,
              message: 'Password cannot be more than 20 characters',
            },
          })}
        />
        {errors.password && <span className="error">{errors.password.message}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
