
import { useState } from "react";

import MovieItemModal from "./MovieItemModal";

const Movie = (props) => {
    const { filterText, products } = props;

    const [openModal, setOpenModal] = useState(false);
    const [product, setProduct] = useState("");

    const handleModal=async(id)=>{
        try{

            const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
            const data = await response.json();

            setProduct(data);
            setOpenModal(true);
        }catch(error){
            console.log(error);
        }
        
        
    };

    const filteredItems = products.filter((item) =>item.name.toLowerCase().includes(filterText.toLowerCase()));

    
    return(
        <>
            {
                filteredItems.length === 0 ? (
                    <h2>No Results</h2>
                ) : filteredItems.map((item)=>{
                    // products not matching search value
                    if(item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 ){
                        return;
                    }
                    else{
                        return (
                            <div className='col-md-3' key={item.id}>
                                <div className='card'  key={ products.id }>
                                    <img src={ item.image.original }/>
                                    <h2>{ item.name }</h2>
                                    <small>Genre: { item.genres.map((genre)=> <b>{genre+', '}</b> ) }</small>
                                    <small>Rating : { item.rating.average }/10</small>
                                    <small>Run Time: { item.runtime }</small>
                                    <small>Release Date: { item.premiered }</small>
                                    <button onClick={()=>handleModal(item.id)} className='productDetailsButton'>View Details</button>
                                </div>
                            </div>
                        )
                    }
                })
            }
            {
                openModal && product &&  <MovieItemModal product={product} key={product.id} closeModal={setOpenModal} />
            }
        </>
    ); 
};

export default Movie;