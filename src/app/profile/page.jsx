import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserEdit } from "react-icons/fa";

const ProfilePage = async () => {
  
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <p className="text-neutral text-lg">You need to be logged in to view this page.</p>
      </div>
    );
  }

  const { user } = session;

  const avatarSrc = user.image?.startsWith("http") ? user.image : null;

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-300">
        <div className="card-body items-center text-center pt-10">
          {/* Avatar */}
          <div className="avatar mb-2">
            {avatarSrc ? (
              <div className="w-24 rounded-full ring ring-neutral ring-offset-base-100 ring-offset-2">
                <Image
                  src={avatarSrc}
                  alt={user.name}
                  width={96}
                  height={96}
                  loading="eager"
                />
              </div>
            ) : (
              <div className="avatar avatar-online avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-24 rounded-full">
                  <span className="text-4xl">{user.name.charAt(0)}</span>
                </div>
              </div>
            )}
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
          <Link
          href={'/profile/update'}
          className="btn btn-neutral w-full"
          >
           <FaUserEdit size={20} /> Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
