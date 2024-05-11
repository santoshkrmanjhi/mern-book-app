import React, { useEffect, useState } from 'react'
import axios from "axios";
import Cards from './Cards';
import {Link} from "react-router-dom";
function Course() {
    const [book,setBook]=useState([])
    useEffect(() =>{
        const getBook = async()=>{
            try {
                const res = await axios.get("/book");
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getBook();

    },[]);
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-0.5">
                <div className='mt-20 items-center justify-center text-center py-10'>
                    <h1 className='text-2xl md:text-4xl'>We are delighted to have <span className='text-pink-500'> you Here:) </span></h1>
                    <p className='mt-12'>Step into a world of literary wonder with our extensive collection, showcasing a diverse array of books across genres. From spellbinding fiction and thought-provoking nonfiction to groundbreaking tech insights and delectable culinary narratives, there's a perfect book waiting for you. Uncover new voices, cherished classics, and thrilling adventures to captivate your imagination. With a wide variety of books available, our community invites you to dive deep into the world of stories. Enjoy a truly enriching literary experience!</p>
                    <Link to="/">
                    <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course