// components/BookTable.js
import React from 'react';

const BookTable = ({ books }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Book List</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">BookID</th>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Author</th>
            <th className="py-2 px-4 border">ISBN</th>
            <th className="py-2 px-4 border">Genre</th>
            <th className="py-2 px-4 border">Publication Year</th>
            <th className="py-2 px-4 border">Copies Available</th>
            <th className="py-2 px-4 border">Total Copies</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.Bookid} className="border">
              <td className="py-2 px-4 border">{book.bookid}</td>
              <td className="py-2 px-4 border">{book.title}</td>
              <td className="py-2 px-4 border">{book.author}</td>
              <td className="py-2 px-4 border">{book.isbn}</td>
              <td className="py-2 px-4 border">{book.genre}</td>
              <td className="py-2 px-4 border">{book.publicationyear}</td>
              <td className="py-2 px-4 border">{book.copiesavailable}</td>
              <td className="py-2 px-4 border">{book.totalopies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
