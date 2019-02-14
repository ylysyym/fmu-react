import * as React from "react"
import { connect } from "react-redux"

import { addModerator, removeModerator, addPlayer, removePlayer } from "~/redux/modules/config"

import { GameModName } from "./GameModName"
import { PlayerName } from "./PlayerName"

interface Props {
    modList: Array<string>,
    playerList: Array<string>
    addMod: (mod: string) => void,
    removeMod: (mod: string) => void,
    addPlayer: (player: string) => void,
    removePlayer: (player: string) => void;
}

interface State {
    isTextboxOpen: boolean;
}

class ConfigPanel extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isTextboxOpen: false
        };
    }

    addMod = () => {
        let newMod: string = prompt("Enter the name of the game moderator you would like to add:");
        if (newMod) {
            this.props.addMod(newMod);
        }
    }

    addPlayer = () => {
        let newPlayer: string = prompt("Enter the name of the player you would like to add:");
        if (newPlayer) {
            this.props.addPlayer(newPlayer);
        }
    }

    togglePlayerListPasteArea = () => {
        this.setState((state: any) => ({
            isTextboxOpen: !state.isTextboxOpen
        }));
    }

    render = () => {
        const modList = this.props.modList.map((mod: string) =>
            <GameModName name={mod} removeMod={this.props.removeMod}></GameModName>);
        const playerList = this.props.playerList.map((player: string) =>
            <PlayerName name={player} removePlayer={this.props.removePlayer}></PlayerName>);
        return (
            <div>
                <div id="mods-panel">
                    <span>Game mod(s)</span>
                    {modList}
                    <button onClick={this.addMod}>+</button>
                </div>
                <div id="players-panel">
                    <span>Players</span>
                    <ol>
                        {playerList}
                    </ol>
                    <button onClick={this.addPlayer}>+</button>
                    <button onClick={this.togglePlayerListPasteArea}>Import from list</button>
                    {this.state.isTextboxOpen ? <div>
                        <textarea></textarea>
                        <button>Add</button>
                    </div> : null}
                </div>
                <div id="days-panel">
                    <span>Days</span>
                    <button>Add day</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        modList: state.config.mods,
        playerList: state.config.players
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        addMod: (mod: string) => {
            dispatch(addModerator(mod));
        },
        removeMod: (mod: string) => {
            dispatch(removeModerator(mod));
        },
        addPlayer: (player: string) => {
            dispatch(addPlayer(player));
        },
        removePlayer: (player: string) => {
            dispatch(removePlayer(player));
        }
    }
}

export const ConnectedConfigPanel = connect(mapStateToProps, mapDispatchToProps)(ConfigPanel);