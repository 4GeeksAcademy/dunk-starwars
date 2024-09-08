import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom'

const Card = ({title, item, typeList}) => {
    const {actions, store} = useContext(Context)
    const [isFavorit, setIsFavorite] = useState(false)


    
    const addFavorite = () => {
        console.log('hola desde boton')
        console.log(item)
        actions.addFavorite(item)
    }

    const removeFavorite = () => {
        actions.removeFavorite(item)
    }

    useEffect(() => {
        const isFavoriteInStore = store.favorites.some(favorite => favorite.name === item.name)
        setIsFavorite(isFavoriteInStore)
    }, [store.favorites])
    
    return <div className="card" id='' style={{ width: "18rem", background: '#292d4f' }}>
        <img src={`https://starwars-visualguide.com/assets/img/${title}/${item.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div className='d-flex justify-conent-between'>
                <Link to={`/details/${title}/${item.uid}`}>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </Link>
                <button onClick={() => {setIsFavorite(!isFavorit), isFavorit ? removeFavorite(item) : addFavorite(item)}} className='btn border border-warning ms-auto text-warning'>{isFavorit ? <i className='bx bxs-heart'></i> : <i className='bx bx-heart' ></i>}</button>
            </div>
        </div>
    </div>
}

export default Card