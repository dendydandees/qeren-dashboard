// next and react import
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
// components import
import {
  FormControl,
  OutlinedInput,
  Button,
  FormHelperText,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface State {
  password: boolean;
}

interface IFormInputs {
  Username: string;
  Password: string;
}

const LoginForm = () => {
  // manage password show
  const [isShow, setIsShow] = useState<State>({
    password: false,
  });
  const handleClickShowPassword = () => {
    setIsShow({
      password: !isShow.password,
    });
  };

  // manage react hook form
  const { handleSubmit, control } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '75%', margin: 'auto' }}
      >
        {/* Username Field */}
        <Controller
          name='Username'
          control={control}
          defaultValue={''}
          rules={{ required: 'Username is required!' }}
          render={({ field, fieldState: { invalid, error } }) => {
            return (
              <FormControl fullWidth sx={{ marginBottom: '24px' }}>
                <OutlinedInput
                  {...field}
                  id='username'
                  placeholder='Username'
                  type='text'
                  aria-describedby='username-error-text'
                  error={invalid}
                  sx={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '20px',
                    boxShadow: 4,
                  }}
                />

                {invalid && (
                  <FormHelperText id='username-error-text' error>
                    {error?.message}
                  </FormHelperText>
                )}
              </FormControl>
            );
          }}
        />

        {/* Password Field */}
        <Controller
          name='Password'
          control={control}
          defaultValue={''}
          rules={{ required: 'Password is required!' }}
          render={({ field, fieldState: { invalid, error } }) => {
            return (
              <FormControl fullWidth sx={{ marginBottom: '24px' }}>
                <OutlinedInput
                  {...field}
                  id='password'
                  placeholder='Password'
                  type={isShow.password ? 'text' : 'password'}
                  error={invalid}
                  sx={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '20px',
                    boxShadow: 4,
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        edge='end'
                      >
                        {isShow.password ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                {invalid && (
                  <FormHelperText id='username-error-text' error>
                    {error?.message}
                  </FormHelperText>
                )}
              </FormControl>
            );
          }}
        />

        <Button
          variant='text'
          type='submit'
          sx={{
            boxShadow: 4,
            backgroundColor: '#f4f4f4',
            margin: '16px 0',
            borderRadius: '16px',
            fontWeight: 'bold',
            padding: '8px 20px',
          }}
        >
          Log In
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
