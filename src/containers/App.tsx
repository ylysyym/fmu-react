import * as React from "react";
import { connect } from "react-redux"

import { TabBar } from "./TabBar"
import { ConnectedStatusBar } from "./StatusBar";

function mapStateToProps(state: any) {
    return {
        isActive: state.config.isActive
    };
}

interface Props {
    isActive: boolean;
}

class App extends React.Component<Props, {}> {
    render = () => {
        return <div>
            <ConnectedStatusBar />
            {this.props.isActive && <TabBar />}
        </div>;
    }
}

export const ConnectedApp = connect(mapStateToProps)(App)