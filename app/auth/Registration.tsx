import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Registration = () => {
  const inputClass = "shadow-sm p-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-[90%] bg-white rounded-4xl shadow-2xl overflow-hidden">
        
        {/* Left side: Gradient card */}
        <div className="hidden md:flex flex-col justify-center bg-gradient-to-t from-amber-400 via-amber-500 to-orange-500 w-full md:w-1/2 p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Simplify management with our dashboard
          </h1>
        </div>

        {/* Right side: Registration/Login form */}
        <div className="w-full md:w-1/2 p-10 text-center flex flex-col items-center">
          
          {/* Logo */}
          <div className="flex justify-center gap-5 mb-7 items-center">
            <Image src="/1.png" alt="E Spurt Logo" width={70} height={70} className="rounded-full" />
            <h1 className="font-bold text-2xl">E Spurt</h1>
          </div>

          {/* Welcome text */}
          <div className="pb-7">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-400 text-sm">Please login to your account</p>
          </div>

          {/* Form Inputs */}
          <div className="flex flex-col gap-4 w-full">
            <input placeholder="First Name" className={inputClass} />
            <input placeholder="Last Name" className={inputClass} />
            <input placeholder="Age" className={inputClass} />
            <input placeholder="Sex" className={inputClass} />
            <input placeholder="Email address" className={inputClass} type="email" />
            <input placeholder="Password" className={inputClass} type="password" />
            <input placeholder="Confirmation Password" className={inputClass} type="password" />
          </div>

          {/* Forgot password link */}
          <Link href="/" className="self-end mt-2 text-gray-600 text-sm">
            Forgot Password?
          </Link>

          {/* Buttons */}
          <div className="mt-6 w-full flex flex-col gap-4">
            <button className="text-white bg-orange-400 h-12 rounded-xl w-full flex items-center justify-center">
              Login
            </button>

            <p className="text-gray-500 text-sm">or login with</p>

            {/* Social Login */}
            <div className="flex justify-evenly mt-2 w-full">
              <div className="flex gap-2 items-center">
                <Image src="/google.png" alt="Google" width={20} height={20} />
                <p>Google</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
                <p>Facebook</p>
              </div>
            </div>

            {/* Sign-up prompt */}
            <p className="mt-6 text-gray-600">
              Do you have an account? <Link href="/" className="text-orange-400 font-semibold">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
