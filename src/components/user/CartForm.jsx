// src/CartForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography, Grid } from '@mui/material';
import axios from 'axios';
import { toast, ToastContainer, Zoom } from 'react-toastify'; // Import Zoom transition
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

export const CartForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = async (data) => {
        try {
            const res = await axios.post('http://localhost:9494/cart', data);
            toast.success('Cart item saved successfully!', {
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
            toast.error('Failed to save cart item. Please try again.', {
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
                        Cart Form
                    </Typography>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="User ID"
                                    variant="outlined"
                                    margin="normal"
                                    type="number"
                                    {...register('userId', { required: 'User ID is required' })}
                                    error={!!errors.userId}
                                    helperText={errors.userId?.message}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Restaurant ID"
                                    variant="outlined"
                                    margin="normal"
                                    type="number"
                                    {...register('restaurantId', { required: 'Restaurant ID is required' })}
                                    error={!!errors.restaurantId}
                                    helperText={errors.restaurantId?.message}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Item ID"
                                    variant="outlined"
                                    margin="normal"
                                    type="number"
                                    {...register('itemId', { required: 'Item ID is required' })}
                                    error={!!errors.itemId}
                                    helperText={errors.itemId?.message}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Quantity"
                                    variant="outlined"
                                    margin="normal"
                                    type="number"
                                    {...register('qty', { required: 'Quantity is required' })}
                                    error={!!errors.qty}
                                    helperText={errors.qty?.message}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Cooking Instructions"
                                    variant="outlined"
                                    margin="normal"
                                    {...register('cookingInstructions')}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Total Amount"
                                    variant="outlined"
                                    margin="normal"
                                    type="number"
                                    {...register('totalAmount', { required: 'Total Amount is required' })}
                                    error={!!errors.totalAmount}
                                    helperText={errors.totalAmount?.message}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Discount Amount"
                                    variant="outlined"
                                    margin="normal"
                                    type="number"
                                    {...register('discountAmount')}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Final Amount"
                                    variant="outlined"
                                    margin="normal"
                                    type="number"
                                    {...register('finalAmount')}
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
                                    Save Cart
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
