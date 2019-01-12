import {
    START_GAME,
    STOP_GAME,
    ADD_MODERATOR,
    REMOVE_MODERATOR,
    ADD_PLAYER,
    REMOVE_PLAYER
} from "./types"

const initialGameState = {
    isActive: false
};

export default function configReducer(state: any = initialGameState, action: any) {
    switch (action.type) {
        case START_GAME:
            return Object.assign({}, state, {
                ...state,
                isActive: true,
                currentDay: 1,
                mods: [],
                players: []
            });

        case STOP_GAME:
            return Object.assign({}, state, {
                ...state,
                isActive: false
            });

        case ADD_MODERATOR:
            return Object.assign({}, state, {
                ...state,
                mods: [...state.mods, action.name]
            });

        case REMOVE_MODERATOR:

            return Object.assign({}, state, {
                ...state,
                mods: state.mods.filter((mod: any) => mod !== action.name)
            });

        case ADD_PLAYER:
            return Object.assign({}, state, {
                ...state,
                players: [...state.players, action.name]
            });

        case REMOVE_PLAYER:
            return Object.assign({}, state, {
                ...state,
                players: state.players.filter((player: any) => player !== action.name)
            });

        default:
            return state;

    }
}