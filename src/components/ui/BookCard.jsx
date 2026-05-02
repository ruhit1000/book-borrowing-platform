import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import BorrowButton from "./BorrowButton";
import ViewDetailsButton from "./ViewDetailsButton";

const BookCard = ({ book }) => {
  return (
    <div className="shadow rounded-lg group h-full flex flex-col">
      <div className="overflow-hidden rounded-t-lg">
        <Image
          src={book.image_url}
          alt="Featured Book"
          width={300}
          height={400}
          className="aspect-3/4 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="border border-base-300 rounded-b-lg border-t-0 p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-semibold text-lg mt-4">{book.title}</h4>
          <p className="text-gray-600 text-sm">by {book.author}</p>
          <div className="flex items-center mt-2">
            <FaStar color="orange" />
            <p className="text-gray-600 text-xs ml-2">
              <span className="text-neutral text-sm">{book.ratings.average}</span> ({book.ratings.count} ratings)
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2">
          <BorrowButton book={book} size={'small'} />
          <ViewDetailsButton book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;