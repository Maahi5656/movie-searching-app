
const MovieItemModal = (props) => {

    const {product,closeModal} = props;

    // const temp = document.createElement("div");

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={()=>closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h1><b>{ product.name }</b></h1>
                </div>
                <div className='body'>
                    <img src={ product.image.original }/>
                    <div>
                        <p>
                            <small>{ product.summary }</small>
                        </p>
                        <p>Genre: { product.genres.map((genre)=> <b>{genre+', '}</b> ) }</p>
                        <p>Rating : { product.rating.average }/10</p>
                        <p>Run Time: { product.runtime }</p>
                        <p>Release Date: { product.premiered }</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieItemModal;