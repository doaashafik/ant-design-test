import React from "react";
export class LayoutState extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return this.props.children({
      toggle: this.toggle,
      collapsed: this.state.collapsed,
    });
  }
}
