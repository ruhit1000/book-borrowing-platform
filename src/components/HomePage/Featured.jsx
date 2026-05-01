import React from "react";
import booksData from "@/data/booksData.json";
import Image from "next/image";
import BookCard from "../ui/BookCard";

const Featured = () => {
  const featuredBooks = booksData.filter((item) => item.featured === true);

  return (
    <div className="py-12 container mx-auto">
        <h2 className="text-3xl font-bold">Featured Books</h2>
        <p className="text-gray-600 mb-8">
          Discover our handpicked selection of featured books that are trending and highly recommended.
        </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {
            featuredBooks.map((book) => (
                <BookCard key={book.id} book={book}/>
            ))
        }
      </div>
    </div>
  );
};

export default Featured;
