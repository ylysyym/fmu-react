import * as React from "react"
import { connect } from "react-redux"

import { getTally } from "~/redux/modules/data"
import { TallyView } from "./TallyView"

interface Props {
    tally: any
}

class TallyPanel extends React.Component<Props, {}> {
    render = () => {
        return <div>
            <TallyView tallyData={this.props.tally} />
        </div>
    }
}

function mapStateToProps(state: any) {
    return {
        tally: getTally(state)
    }
}

export const ConnectedTallyPanel = connect(mapStateToProps, null)(TallyPanel);