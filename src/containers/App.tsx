import * as React from "react";
import { connect } from "react-redux"

import { ConnectedStatusBar } from "./StatusBar";
import { ConnectedTabBar } from "./TabBar"

import { ConnectedTallyPanel } from "./TallyPanel"
import { ConnectedConfigPanel } from "./ConfigPanel"
import { SettingsPanel } from "./SettingsPanel"

import { isGameActive } from "~/redux/modules/config"
import { getActiveTab } from "~/redux/modules/ui"

interface Props {
    isActive: boolean;
    activeTab: number;
}

class App extends React.Component<Props, {}> {
    getDisplay(tab: number): JSX.Element {
        switch (tab) {
            case 1:
                return <ConnectedTallyPanel />

            case 2:
                return <ConnectedConfigPanel />

            case 3:
                return <SettingsPanel />

            default:
                return null;
        }
    }

    render = () => {
        return (
            <div>
                <ConnectedStatusBar />
                {this.props.isActive && (
                    <div>
                        <ConnectedTabBar />
                        {this.getDisplay(this.props.activeTab)}
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        isActive: isGameActive(state),
        activeTab: getActiveTab(state)
    };
}

export const ConnectedApp = connect(mapStateToProps)(App)