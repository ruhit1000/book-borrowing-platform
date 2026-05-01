import Link from 'next/link';
import React from 'react';

const ViewDetailsButton = ({ book }) => {
    return (
        <Link
            href={`/books/${book.id}`}
            className="py-1 w-full rounded-xl text-sm font-medium bg-neutral text-base-100 transition-colors duration-200 cursor-pointer text-center block"
        >
            View Details
        </Link>
    );
};

export default ViewDetailsButton;