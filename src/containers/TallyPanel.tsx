import * as React from "react"
import { connect } from "react-redux"

import { getTally } from "../utils/tally"
import { TallyView } from "./TallyView"

interface Props {
    pageData: any
}

class TallyPanel extends React.Component<Props, {}> {
    render = () => {
        return <div>
            <TallyView tallyData={getTally(this.props.pageData)} />
        </div>
    }
}

function mapStateToProps(state: any) {
    return {
        pageData: state.data
    }
}

export const ConnectedTallyPanel = connect(mapStateToProps, null)(TallyPanel);