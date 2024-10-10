import React, { useState } from 'react';
import { TextField, Button, IconButton, InputAdornment, Typography, Grid } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { errorToast, successToast } from 'src/shared/Toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post('/auth/login', values);

        if (data) {
          const token = data.token;
          localStorage.setItem('authToken', token);
          // dispatch(setAuthData(data?.data));
          successToast('Login Success');
          navigate('/');
        } else {
          errorToast('Invalid Credentials');
        }
      } catch (error) {
        errorToast('Login failed');
        console.error('Login failed', error);
      }
    },
  });

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: 1 }}
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Email Address
        </Typography>
        <TextField
          id="email"
          name="email"
          type="email"
          fullWidth
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ marginBottom: 1 }}>
          Password
        </Typography>
        <TextField
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            borderRadius: '20px',
            width: '50%',
            margin: 'auto',
          }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
