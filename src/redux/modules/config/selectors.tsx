export function getModList(state: any): string[] {
    return state.config.mods;
}

export function getPlayerList(state: any) {
    return state.config.players;
}

export function isGameActive(state: any): boolean {
    return state.config.isActive;
}