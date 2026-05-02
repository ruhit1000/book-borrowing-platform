"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, image } = Object.fromEntries(formData.entries());

    const {data, error} = await authClient.updateUser({
        image: image || null,
        name: name || null,
    });

    if (error) {
        toast.error("Failed to update profile. Please try again.");
    } else {
        toast.success("Profile updated successfully!");
        document.getElementById("update_user_form").close()
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  const { user } = session;

  const avatarSrc = user.image?.startsWith("http")
    ? user.image
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`;

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center pt-10">
          {/* Avatar */}
          <div className="avatar mb-2">
            <div className="w-24 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
              <Image src={avatarSrc} alt={user.name} width={96} height={96} />
            </div>
          </div>
          {/* User Info */}
          <h2 className="card-title text-2xl font-bold text-neutral mt-2">
            {user.name}
          </h2>
          <div className="flex items-center gap-2">
            <p className="text-gray-500 text-sm">{user.email}</p>
            {user.emailVerified && (
              <div
                className="badge badge-success badge-sm badge-outline"
                title="Email Verified"
              >
                ✓
              </div>
            )}
          </div>
          <div className="divider my-2"></div>
          {/* Details */}
          <div className="w-full text-left text-sm text-gray-500 space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="font-semibold text-neutral">User ID</span>
              <span className="truncate w-32 text-right" title={user.id}>
                {user.id}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-neutral">Joined</span>
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
          {/* Action */}
          <div className="card-actions w-full mt-2">
            <button
              className="btn btn-neutral w-full"
              onClick={() =>
                document.getElementById("update_user_form").showModal()
              }
            >
              <FaUserEdit size={20} /> Update Profile
            </button>

            <dialog
              id="update_user_form"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box text-left">
                <h3 className="font-bold text-xl text-neutral">
                  Update Profile
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-4">
                  Make changes to your personal information.
                </p>

                {/* Main Update Form */}
                <form onSubmit={handleUpdateProfile}>
                  {/* Name Field */}
                  <div className="form-control w-full">
                    <label className="label pb-1">
                      <span className="label-text font-semibold text-neutral">
                        Full Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="input input-bordered w-full focus:outline-none focus:border-neutral focus:ring-1 focus:ring-neutral"
                      defaultValue={user?.name}
                      required
                    />
                  </div>

                  {/* Image URL Field */}
                  <div className="form-control w-full mt-4">
                    <label className="label pb-1">
                      <span className="label-text font-semibold text-neutral">
                        Profile Image URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="image"
                      placeholder="https://example.com/your-avatar.jpg"
                      className="input input-bordered w-full focus:outline-none focus:border-neutral focus:ring-1 focus:ring-neutral"
                      defaultValue={user?.image}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="modal-action mt-6 flex gap-2">
                    <button
                      type="button"
                      className="btn btn-ghost"
                      onClick={() =>
                        document.getElementById("update_user_form").close()
                      }
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-neutral">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>

              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default ProfilePage;
