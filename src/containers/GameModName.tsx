import * as React from "react"

interface Props {
    name: string,
    removeMod: (mod: string) => void
}

export class GameModName extends React.Component<Props, {}> {
    handleClick = () => {
        this.props.removeMod(this.props.name);
    }

    render = () => {
        return (
            <button
                onClick={this.handleClick}>
                {this.props.name}
            </button>
        );
    }
}