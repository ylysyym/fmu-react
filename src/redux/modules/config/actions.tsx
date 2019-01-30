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

export function addDay() {
    return {
        type: ADD_DAY
    }
}

export function removeDay(day: number) {
    return {
        type: REMOVE_DAY,
        day: day
    }
}

export function changeDayStart(day: number, start: DayBoundary) {
    return {
        type: CHANGE_DAY_START,
        day: day,
        start: start
    }
}

export function changeDayEnd(day: number, start: DayBoundary) {
    return {
        type: CHANGE_DAY_END,
        day: day,
        start: start
    }
}

interface DayBoundary {
    isInRange(range: any): boolean;
}

class PostBoundary implements DayBoundary {
    bound: number;

    isInRange(range: any) {
        return false;
    }
}

class TimeBoundary implements DayBoundary {
    bound: string;

    isInRange(range: any) {
        return false;
    }
}