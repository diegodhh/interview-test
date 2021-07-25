import React from "react";
import ReactDOM from "react-dom";

class Tooltip extends React.Component {
  render() {
    // Write your code here
    return <div style={{ position: "absolute" }}>{this.props.text}</div>;
  }
}

class MyPortal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidUpdate(prev) {
    document.getElementById(this.props.id)?.appendChild(this.el);
  }
  componentDidMount() {}

  componentWillUnmount() {
    document.getElementById(this.props.id)?.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class App extends React.Component {
  state = {
    text: "",
    id: "",
  };

  onDocumentClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      this.setState({
        text: event.target.firstChild.textContent,
        id: event.target.id,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.onDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.onDocumentClick);
  }
  render() {
    console.log(this.state);
    return (
      <div>
        {this.props.children}
        <MyPortal id={this.state.id}>
          <Tooltip text={this.state.text} />
        </MyPortal>
        ;
      </div>
    );
  }
}
export default () => (
  <App>
    <button id="button1">First button</button>
    <button id="button2">Second button</button>
  </App>
);
