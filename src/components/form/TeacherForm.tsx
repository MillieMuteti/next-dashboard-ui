"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const schema = z.object({
  username: z.string()
  .min(3, { message: 'User name must be atleast 3  characters long!' })
  .max(1, { message: 'User name must not exceed 20 characters' }),
  email: z.string().email({message:"Invalid Email Address"}),
  password: z.string()
  .min(8, { message: 'User name must be atleast 8 characters long!' }),
  firstname: z.string().min(1, { message: 'First Name is required' }),
  lastname: z.string().min(1, { message: 'Last Name is required' }),
  phone: z.string().min(1, { message: 'phone number is required' }),
  address: z.string().min(1, { message: 'address is required' }),
  birthday: z.date({ message: 'First Name is required' }),
  sex:z.enum(["male", "female"], {message: "sex is required"}),
  img:z.instanceof(File, {message:"Image is required"}),
});
const TeacherForm = ({ type, data }: { type: "create" | "update"; data?:any } ) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schema),
      });
  return (
    <form className="flex flex-col gap-8">
        <h1 className="text-xs text-gray-400 font-medium">Create a new teacher</h1>
        <span className=" text-xs text-gray-400 font-medium">Authentication Informartion</span>
        <input type="text" {...register("username")} className="ring-[1.5px] text-gray-300 p-2 rounded-md text-sm"/>
        {errors.username?.message && <p>{errors.username?.message.toString()}</p>}
        <span className="text-xs text-gray-400 font-medium">Personal Information</span>
      
    </form>
  );
};

export default TeacherForm;
