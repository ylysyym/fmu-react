import * as React from "react"
import { connect } from "react-redux"

import { switchTallyTab, switchConfigTab, switchSettingsTab } from "../redux/modules/tabs"

interface Props {
    activeTab: number,
    switchTallyTab: any,
    switchConfigTab: any,
    switchSettingsTab: any
}

function mapStateToProps(state: any) {
    return {
        activeTab: state.ui.tab
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        switchTallyTab: () => {
            dispatch(switchTallyTab())
        },
        switchConfigTab: () => {
            dispatch(switchConfigTab())
        },
        switchSettingsTab: () => {
            dispatch(switchSettingsTab())
        }
    }
}

class TabBar extends React.Component<Props, {}> {
    /*switchTallyTab = () => {
        this.props.switchTallyTab();
    };

    switchConfigTab = () => {
        this.props.switchConfigTab();
    };

    switchSettingsTab = () => {
        this.props.switchSettingsTab();
    };*/

    render = () => {
        return <div id="fmu-tab-bar">
            <button
                className={this.props.activeTab == 1 && "selected"}
                onClick={this.props.switchTallyTab}>Tally</button>
            <button
                className={this.props.activeTab == 2 && "selected"}
                onClick={this.props.switchConfigTab}>Configure</button>
            <button
                className={this.props.activeTab == 3 && "selected"}
                onClick={this.props.switchSettingsTab}>Settings</button>
        </div>;
    }
}

export const ConnectedTabBar = connect(mapStateToProps, mapDispatchToProps)(TabBar);