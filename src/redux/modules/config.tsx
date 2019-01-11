export const START_GAME = "fmu/config/START_GAME";
export const STOP_GAME = "fmu/config/STOP_GAME";
export const ADD_MODERATOR = "fmu/config/ADD_MODERATOR"
export const REMOVE_MODERATOR = "fmu/config/REMOVE_MODERATOR"
export const ADD_PLAYER = "fmu/config/ADD_PLAYER";
export const REMOVE_PLAYER = "fmu/config/REMOVE_PLAYER";

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

export function addPlayer(player: string) {
    return {
        type: ADD_PLAYER,
        name: player
    }
}

export function removePlayer(player: string) {
    return {
        type: REMOVE_PLAYER,
        name: player
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

export function getModList(state: any): string[] {
    return state.config.mods;
}

export function getPlayerList(state: any) {
    return state.config.players;
}

export function isGameActive(state: any): boolean {
    return state.config.isActive;
}