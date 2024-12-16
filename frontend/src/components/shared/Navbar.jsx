import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2, Menu, X } from 'lucide-react';  // Added X icon
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import logo from '../../assets/logo.png'; // Your logo image path

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className='bg-white shadow-md'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                {/* Logo Section */}
                <div>
                    <Link to="/"> {/* This Link wraps the logo and navigates to home page */}
                        <img src={logo} alt="Logo" className="h-16 w-auto cursor-pointer" />
                    </Link>
                </div>

                {/* Desktop and Large Screens Navbar Links */}
                <div className='hidden lg:flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {user && user.role === 'recruiter' ? (
                            <>
                                <li><Link to="/admin/companies">Companies</Link></li>
                                <li><Link to="/admin/jobs">Jobs</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/jobs">Jobs</Link></li>
                                <li><Link to="/browse">Browse</Link></li>
                            </>
                        )}
                    </ul>

                    {/* User profile section */}
                    {!user ? (
                        <div className='flex items-center gap-2'>
                            <Link to="/login">
                                <Button variant="outline" aria-label="Login">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-[#096bea] hover:bg-[#096aead2]" aria-label="Signup">Signup</Button>
                            </Link>
                        </div>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer" aria-label="Profile">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className='flex gap-2 space-y-2'>
                                    <Avatar>
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@user" />
                                    </Avatar>
                                    <div>
                                        <h4 className='font-medium'>{user?.fullname}</h4>
                                        <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col my-2 text-gray-600'>
                                    {user.role === 'student' && (
                                        <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                            <User2 />
                                            <Button variant="link">
                                                <Link to="/profile">View Profile</Link>
                                            </Button>
                                        </div>
                                    )}
                                    <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                        <LogOut />
                                        <Button onClick={logoutHandler} variant="link" aria-label="Logout">Logout</Button>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden flex items-center">
                    <Button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-full">
                        <Menu size={24} />
                    </Button>

                    {/* Mobile Full-Screen Menu with Animations */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
                            <div className="flex justify-end p-4 animate__animated animate__fadeIn animate__faster">
                                <Button onClick={() => setIsMenuOpen(false)} className="text-white">
                                    <X size={24} />
                                </Button>
                            </div>
                            <div className="flex flex-col items-center justify-center w-full h-full bg-white animate__animated animate__slideInRight animate__faster">
                                <ul className='flex flex-col items-center gap-5 text-lg animate__animated animate__fadeIn animate__delay-.5s'>
                                    {user && user.role === 'recruiter' ? (
                                        <>
                                            <li><Link to="/admin/companies" className="block px-4 py-2">Companies</Link></li>
                                            <li><Link to="/admin/jobs" className="block px-4 py-2">Jobs</Link></li>
                                        </>
                                    ) : (
                                        <>
                                            <li><Link to="/" className="block px-4 py-2">Home</Link></li>
                                            <li><Link to="/jobs" className="block px-4 py-2">Jobs</Link></li>
                                            <li><Link to="/browse" className="block px-4 py-2">Browse</Link></li>
                                        </>
                                    )}

                                    {!user ? (
                                        <>
                                            <li><Link to="/login" className="block px-4 py-2">Login</Link></li>
                                            <li><Link to="/signup" className="block px-4 py-2">Signup</Link></li>
                                        </>
                                    ) : (
                                        <>
                                            <li><Link to="/profile" className="block px-4 py-2">View Profile</Link></li>
                                            <li><Button onClick={logoutHandler} variant="link" className="block px-4 py-2">Logout</Button></li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
