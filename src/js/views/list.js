import React from 'react'
import ListItems from '../component/ListItems.jsx'

const List = () => {
    return <div style={{ marginTop: '70px' }}>
        <ListItems title={'characters'} typeList={'people'}/>
        <ListItems title={'planets'} typeList={'planets'}/>
        <ListItems title={'vehicles'} typeList={'vehicles'}/>
    </div>
}

export default List