import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../store/appContext'
import Card from './Card.jsx'

const ListItems = ({ title, typeList }) => {
    const { actions } = useContext(Context)
    const [list, setList] = useState([])
    const URL = `https://www.swapi.tech/api/${typeList}/`

    console.log(URL)
    
    const getData = async () => {
        const data = await actions.getData(typeList);
        setList(data);
    }

    useEffect(() => {
        getData()
    }, [])

    return <div className='mt-5'>
        <h1 className='text-center'>{title}</h1>
        <div className='d-flex flex-wrap justify-content-center gap-2'>
            {list.map(item => (
                <Card key={item.name} item={item} title={title} typeList={typeList}/>
            ))}
        </div>
    </div>
}

export default ListItems