import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BookTable = ({ books }) => {
  return books && books.length > 0 ? (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-2 text-left border">No</th>
            <th className="px-4 py-2 text-left border">Title</th>
            <th className="px-4 py-2 text-left border max-md:hidden">Author</th>
            <th className="px-4 py-2 text-left border max-md:hidden">Publish Year</th>
            <th className="px-4 py-2 text-center border">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className={`${
                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
              } hover:bg-gray-50`}
            >
              <td className="px-4 py-2 border text-center">{index + 1}</td>
              <td className="px-4 py-2 border">{book.title}</td>
              <td className="px-4 py-2 border max-md:hidden">{book.author}</td>
              <td className="px-4 py-2 border max-md:hidden">{book.publishyear}</td>
              <td className="px-4 py-2 border text-center">
                <div className="flex justify-center gap-4">
                  <Link
                    to={`/books/details/${book._id}`}
                    className="text-green-700 hover:text-green-900"
                  >
                    <BsInfoCircle className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="text-yellow-600 hover:text-yellow-800"
                  >
                    <AiOutlineEdit className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className="text-red-600 hover:text-red-800"
                  >
                    <MdOutlineDelete className="text-xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-center text-gray-600 mt-8">
      No books available. Add a new book to get started!
    </p>
  );
};

export default BookTable;
