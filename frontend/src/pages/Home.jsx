import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BookTable from '../components/home/BookTable';
import BooksCard from '../components/home/BooksCard';
const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType,setShowType] = useState('table')

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/books') // Ensure this matches your backend route
            .then((response) => {
                setBooks(response.data.data); // Ensure the backend sends data in this format
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);
    

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowType('table')}>Table</button>

                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={()=>setShowType('card')}>Card</button>

            </div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Book List</h1>
                <Link
                    to="/books/create"
                    className="flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700"
                >
                    <MdOutlineAddBox className="text-2xl" />
                    <span>Add Book</span>
                </Link>
            </div>
            {loading ? <Spinner/> : showType==='table' ? (<BookTable books={books}/>):(<BooksCard books={books}/>)}
        </div>
    );
};

export default Home;
