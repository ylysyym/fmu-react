import {
    START_GAME,
    STOP_GAME,
    ADD_MODERATOR,
    REMOVE_MODERATOR,
    ADD_PLAYER,
    REMOVE_PLAYER
} from "./types"

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