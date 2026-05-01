"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const ActionButtons = () => {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  }

  if (session) {
    return (
      <button onClick={handleLogout} className="btn btn-neutral w-full">
        <IoIosLogOut size={20} /> Logout
      </button>
    );
  } else {
    return (
      <Link href="/login" className="btn btn-neutral w-full">
        <FaRegUser /> Login
      </Link>
    );
  }
};

export default ActionButtons;
