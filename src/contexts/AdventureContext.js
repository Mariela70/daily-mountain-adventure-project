import { createContext, useReducer, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import * as adventureService from '../services/adventureService';

export const AdventureContext = createContext();

const adventureReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ADVENTURES':
            return action.payload.map(x => ({ ...x, comments: [] }));
        case 'ADD_ADVENTURE':
            return [...state, action.payload];
        case 'FETCH_ADVENTURE_DETAILS':
        case 'EDIT_ADVENTURE':
            return state.map(x => x._id === action.adventureId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.adventureId ? { ...x, comments: [...x.comments, action.payload] } : x);
        case 'REMOVE_ADVENTURE':
            return state.filter(x => x._id !== action.adventureId);
        default:
            return state;
    }
};
export const AdventureProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [adventures, dispatch] = useReducer(adventureReducer, [])

    useEffect(() => {
        adventureService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_ADVENTURES',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectAdventure = (adventureId) => {
        return adventures.find(x => x._id === adventureId) || {};
    };

    const fetchAdventureDetails = (adventureId, adventureDetails) => {
        dispatch({
            type: 'FETCH_ADVENTURE_DETAILS',
            payload: adventureDetails,
            adventureId,
        })
    }

    const addComment = (adventureId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            adventureId
        });
    };

    const adventureAdd = (adventureData) => {
        dispatch({
            type: 'ADD_ADVENTURE',
            payload: adventureData,
        })

        navigate('/catalog');
    };

    const adventureEdit = (adventureId, adventureData) => {
        dispatch({
            type: 'EDIT_ADVENTURE',
            payload: adventureData,
            adventureId,
        });
    };

    const adventureRemove = (adventureId) => {
        dispatch({
            type: 'REMOVE_ADVENTURE',
            adventureId
        })
    }
    return (
        <AdventureContext.Provider value={{
            adventures,
            adventureRemove,
            adventureEdit,
            addComment,
            fetchAdventureDetails,
            selectAdventure,
            adventureAdd
        }}>
            {children}
        </AdventureContext.Provider>
    );
}
