import * as React from "react"

interface Props {
    name: string,
    removeMod: any
}

export class GameModName extends React.Component<Props, {}> {
    handleClick = () => {
        this.props.removeMod(this.props.name);
    }

    render() {
        return (
            <button
                onClick={this.handleClick}>
                {this.props.name}
            </button>
        );
    }
}