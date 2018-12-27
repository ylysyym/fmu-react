import * as React from "react"
import { connect } from "react-redux"

import { getCurrentVoteTally, parsePageDataToVotes } from "../utils/tally"
import { TallyView } from "./TallyDisplay"

interface Props {
    pageData: any
}

class TallyPanel extends React.Component<Props, {}> {
    render = () => {
        return <div>
            <TallyView tallyData={getCurrentVoteTally(parsePageDataToVotes(this.props.pageData), 0, 1000)} />
        </div>
    }
}

function mapStateToProps(state: any) {
    return {
        pageData: state.data
    }
}

export const ConnectedTallyPanel = connect(mapStateToProps, null)(TallyPanel);