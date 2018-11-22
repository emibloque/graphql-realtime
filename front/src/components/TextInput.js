import React from "react";
import "./TextInput.scss";

class TextInput extends React.Component {
  onKeyPress = e => {
    if (e.key === "Enter") {
      this.props.onSubmit(this.input.value);
      this.input.value = "";
    }
  };

  render() {
    return (
      <div className="text-input">
        <input
          type="text"
          placeholder="Say something..."
          onKeyPress={this.onKeyPress}
          ref={input => {
            this.input = input;
          }}
        />
      </div>
    );
  }
}

export default TextInput;
