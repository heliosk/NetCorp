import React, { useReducer } from 'react';
import uuid from 'uuid';
import AlertContext from './alert.context';
import alertReducer from './alert.reducers';
import * as types from './alert.types';

const AlertState = props => {
    
    const initialState = [];

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Set Alert
    const setAlert = (msg, type, timeout = 5000) => {
        const id = uuid.v4();

        dispatch({
            type: types.SET_ALERT,
            payload: { msg, type, id}
        });

        setTimeout(() => dispatch({ type: types.REMOVE_ALERT, payload: id }), timeout);
    }

    return (
        <AlertContext.Provider
            value={{
                alerts: state,
                setAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    );
}

export default AlertState;