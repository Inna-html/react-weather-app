import {createContext} from 'react';
import {useLocation} from '../hooks/useLocation';



export const context = createContext();

export function Provider({children}) {
    const position = useLocation()
    return (
        <context.Provider value={position}> 
            {children} 
        </context.Provider>
    )
}


