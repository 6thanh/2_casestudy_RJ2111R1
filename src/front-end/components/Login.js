import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
      
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import Home from '../control/Home';


const theme = createTheme();

export default function LogIn() {    

  const [form, setForm] = useState({})
      // eslint-disable-next-line no-console

  const REGEX = {
	  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  const handleValidate =()=> {
    const errors = {};
    if (!form.email) {
      errors.email = 'Required';
    } else if (!REGEX.email.test(form.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  const initialValues = {
      email: "",
      password: "",
  };
  const adminAccount = {
      email: 'admin@gmail.com',
      password: 'letmein'
  }
  const navigate = useNavigate();
  const checkAccount = () => {
      if (form.email === adminAccount.email && form.password === adminAccount.password) {
          navigate('/products');
      } else {
          alert('Your account does not exist!');
      }
  }
  // const renderError = (message) => <p className="text-danger">{message}</p>;

  const handleChange = (event) => {
    setForm({...form,
    [event.target.name]: event.target.value});
  }

  return (
      <Home>
            <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}> */}
                    <Box>
                    <Formik
                        initialValues={initialValues}
                        // validationSchema = {validationSchema}
                        validate={handleValidate}
                        onSubmit={checkAccount}
                    >
                    {({errors}) =>(
                        <Form sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange}
                        />
                        <p className="text-danger">{errors.email}</p>
                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            min = "4"
                            onChange={handleChange}
                            />
                            <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Log In
                        </Button>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                </Form>
                )}
                </Formik>
                </Box>
                </Box>
                </Grid>
            </Grid>
            </ThemeProvider>
        </Home>
  );
 
}