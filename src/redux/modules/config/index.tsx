import configReducer from "./reducers"
import {
    START_GAME,
    STOP_GAME,
    ADD_MODERATOR,
    REMOVE_MODERATOR,
    ADD_PLAYER,
    REMOVE_PLAYER
} from "./types"
import {
    startGame,
    stopGame,
    addModerator,
    removeModerator,
    addPlayer,
    removePlayer
} from "./actions"
import { isGameActive, getModList, getPlayerList } from "./selectors"

export default configReducer;

export {
    START_GAME,
    STOP_GAME,
    ADD_MODERATOR,
    REMOVE_MODERATOR,
    ADD_PLAYER,
    REMOVE_PLAYER,
    startGame,
    stopGame,
    addModerator,
    removeModerator,
    addPlayer,
    removePlayer,
    isGameActive,
    getModList,
    getPlayerList
}