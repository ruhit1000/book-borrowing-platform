"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ProfileUpdatePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [isUpdating, setIsUpdating] = useState(false);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-50">
        <span className="loading loading-spinner loading-lg text-neutral"></span>
      </div>
    );
  }

  const user = session?.user;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    const formData = new FormData(e.target);
    const { name, image } = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.updateUser({
      image: image || null,
      name: name || null,
    });

    if (error) {
      toast.error("Failed to update profile. Please try again.");
      setIsUpdating(false);
    } else {
      toast.success("Profile updated successfully!");
      setIsUpdating(false);
      setTimeout(() => {
        router.refresh()
        router.push('/profile')
      }, 1000);
    }
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="max-w-md mx-auto bg-base-100 p-8 rounded-2xl shadow-xl border border-base-200">
        <div className="mb-6 border-b border-base-200 pb-4">
          <h3 className="font-bold text-2xl text-neutral">Update Profile</h3>
          <p className="text-sm text-gray-500 mt-2">
            Update your personal information and public avatar.
          </p>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-neutral">
                Full Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="input input-bordered bg-base-50 focus:bg-base-100 w-full focus:outline-none focus:border-neutral focus:ring-1 focus:ring-neutral transition-colors"
              defaultValue={user?.name}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-neutral">
                Profile Image URL
              </span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/your-avatar.jpg"
              className="input input-bordered bg-base-50 focus:bg-base-100 w-full focus:outline-none focus:border-neutral focus:ring-1 focus:ring-neutral transition-colors"
              defaultValue={user?.image}
            />
          </div>

          <div className="flex gap-3 pt-4 mt-6">
            <Link
              type="button"
              className="btn btn-ghost flex-1"
              href={"/profile"}
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="btn btn-neutral flex-1"
              disabled={isUpdating}
            >
              {isUpdating ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
        />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
