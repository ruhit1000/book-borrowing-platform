"use client";
import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { email, password } = userData;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(
        error.message || "An error occurred during login. Please try again.",
      );
    } else {
      toast.success("Logged in successfully!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
    setIsPending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="bg-base-100 p-8 sm:p-10 rounded-2xl shadow-xl w-full max-w-md border border-base-300">
        <h1 className="text-3xl font-bold text-center text-neutral mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 text-sm mb-8">
          Enter your credentials to access your account
        </p>

        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
          <div className="form-control w-full">
            <label className="label pb-1">
              <span className="label-text font-semibold text-neutral">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="input input-bordered w-full focus:outline-none focus:border-neutral focus:ring-1 focus:ring-neutral"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label pb-1">
              <span className="label-text font-semibold text-neutral">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full focus:outline-none focus:border-neutral focus:ring-1 focus:ring-neutral"
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-4">
            <button type="submit" className="btn btn-neutral w-full text-base">
              {isPending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-neutral font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default LoginPage;
