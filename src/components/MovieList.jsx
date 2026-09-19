import { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import Movie from './Movie';

const MovieList = () => {

    const [products, setProducts] = useState([]);
    const [inputText, setInputText] = useState("");
    
    
    const getProducts = async () =>{
        try{
            const response = await fetch('https://api.tvmaze.com/shows');
            console.log("Response", response);
            const data = await response.json();
            console.log("Data", data);
            setProducts(data);
        }catch(error){
            console.log(error);
        }     
    }

    const handleSearchField = (value) =>{
        setInputText(value);
    }

    useEffect(()=>{
        let timer = setTimeout(()=>getProducts(), 3000);

        return()=>{
            clearTimeout(timer);
        }
    }, []);
                
    return (
        <>
            <div className='movieBanner'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='section-title'>Movie Store</h1>
                        <SearchBar filterText={ inputText } onSearchTextChange={ handleSearchField } />
                    </div>
                </div>
            </div>
            <div className='movieList' id="movieList">
                <div className='row'>
                    <h2>View List of Available TV Shows</h2>
                    <div className='productList'>
                        <Movie products={products} filterText={inputText} />
                    </div>
                </div> 
            </div>
        </>
    );
};

export default MovieList;