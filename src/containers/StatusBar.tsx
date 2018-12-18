import * as React from "react";
import { connect } from "react-redux"
import { startGame, stopGame, sendPageData } from "../redux/modules/config"

interface Props {
    isGameActive: boolean,
    startGame: any,
    stopGame: any,
    sendPageData: any
}

class StatusBar extends React.Component<Props, {}> {
    handleClick = () => {
        if (this.props.isGameActive === true) {
            this.props.stopGame();
        } else {
            this.props.startGame();
            this.props.sendPageData();
        }
    }

    render = () => {
        return <div>
            <div>Forum Mafia Utilities</div>
            <button
                onClick={this.handleClick}
                className={this.props.isGameActive == true ? "active" : "inactive"}>
                {this.props.isGameActive == true ? "ON" : "OFF"}
            </button>
        </div>;
    }
}

function mapStateToProps(state: any) {
    return {
        isGameActive: state.config.isActive
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        startGame: () => {
            dispatch(startGame());
        },
        stopGame: () => {
            dispatch(stopGame());
        },
        sendPageData: () => {
            dispatch(sendPageData());
        }
    };
}

export const ConnectedStatusBar = connect(mapStateToProps, mapDispatchToProps)(StatusBar);