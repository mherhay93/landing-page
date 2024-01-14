import {createContext, useReducer, FC} from 'react';
import {Actions, ContextProps, IContextProvider} from "./types";

const initialState: ContextProps = {
    value: {current: null},
    dispatch: () => {},
};

const reducer = (state: ContextProps, action: Actions): ContextProps => {
    switch (action.type) {
        case 'UPDATE_VALUE':
            return { ...state, value: action.payload };
        default:
            return state;
    }
};

const Context = createContext<ContextProps | null>(null);

export const ContextProvider:FC<IContextProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return <Context.Provider value={{ ...state, dispatch }}>{children}</Context.Provider>;
};

export default Context;
