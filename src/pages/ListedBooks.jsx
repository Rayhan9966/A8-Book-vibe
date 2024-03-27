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
        <div><br />
         
            <h1>book list page:{lists.length}</h1>
            
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