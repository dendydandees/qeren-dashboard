// next and react import
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
// components import
import {
  FormControl,
  OutlinedInput,
  Button,
  FormHelperText,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface State {
  password: boolean;
}

interface IFormInputs {
  Nik: string;
  Fullname: string;
  Password: string;
  Role: string;
}

const RegisterForm = () => {
  // manage password show
  const [isShow, setIsShow] = React.useState<State>({
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
        {/* NIK Field */}
        <Controller
          name='Nik'
          control={control}
          defaultValue={''}
          rules={{
            required: 'NIK is required!',
            minLength: {
              value: 16,
              message: 'NIK contains at least 16 numbers!',
            },
            maxLength: {
              value: 16,
              message: 'NIK maximum contains 16 numbers!',
            },
          }}
          render={({ field, fieldState: { invalid, error } }) => {
            return (
              <FormControl fullWidth sx={{ marginBottom: '24px' }}>
                <OutlinedInput
                  {...field}
                  id='nik'
                  placeholder='NIK'
                  type='number'
                  aria-describedby='nik-error-text'
                  error={invalid}
                  sx={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '20px',
                    boxShadow: 4,
                  }}
                />

                {invalid && (
                  <FormHelperText id='nik-error-text' error>
                    {error?.message}
                  </FormHelperText>
                )}
              </FormControl>
            );
          }}
        />

        {/* Fullname Field */}
        <Controller
          name='Fullname'
          control={control}
          defaultValue={''}
          rules={{ required: 'Fullname is required!' }}
          render={({ field, fieldState: { invalid, error } }) => {
            return (
              <FormControl fullWidth sx={{ marginBottom: '24px' }}>
                <OutlinedInput
                  {...field}
                  id='fullname'
                  placeholder='Fullname'
                  type='text'
                  aria-describedby='fullname-error-text'
                  error={invalid}
                  sx={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '20px',
                    boxShadow: 4,
                  }}
                />

                {invalid && (
                  <FormHelperText id='fulname-error-text' error>
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

        {/* Role Field */}
        <Controller
          name='Role'
          control={control}
          defaultValue={''}
          rules={{ required: 'Role is required!' }}
          render={({ field, fieldState: { invalid, error } }) => {
            return (
              <FormControl fullWidth sx={{ marginBottom: '24px' }}>
                <Select
                  {...field}
                  displayEmpty
                  id='role'
                  placeholder='Role'
                  aria-describedby='username-error-text'
                  error={invalid}
                  sx={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: '20px',
                    boxShadow: 4,
                    textAlign: 'left',
                  }}
                >
                  <MenuItem disabled value=''>
                    Role
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>

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
          Submit
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
