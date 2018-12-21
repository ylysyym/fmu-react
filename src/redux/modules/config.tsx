export const START_GAME = "fmu/config/START_GAME";
export const STOP_GAME = "fmu/config/STOP_GAME";
export const ADD_MODERATOR = "fmu/config/ADD_MODERATOR"
export const REMOVE_MODERATOR = "fmu/config/REMOVE_MODERATOR"

export function startGame() {
    return {
        type: START_GAME
    }
}

export function stopGame() {
    return {
        type: STOP_GAME
    }
}

export function addModerator(moderator: string) {
    return {
        type: ADD_MODERATOR,
        name: moderator
    }
}

export function removeModerator(moderator: string) {
    return {
        type: REMOVE_MODERATOR,
        name: moderator
    }
}

const initialGameState = {
    isActive: false
};

export function configReducer(state: any = initialGameState, action: any) {
    switch (action.type) {
        case START_GAME:
            return Object.assign({}, state, {
                ...state,
                isActive: true,
                currentDay: 1,
                mods: []
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

        default:
            return state;

    }
}