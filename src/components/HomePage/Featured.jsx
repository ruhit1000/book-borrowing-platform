import React from 'react';
import booksData from '@/data/booksData.json'
import Image from 'next/image';

const Featured = () => {
    const featuredBooks = booksData.filter((item) => item.featured === true) 
    console.log(featuredBooks)
    return (
        <div className='container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center'>
            {
                featuredBooks.map((book) => (
                    <div key={book.id} className='mb-4'>
                        <Image 
                            src={book.image_url} 
                            alt={book.title} 
                            width={300} 
                            height={400}
                            className='h-auto w-auto' 
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default Featured;