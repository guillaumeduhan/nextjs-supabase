'use client';

import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function Login() {
  const [data, setData] = useState<{
    email: string,
    password: string
  }>({
    email: '',
    password: ''
  });

  const [success, setSuccess] = useState<boolean>(false);

  const login = async () => {
    try {
      let { data: dataUser, error } = await supabase
        .auth
        .signInWithOtp({
          email: data.email,
          options: {
            shouldCreateUser: true
          }
        })

      if (dataUser) {
        setSuccess(true);
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }

  return <div className="container mx-auto w-[400px] grid gap-4">
    <div className='grid'>
      <label>Email</label>
      <input
        type='text'
        name='email'
        value={data?.email}
        onChange={handleChange}
      />
    </div>
    {/* <div className='grid'>
      <label>Password</label>
      <input
        type='password'
        name='password'
        value={data?.password}
        onChange={handleChange}
      />
    </div> */}
    {success && <div className="my-4 bg-green-100 px-2 text-green-600">An email has been sent to {data.email} to login.</div>}
    <div>
      <button className="px-4 py-2 bg-blue-500 rounded cursor-pointer" onClick={login}>Login</button>
    </div>
  </div>;
}