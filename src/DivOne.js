import { useReducer, createContext } from 'react'
import DivTwo from './DivTwo';

export const ListContext = createContext()

function reducer(state, action) {
    switch (action.type) {
        case 'add_num':
            return {
                list: [...state.list, action.payload]
            }
        case 'remove_num':
            return state
        default:
            return state
    }
}

let initialState = {
    list: [],
    todos: [],
    count: 0
}

const DivOne = () => {

    let [list, dispatch] = useReducer(reducer, initialState)

    console.log(list)

    return (
        <div>
            <h1 id="div1">DivOne</h1>
            <ListContext.Provider value={{ list, dispatch }}>
                <DivTwo />
            </ListContext.Provider>
        </div>
    );
}

export default DivOne;