import React from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

const books: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

const BooksList: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Books List</h1>
      <ul className="space-y-4">
        {books.map((book) => (
          <li
            key={book.id}
            className="p-4 bg-white shadow rounded-lg hover:bg-gray-50 transition"
          >
            <strong className="text-lg text-gray-900">{book.title}</strong>{' '}
            <span className="text-gray-600">by {book.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;