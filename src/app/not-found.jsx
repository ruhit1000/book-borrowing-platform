import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center text-neutral">
        <div className="max-w-md flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mb-6"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            <line x1="6" y1="2" x2="6" y2="22" />
            <line x1="10" y1="8" x2="14" y2="12" />
            <line x1="14" y1="8" x2="10" y2="12" />
          </svg>
          <h1 className="text-7xl font-bold mb-2">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="py-2">
            Oops! It looks like this page has gone missing from our shelves.
          </p>
          <Link href="/" className="btn btn-neutral mt-6">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
