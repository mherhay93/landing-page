import {Dispatch, MutableRefObject, ReactNode} from "react";

export interface ContextProps {
    value: MutableRefObject<null>;
    dispatch: Dispatch<Actions>;
}

export interface IContextProvider { children: ReactNode }
export type Actions = { type: 'UPDATE_VALUE'; payload: MutableRefObject<null> };
