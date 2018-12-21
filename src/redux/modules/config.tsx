export const START_GAME = "fmu/config/START_GAME";
export const STOP_GAME = "fmu/config/STOP_GAME";

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

const initialGameState = {
    isActive: false
};

export function configReducer(state: any = initialGameState, action: any) {
    switch (action.type) {
        case START_GAME:
            return Object.assign({}, state, {
                ...state,
                isActive: true,
                currentDay: 1
            });

        case STOP_GAME:
            return Object.assign({}, state, {
                ...state,
                isActive: false
            });

        default:
            return state;

    }
}