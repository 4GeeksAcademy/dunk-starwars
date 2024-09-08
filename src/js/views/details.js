import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'
import DetailsItem from '../component/DetailsItem.jsx'

const Details = () => {
    const {title, id} = useParams()


    return (
        <div>
            <DetailsItem title={title} id={id} />
        </div>
    )

}

export default Details