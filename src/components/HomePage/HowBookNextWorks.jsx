import React from "react";
import { HiUserAdd } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { LuBookOpen } from "react-icons/lu";

const HowBookNextWorks = () => {
  return (
    <div className="text-center py-12 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2">How BookNext Works</h2>
        <p className="text-gray-600 mb-8">
          Simple steps to start sharing books
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="py-16">
                <HiUserAdd className="mx-auto mb-2" size={50} />
                <h3 className="text-xl font-semibold">1. Create an Account</h3>
                <p className="opacity-70">Sign up for a free account to get started.</p>
            </div>
            <div className="py-16">
                <IoMdSearch className="mx-auto mb-2" size={50} />
                <h3 className="text-xl font-semibold">2. Browse Books</h3>
                <p className="opacity-70">Explore our collection and find books you like.</p>
            </div>
            <div className="py-16">
                <LuBookOpen className="mx-auto mb-2" size={50} />
                <h3 className="text-xl font-semibold">3. Borrow Books</h3>
                <p className="opacity-70">Borrow books from our library.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HowBookNextWorks;
