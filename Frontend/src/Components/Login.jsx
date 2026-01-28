import React from 'react'
 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from'react-hot-toast'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
       const userInfo = {
         email: data.email,
         password: data.password,
       };
       await axios
         .post("http://localhost:8080/user/login", userInfo)
         .then((res) => {
           console.log(res.data);
           if (res.data) {
             toast.success("Loggedin Successfully");
             document.getElementById("my_modal_3").close();
             setTimeout(() => {
               window.location.reload();
               localStorage.setItem("Users", JSON.stringify(res.data.user));
             }, 1000);
           }
         })
         .catch((err) => {
           if (err.response) {
             console.log(err);
             toast.error("Error: " + err.response.data.message);
             setTimeout(() => {}, 2000);
           }
         });
     };
    return (
        <div  >
            <dialog id="my_modal_3" className="modal  dark:bg-slate-900 dark:text-white">
                <div className="modal-box dark:bg-slate-900 dark:text-white dark:border dark:border-slate-50">
                    <form method="dialog dark:bg-slate-900 dark:text-white" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            onClick={() => {
                                document.getElementById("my_modal_3").close(); // modal close
                                navigate("/"); // go home
                            }}
                        >
                            ✕
                        </button>
                    
                    <h3 className=" font-bold text-3xl dark:bg-slate-900 dark:text-white ">Login</h3>
                    <div className='mt-7 space-y-1'>
                        <div   >Email</div>

                        <input type="email" placeholder='Enter your Email' className='md:w-full w-70 px-3 py-1  outline-none rounded-md border'    {...register("email", { required: true })} /><br />
                        {errors.email && (
                            <span className="text-sm text-red-500">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className='mt-8 space-y-1'>
                        <div   >Password</div>

                        <input type="password" placeholder='Enter your Password' className='md:w-full w-70  px-3 py-1  outline-none rounded-md border'  {...register("password", { required: true })} />
                        <br />
                        {errors.password && (
                            <span className="text-sm text-red-500">
                                This field is required
                            </span>
                        )}
                    </div>
                    <div className=' mt-2 px-1 md:px-2 flex justify-between items-center'>
                        <button className=' bg-pink-500 text-white px-3 py-1 md:px-6 md:py-2 hover:bg-pink-800 rounded-xl mt-5 md:mt-10'>Login</button>
                        <div className='flex justify-center items-center mt-8 md:pt-5'>
                            <p>Not registered?</p>
                            <a href="/signup" className='text-pink-500 underline cursor-pointer hover:text-pink-700'>Signup</a>
                        </div>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login