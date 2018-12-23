import * as React from "react"
import { connect } from "react-redux"

import { addModerator, removeModerator } from "../redux/modules/config"

import { GameModName } from "./GameModName"

interface Props {
    modList: Array<string>,
    addMod: any,
    removeMod: any
}

class ConfigPanel extends React.Component<Props, {}> {
    addMod = () => {
        let newMod: string = prompt("Enter the name of the game moderator you would like to add:");
        if (newMod) {
            this.props.addMod(newMod);
        }
    }

    }

    render = () => {
        const modList = this.props.modList.map((mod: string) =>
            <GameModName name={mod} removeMod={this.props.removeMod}></GameModName>);
        return (
            <div>
                <span>Game mod(s)</span>
                {modList}
                <button onClick={this.addMod}>+</button>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        modList: state.config.mods
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        addMod: (mod: string) => {
            dispatch(addModerator(mod));
        },
        removeMod: (mod: string) => {
            dispatch(removeModerator(mod));
        }
    }
}

export const ConnectedConfigPanel = connect(mapStateToProps, mapDispatchToProps)(ConfigPanel);