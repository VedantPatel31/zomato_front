// src/UserForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, MenuItem, Button, Box, Typography, Grid } from '@mui/material';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export const UserSignup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitHandler = async (data) => {
        try {
            const res = await axios.post('http://localhost:9494/signup', data);
            toast.success('User registered successfully!');
            console.log(res.data);
        } catch (error) {
            toast.error('Failed to register user. Please try again.');
            // console.error('Error submitting form', error);
            console.log("error", error);
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    bgcolor: 'background.default',
                    p: 2,
                }}
            >
                <Box
                    sx={{
                        p: 3,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 3,
                        width: '100%',
                        maxWidth: 600, // Ensure the form does not get too wide
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        User Registration
                    </Typography>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('firstName', { required: 'First Name is required' })}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName?.message}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('lastName', { required: 'Last Name is required' })}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName?.message}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    margin="normal"
                                    type="email"
                                    {...register('email', { required: 'Email is required' })}
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    margin="normal"
                                    type="password"
                                    {...register('password', { required: 'Password is required' })}
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    select
                                    label="Gender"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('gender', { required: 'Gender is required' })}
                                    error={!!errors.gender}
                                    helperText={errors.gender?.message}
                                >
                                    <MenuItem value="">Select Gender</MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Birth Date"
                                    variant="outlined"
                                    margin="normal"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    {...register('birthDate', { required: 'Birth Date is required' })}
                                    error={!!errors.birthDate}
                                    helperText={errors.birthDate?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Profile Picture URL"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('profilePicPath')}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ mt: 2 }}
                                >
                                    Register
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};
