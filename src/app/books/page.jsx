"use client";
import React, { useState } from "react";
import allBooks from "@/data/booksData.json";
import { CiFilter, CiSearch } from "react-icons/ci";
import BookCard from "@/components/ui/BookCard";

const AllBooksPage = () => {
  const allCategories = [...new Set(allBooks.map((book) => book.category))];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => setSelectedCategories([]);

  const filteredBooks = allBooks.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(book.category);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="my-12 w-[90%] lg:container mx-auto">
      {/* Header */}
      <h2 className="font-semibold text-3xl">Browse Books</h2>
      <p className="text-sm opacity-70 mb-4">
        {filteredBooks.length} books available
      </p>

      {/* Search Bar & Mobile Drawer */}
      <div className="w-full my-10 flex items-center gap-4">
        <div className="drawer w-auto">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-1"
              className="btn drawer-button lg:hidden"
            >
              <CiFilter />
            </label>
          </div>
          <div className="drawer-side z-40">
            <label
              htmlFor="my-drawer-1"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu bg-base-100 min-h-full w-80 p-6 shadow-xl flex flex-col">
              <div className="flex justify-between items-center pb-4 border-b border-base-300">
                <h3 className="font-bold text-xl text-neutral">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="btn btn-xs btn-ghost text-gray-500 hover:text-neutral"
                >
                  Clear All
                </button>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-base mb-4 text-neutral">
                  Genre
                </h4>
                <div className="flex flex-col gap-3">
                  {allCategories.map((category, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm checkbox-neutral rounded border-gray-300"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="text-sm text-gray-600 font-medium group-hover:text-neutral transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-3xl">
          <label className="input input-bordered flex items-center gap-3 bg-base-100 rounded-full shadow-sm hover:shadow-md transition-shadow focus-within:outline-none focus-within:border-neutral focus-within:ring-2 focus-within:ring-neutral/20 w-full h-12 px-5">
            <CiSearch className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              className="grow focus:outline-none bg-transparent text-base"
              placeholder="Search books by title..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </label>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Filter Sidebar */}
        <div className="border border-base-300 rounded-2xl p-6 hidden lg:block h-fit">
          <div className="flex justify-between items-center pb-4 border-b border-base-300">
            <h3 className="font-bold text-xl text-neutral">Filters</h3>
            <button
              onClick={clearFilters}
              className="btn btn-xs btn-ghost text-gray-500 hover:text-neutral"
            >
              Clear All
            </button>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold text-base mb-4 text-neutral">Genre</h4>
            <div className="flex flex-col gap-3">
              {allCategories.map((category, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-neutral rounded border-gray-300"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span className="text-sm text-gray-600 font-medium group-hover:text-neutral transition-colors">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Book Grid */}
        <div className="lg:col-span-3">
          {filteredBooks.length === 0 ? (
            <div className="w-full py-20 text-center col-span-full min-h-150 flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold text-neutral/70">
                No books found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  clearFilters();
                }}
                className="btn btn-outline btn-sm mt-4"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} origin="allBooks" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
