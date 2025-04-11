
import { useState, useEffect } from 'react';
const Mybook = () =>{
    let[allbook, setAllBook] = useState([]);

    const getBook = async() =>{
        try{
            await fetch("http://localhost:1111/booklist")
            .then(response =>response.json())
            .then(bookArray=>{
                setAllBook(bookArray);
            })
        }
        catch(error){
            setAllBook([]);
            alert("Server is Down "+ error);
        }
    }
    useEffect(()=>{
        getBook();
    }, []);

    return(
        <section className='container mt-4'>
            <div className='row'>
                <div className='col-xl-12 text-center mb-3'>
                    <h3> Manage Books : {allbook.length} </h3>
                </div>
                {
                    allbook.map((bookName, index)=>{
                        return(
                            <div className='col-xl-2 mb-4' key={index}>
                                <p className='bg-info text-white p-3 text-center'> {bookName} </p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Mybook;