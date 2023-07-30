import React from 'react'
import bgImg from '../assets/img2.jpg';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section >
        <div className="register">
            <div className="col-1">
                <h2 style={{paddingBottom:'20px'}}>Sign In</h2>
                <span style={{letterSpacing:"1px"}}>Looking <span style={{color:"black",fontWeight:"bolder"}}>FORWORD</span> to help you</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="password" {...register("password")} placeholder='password' />
                    {/* <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' /> */}
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <Link to="/sidebar">
                    
                    <button className='btn'>Sign In</button>
                    </Link>
                </form>

            </div>
            <div className="col-2">
                <img  src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
