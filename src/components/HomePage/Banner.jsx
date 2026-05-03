import Link from "next/link";
import React from "react";
import 'animate.css';

const Banner = () => {
  return (
    <div
      className="relative py-20 my-6 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden container mx-auto"
      style={{ backgroundImage: "url('/images/banner-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center space-y-3 text-base-100 px-4">
        <h1 className="text-3xl lg:text-5xl font-bold animate__animated animate__bounce">Find Your Next Read</h1>
        <h3 className="text-lg lg:text-xl max-w-2xl mx-auto">
          Skip the waitlists and the late fees. Discover your next favorite book, borrow it digitally in seconds, and read at your own pace.
        </h3>
        <Link
          href="/books"
          className="inline-block bg-neutral text-white font-bold py-2 px-4 rounded hover:-translate-y-1 hover:shadow-lg hover:bg-neutral/90 transition-all duration-300"
        >
          Browse Books
        </Link>
      </div>
    </div>
  );
};

export default Banner;
