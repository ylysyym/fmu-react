import * as React from "react"

interface Props {
    name: string,
    removePlayer: (player: string) => void
}

export class PlayerName extends React.Component<Props, {}> {
    handleClick = () => {
        this.props.removePlayer(this.props.name);
    }

    render = () => {
        return (
            <li
                onClick={this.handleClick}>
                {this.props.name}
            </li>
        );
    }
}