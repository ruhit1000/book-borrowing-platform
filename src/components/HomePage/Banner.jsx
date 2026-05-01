import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div
      className="relative py-20 my-6 bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden container mx-auto"
      style={{ backgroundImage: "url('/images/banner-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center space-y-3 text-base-100 px-4">
        <h1 className="text-5xl font-bold">Read More, Spend Less</h1>
        <h3 className="text-xl max-w-2xl mx-auto">
          Discover thousands of books through our community of readers. Borrow,
          rent, or exchange books with fellow book lovers near you.
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
