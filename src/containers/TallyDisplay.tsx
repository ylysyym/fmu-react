import * as React from "react"

interface Props {
    tallyData: any
}

export class TallyView extends React.Component<Props, {}> {
    render = () => {
        const tally = this.props.tallyData.map((voteItem: any) => {
            const voterList = voteItem.voters.map((voter: any) =>
            <div className="voter">
                <div className="player-name">{voter.user}</div>
                <div className="post-number">{voter.post}</div>
            </div>
            );
            return (
                <div>
                    <div className="vote-target">{voteItem.target}</div>
                    <div className="vote-count">({voteItem.voters.length})</div>
                    <span>{voterList}</span>
                </div>
            );
        });
        return (
            <div>
                {tally}
            </div>
        );
    }
}