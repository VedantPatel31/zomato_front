// src/AdminPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, Box, Typography } from '@mui/material';
import { toast, ToastContainer, Zoom } from 'react-toastify'; // Import Zoom transition
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        birthDate: '',
        profilePicPath: ''
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        console.log('Fetching users...');
        const response = await axios.get('http://localhost:9494/admin/users');
        console.log(
            response.data
        );
        try {
            const response = await axios.get('http://localhost:9494/admin/users');
            console.log(
                response.data
            );
            setUsers(response.data);
        } catch (error) {
            toast.error('Failed to fetch users. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    };

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:9494/admin/user/${userId}`);
            toast.success('User deleted successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
            fetchUsers();
        } catch (error) {
            toast.error('Failed to delete user. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    };

    const handleUpdate = async () => {
        try {
            await axios.put('http://localhost:9494/admin/user/update', updatedUser);
            toast.success('User updated successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
            fetchUsers();
        } catch (error) {
            toast.error('Failed to update user. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
            });
        }
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '100vh',
                    bgcolor: 'background.default',
                    p: 2,
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Admin User Management
                </Typography>
                <TableContainer component={Paper} sx={{ maxWidth: '90%', marginTop: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.userId}>
                                    <TableCell>{user.userId}</TableCell>
                                    <TableCell>{user.firstName}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="secondary" onClick={() => handleDelete(user.userId)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box
                    sx={{
                        p: 3,
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        boxShadow: 3,
                        width: '100%',
                        maxWidth: 600,
                        mt: 4,
                    }}
                >
                    <Typography variant="h5" component="h2" gutterBottom>
                        Update User
                    </Typography>
                    <TextField
                        fullWidth
                        label="User ID"
                        variant="outlined"
                        margin="normal"
                        type="number"
                        value={updatedUser.userId}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, userId: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        margin="normal"
                        value={updatedUser.firstName}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, firstName: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        value={updatedUser.lastName}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, lastName: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        value={updatedUser.email}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        margin="normal"
                        type="password"
                        value={updatedUser.password}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, password: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Gender"
                        variant="outlined"
                        margin="normal"
                        value={updatedUser.gender}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, gender: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Birth Date"
                        variant="outlined"
                        margin="normal"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={updatedUser.birthDate}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, birthDate: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="Profile Picture URL"
                        variant="outlined"
                        margin="normal"
                        value={updatedUser.profilePicPath}
                        onChange={(e) => setUpdatedUser({ ...updatedUser, profilePicPath: e.target.value })}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={handleUpdate}
                    >
                        Update User
                    </Button>
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

export default AdminPage;
