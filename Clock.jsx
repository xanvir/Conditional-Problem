import React from "react";
import Button from "./assets/Button";
class Clock extends React.Component {

    state = { date: new Date(), locale: "bn-BD" };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        this.setState({
            date: new Date(),
        });
    }
    handleClick = () => {
        this.setState({
            locale: "en-US",
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ? (
                <Button change={this.handleClick}
                locale="en-US">
                    Click Here
                </Button>
                ) : (
                <Button change={this.handleClick}
                locale="bn-BD">
                    Click Here
                </Button>
                )}
            </div>
        );
    }
}

export default Clock;
// ReactDOM.render(<Clock locale='bn-BD' />, document.getElementById('root'));