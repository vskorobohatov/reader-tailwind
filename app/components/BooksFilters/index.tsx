import React, { useState } from 'react';

const BooksFilters: React.FC = () => {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const genres = ['Fiction', 'Non-Fiction', 'Mystery', 'Sci-Fi', 'Fantasy'];

  return (
    <div>
      {/* Filters Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50"
      >
        Filters
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-4 relative">
          <h2 className="text-lg font-semibold mb-4 text-black dark:text-white flex items-center justify-between">
            <span>Book Filters</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 focus:outline-none cursor-pointer"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </h2>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1 text-black dark:text-white"
              htmlFor="search"
            >
              Search
            </label>
            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search by title or author"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1 text-black dark:text-white"
              htmlFor="genre"
            >
              Genre
            </label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Genres</option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="availableOnly"
              type="checkbox"
              checked={availableOnly}
              onChange={(e) => setAvailableOnly(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="availableOnly"
              className="ml-2 text-sm text-black dark:text-white"
            >
              Available Only
            </label>
          </div>
          <button
            onClick={() => console.log({ search, genre, availableOnly })}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}
    </div>
  );
};

export default BooksFilters;