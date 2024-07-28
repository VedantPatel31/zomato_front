// src/UserAddressForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer, Zoom } from 'react-toastify'; // Import Zoom transition
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

export const UserAddress = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {
        try {
            const res = await axios.post('http://localhost:9494/address', data);
            toast.success('Address saved successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom, // Use Zoom transition
            });
            console.log(res.data);
        } catch (error) {
            toast.error('Failed to save address. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom, // Use Zoom transition
            });
            console.error('Error submitting form', error);
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
                        Address Form
                    </Typography>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Title"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('title', { required: 'Title is required' })}
                                    error={!!errors.title}
                                    helperText={errors.title?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Address Line"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('addressLine', { required: 'Address Line is required' })}
                                    error={!!errors.addressLine}
                                    helperText={errors.addressLine?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="City"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('city', { required: 'City is required' })}
                                    error={!!errors.city}
                                    helperText={errors.city?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Pincode"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('pincode', { required: 'Pincode is required' })}
                                    error={!!errors.pincode}
                                    helperText={errors.pincode?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="User ID"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('userId', { required: 'User ID is required' })}
                                    error={!!errors.userId}
                                    helperText={errors.userId?.message}
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
                                    Save Address
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>

            {/* Add ToastContainer at the bottom */}
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
