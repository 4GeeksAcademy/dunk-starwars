import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'
import './details.css'

const DetailsItem = ({ title, id }) => {
    const { actions } = useContext(Context)
    const [data, setData] = useState([])
    console.log(title, id)

    let info = []

    if ( title === 'characters' ){
        info = [`Name: ${data.properties?.name}`, `Gender: ${data.properties?.gender}`, `Mass: ${data.properties?.mass}`, `Height: ${data.properties?.height}`]
    } else if ( title === 'vehicles') {
        info = [`Name: ${data.properties?.name}`, `Model: ${data.properties?.model}`, `Vehicle Class: ${data.properties?.vehicle_class}`, `Price: ${data.properties?.cost_in_credits} credits`, `Manufacturer: ${data.properties?.manufacturer}`]
    } else if (title === 'planets') {
        info = [`Name: ${data.properties?.name}`, `Diameter: ${data.properties?.diameter}`, `Gravity: ${data.properties?.gravity}`, `Climate: ${data.properties?.climate}`, `Terrain: ${data.properties?.terrain}`, `Population: ${data.properties?.population}`]
    }

    const getDataById = async () => {
        if (title === 'characters') {
            title = 'people'
        }
        try {
            const res = await fetch(`https://www.swapi.tech/api/${title}/${id}`);


            const dataId = await res.json();
            console.log(dataId);
            setData(dataId.result);
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };
    useEffect(() => {
        getDataById()
    }, [])
    return (
        <div className="mb-3 bg-transparent w-75 mx-auto row d-flex justify-content-center align-items-center" style={{ marginTop: '70px', maxWidth: '900px', minHeight: '75vh' }}>
            <div className='col-4'>
                <img src={`https://starwars-visualguide.com/assets/img/${title}/${id}.jpg`} alt="..." />
            </div>
            <div className="card-body col-8 d-flex flex-column justify-content-between gap-5 p-4">
                <div className='container'>
                    <h4 className="card-title">{data.properties?.name}</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae earum error quisquam neque dicta mollitia deserunt, minima aut minus sed, qui quia nostrum suscipit quas, eum iure aliquam. At, voluptates quia aperiam accusantium voluptas numquam qui nulla est molestiae libero.</p>
                </div>
                <div className='container'>
                    <h4>More details</h4>
                    {info.map(item => (
                        <p>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DetailsItem