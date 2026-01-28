import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm, } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'


const Signup = () => {
    const navigate = useNavigate()  // React Router hook


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {

        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios
            .post("http://localhost:8080/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                     toast.success("Signup Successfully");
                    navigate(from, { replace: true });
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                console.log(res.data.user);
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                     toast.error("Error: " + err.response.data.message);
                }
            });
    }


    return (
        <>
            <div className="flex h-screen items-center justify-center bg-gray-100   dark:bg-slate-900 dark:text-white dark:border dark:border-slate-50">

                <div className="    w-[330px] md:w-[600px] bg-white dark:bg-slate-800 dark:text-white md:p-10 p-5 rounded-xl shadow-xl relative">

                    {/* Close button */}
                    <button
                        onClick={() => navigate("/")}  // navigate to home page
                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                    >
                        ✕
                    </button>

                    <h3 className="font-bold text-3xl mb-6 dark:text-white">Signup</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <div className="mt-4 space-y-1">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter your fullname"
                                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white" {...register("fullname", { required: true })} /><br />
                            {errors.fullname && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Email */}
                        <div className="mt-4 space-y-1">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white" {...register("email", { required: true })} /><br />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mt-4 space-y-1">
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border rounded-md outline-none dark:bg-slate-700 dark:text-white"  {...register("password", { required: true })} />
                            <br />
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    This field is required
                                </span>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-between items-center mt-6 gap-5">
                            <button className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-700">
                                Signup
                            </button>

                            <div className="text-md md:text-lg dark:text-white ">
                                Already have an account?{" "}

                                <button
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
                                    className="text-blue-500 underline"
                                >
                                    Login
                                </button>
                                <Login />
                            </div>
                        </div>

                    </form>
                </div>
            </div >
        </>
    )
}

export default Signup
