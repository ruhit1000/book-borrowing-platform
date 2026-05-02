"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";

const BorrowButton = ({ book, size }) => {
  const { data: session } = authClient.useSession();

  const handleBorrow = () => {
    const user = session?.user || null;

    if (!user) {
      toast.error(
        book.available_quantity === 0
          ? "You must be logged in to join the waitlist."
          : "You must be logged in to borrow a book.",
      );
      return;
    }
    toast.success(
      book.available_quantity === 0
        ? "You have been added to the waitlist."
        : "Book borrowed successfully!",
    );
  };

  return (
    <div>
      <button
        className={
          size === "large"
            ? "btn btn-neutral btn-lg w-full sm:w-auto px-10 shadow-lg"
            : "border border-base-300 py-1 w-full rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        }
        onClick={handleBorrow}
      >
        {book.available_quantity === 0 ? "Join Waitlist" : "Borrow Now"}
      </button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
};

export default BorrowButton;
