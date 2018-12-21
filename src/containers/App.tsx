import * as React from "react";
import { connect } from "react-redux"

import { ConnectedStatusBar } from "./StatusBar";
import { ConnectedTabBar } from "./TabBar"

import { ConfigPanel } from "./ConfigPanel"



function mapStateToProps(state: any) {
    return {
        isActive: state.config.isActive,
        activeTab: state.ui.tab
    };
}

interface Props {
    isActive: boolean;
    activeTab: number;
}

class App extends React.Component<Props, {}> {
    getDisplay(tab: number): JSX.Element {
        switch (tab) {
            case 1:
                return <a>Hi</a>
            case 2:
                return <ConfigPanel />
            case 3:
                return <div>3</div>
            default:
                return null;
        }
    }

    render = () => {
        return <div>
            <ConnectedStatusBar />
            {this.props.isActive && (
                <div>
                    <ConnectedTabBar />
                    {this.getDisplay(this.props.activeTab)}
                </div>
            )}
        </div>;
    }
}

export const ConnectedApp = connect(mapStateToProps)(App)