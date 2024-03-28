import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import List from '../components/List/List';

const ListedBooks = () => {
    const [lists,setList]= useState([]);
    useEffect(()=>{
fetch('book.json')
.then(res=> res.json())
.then(data=> setList(data))

    },[])
    
    return (
        <div className='text-center font-bold text-5xl'>
            <br /><br />
         
            <h1>Book List</h1>
            
            <div>
                <div>
                    
                </div>
{
    lists.map(list=><List key={list.bookId} list={list}></List>)
}
            </div>
        </div>
    );
};

export default ListedBooks;