import React from "react";
import allBooks from "@/data/booksData.json";
import Link from "next/link";
import 'animate.css';

const Category = () => {
  const allCategories = [...new Set(allBooks.map((book) => book.category))];

  return (
    <div className="container mx-auto py-12 text-center space-y-2">
      <h2 className="font-bold text-3xl">Browse by Category</h2>
      <p>
        Explore our wide range of book categories and find your next great read!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-8 place-items-center">
        {allCategories.map((category, index) => (
          <Link
            href={"/books"}
            key={index}
            className="border-2 border-base-300 rounded-2xl py-8 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-neutral cursor-pointer"
          >
            <h4 className="text-xl font-semibold">{category}</h4>
            <p className="text-sm opacity-70">{allBooks.filter((book) => book.category === category).length} books</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
