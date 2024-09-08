import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context)
	
	return (
		<nav className="navbar text-white fixed-top mb-3 px-5" style={{backgroundColor: '#292d4f'}}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white">Star-Wars</span>
			</Link>


			<div className="dropdown">
				<button className="btn btn-warning text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites <span>{store.favorites.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-dark" style={{left: '-100px'}}>
					{
					store.favorites.length === 0 ? <li className="dropdown-item">No favorites</li>
					: store.favorites.map((favorite, index) => (
							<li className="dropdown-item d-flex align-items-center justify-content-between" style={{width: '250px'}}><span style={{width: '60px', wordWrap: 'break-word'}}>{favorite.name}</span> <button onClick={() => actions.removeFavorite(favorite)} className="btn bg-transparent btn-danger text-danger"><i className='bx bxs-trash' ></i></button></li>
					))
					}
				</ul>
			</div>
		</nav>
	);
};
