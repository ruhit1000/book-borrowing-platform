import React from 'react';
import allBooks from "@/data/booksData.json";
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const BookDetailsPage = async ({ params }) => {
    const { id } = await params;
    const book = allBooks.find((b) => b.id === parseInt(id));

    return (
        <div className='min-h-screen py-12 px-4 md:px-8 container mx-auto max-w-6xl'>
            {book ? (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start'>
                    
                    <div className='flex justify-center md:sticky md:top-24'>
                        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl bg-base-200">
                            <Image 
                                src={book.image_url}
                                alt={book.title}
                                width={500}
                                height={700}
                                className='w-full aspect-3/4 object-cover'
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: Text & Actions */}
                    <div className='flex flex-col pt-4'>
                        <div className="mb-4">
                            <span className="badge badge-primary badge-outline font-medium px-4 py-3">
                                {book.category}
                            </span>
                        </div>

                        <h1 className='text-4xl lg:text-5xl font-extrabold text-neutral tracking-tight mb-2'>
                            {book.title}
                        </h1>
                        <h2 className='text-xl text-gray-500 mb-6'>
                            by <span className="text-primary font-semibold hover:underline cursor-pointer">{book.author}</span>
                        </h2>

                        {/* Ratings */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex text-orange-400 text-xl"><FaStar /></div>
                            <span className="font-bold text-lg text-neutral">{book.ratings.average}</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-500">{book.ratings.count} Reader Reviews</span>
                        </div>

                        <div className="divider my-2"></div>

                        {/* Description */}
                        <div className="mb-8 mt-4">
                            <h3 className="text-xl font-bold text-neutral mb-3">Details</h3>
                            <p className='text-gray-600 leading-relaxed text-lg'>
                                {book.description}
                            </p>
                        </div>

                        {/* Availability */}
                        <div className="bg-base-200 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 mt-auto border border-base-300">
                            <div>
                                <p className="text-sm font-medium text-gray-500 mb-1">Availability</p>
                                {book.available_quantity > 0 ? (
                                    <p className="font-semibold text-lg text-success flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse"></span>
                                        {book.available_quantity} copies ready
                                    </p>
                                ) : (
                                    <p className="font-semibold text-lg text-error">Out of Stock</p>
                                )}
                            </div>
                            <button 
                                className="btn btn-neutral btn-lg w-full sm:w-auto px-10 shadow-lg"
                                disabled={book.available_quantity === 0}
                            >
                                {book.available_quantity === 0 ? "Join Waitlist" : "Borrow Now"}
                            </button>
                        </div>
                    </div>

                </div>
            ) : (
                
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <h2 className="text-4xl font-bold text-neutral mb-3">Book Not Found</h2>
                    <p className="text-gray-500 text-lg mb-8 max-w-md">
                        The book you're looking for doesn't exist or may have been removed from our library.
                    </p>
                    <Link href="/books" className="btn btn-primary rounded-full px-8">
                        Browse Library
                    </Link>
                </div>
            )}
        </div>
    );
};

export default BookDetailsPage;