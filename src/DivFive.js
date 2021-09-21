import React, { useContext } from 'react'
import { ListContext } from './DivOne'

const DivFive = () => {

    const list = useContext(ListContext)

    
    console.log(list)

    return (
        <div onClick={() => list.dispatch({ type: 'add_num', payload: Math.random() })}> <h1 id="div5">DivFive</h1></div>
    );
}

export default DivFive;