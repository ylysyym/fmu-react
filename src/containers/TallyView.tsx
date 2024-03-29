import * as React from "react"

interface Props {
    tallyData: any
}

export class TallyView extends React.Component<Props, {}> {
    render = () => {
        const tally = this.props.tallyData.map((voteItem: any) => {
            const voterList = voteItem.voters.map((voter: any) => {
                const timeList = voter.times.map((range: any) => {
                    let result;
                    if ("end" in range) {
                        //result = "#" + range.start + "-" + range.end;
                        result = <div className="vote-range">
                            <a href="#">#{range.start}</a>
                            -
                            <a href="#">#{range.end}</a>
                        </div>
                    } else {
                        result = <div className="vote-range">
                            <a href="#">#{range.start}</a>
                        </div>
                    }
                    return <span>{result}</span>;
                });
                return (
                    <div className="voter">
                        <div className="player-name">{voter.user}</div>
                        <div className="post-number">({timeList})</div>
                    </div>
                );
            });
            return (
                <div>
                    <div className="vote-target">{voteItem.target}</div>
                    <div className="vote-count">({voteItem.voteCount})</div>
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