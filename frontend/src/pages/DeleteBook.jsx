import React ,{useState}from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate , useNavigation, useParams} from 'react-router-dom'

const DeleteBook = () => {
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const{ id } = useParams();
  const handleDeletebook = ()=>{
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(()=>{
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        setLoading(false);
        alert(`an arror is occur check console`)
        console.log(error);
        
      })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading? <Spinner/> :" "}
      <div className='flex flex-col item-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto '>
        <h3 className='text-2xl'>Are you sure to delete this book</h3>
          <button className='p-4 bg-red-500 text-white m-8 rounded-md '
          onClick={handleDeletebook}>
              Yes , delete it
          </button>
      </div>
    </div>
  )
}

export default DeleteBook