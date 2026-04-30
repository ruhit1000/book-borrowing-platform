import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-[50vh] my-6 rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('https://i.ibb.co/MynCN030/banner-image.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-neutral"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-white">Find Your Next Read</h1>
          <p className="py-6 text-gray-200">
            Your personal digital library. Discover, filter, and borrow your favorite books instantly.
          </p>
          <Link href="/all-books" className="btn btn-primary">
            Browse Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;