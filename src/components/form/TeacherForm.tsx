"use client";

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
  sex:z.enum(["male", "female"], {message: "sex is required"})
});
const TeacherForm = ({ type, data }: { type: "create" | "update"; data?:any } ) => {
  return (
    <form>
      <input type="text" defaultValue={data}/>
    </form>
  );
};

export default TeacherForm;
