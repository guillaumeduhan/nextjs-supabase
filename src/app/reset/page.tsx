'use client';

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Reset() {
  const [data, setData] = useState<{
    password: string,
    confirmPassword: string
  }>({
    password: '',
    confirmPassword: ''
  })

  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const confirmPasswords = async () => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) return alert(`Your passwords are incorrect`);

    const { data: resetData, error } = await supabase
      .auth
      .updateUser({
        password: data.password
      })

    if (resetData) {
      router.push('/')
    }
    if (error) console.log(error)
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
      <label>Enter your new password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        name='password'
        value={data?.password}
        onChange={handleChange}
      />
    </div>
    <div className='grid'>
      <label>Confirm your new password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        name='confirmPassword'
        value={data?.confirmPassword}
        onChange={handleChange}
      />
    </div>
    <div className="cursor-pointer hover:underline" onClick={() => setShowPassword(!showPassword)}>
      <p className="text-sm">Show passwords</p>
    </div>
    <div>
      <button className="px-4 py-2 bg-blue-500 rounded cursor-pointer" onClick={() => confirmPasswords()}>Confirm</button>
    </div>
  </div>;
}