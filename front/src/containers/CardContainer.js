import React, { Component } from "react";
import Card from "../components/Card";

class CardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      likes: props.likes
    };
  }

  toggleLike = () => {
    if (!this.state.liked) {
      this.setState({ liked: true });
      this.setState({ likes: this.state.likes + 1 });
    } else {
      this.setState({ liked: false });
      this.setState({ likes: this.state.likes - 1 });
    }
  };

  render() {
    return (
      <div>
        <Card
          key={this.props.id}
          onToggleLike={this.toggleLike}
          {...this.props}
          liked={this.state.liked}
          likes={this.state.likes}
        />
      </div>
    );
  }
}

export default CardContainer;
