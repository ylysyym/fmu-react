import {
    START_GAME,
    STOP_GAME,
    ADD_MODERATOR,
    REMOVE_MODERATOR,
    ADD_PLAYER,
    REMOVE_PLAYER,
    ADD_DAY,
    REMOVE_DAY,
    CHANGE_DAY_START,
    CHANGE_DAY_END
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

        case ADD_DAY:
            return Object.assign({}, state, {
                ...state,
                days: [...state.days, action.day]
            });

        case REMOVE_DAY:
            return Object.assign({}, state, {
                ...state,
                days: [...state.days, action.day]
            });

        default:
            return state;
    }
}