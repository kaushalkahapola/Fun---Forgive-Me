import React, { Component } from 'react';

class NoButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: [
        'NO !!! 😡',
        "Please don't say no...",
        "Give me a chance...",
        "I'm really sorry...",
        "I promise it won't happen again...",
        "Let's talk about it...",
        "Can we find a solution together?",
        "I value our relationship...",
        "I didn't mean to upset you...",
        "I'll make it up to you...",
        "Forgive me, please...",
        "I regret my actions...",
        "I understand if you're upset...",
        "I'll do better next time...",
        "Your forgiveness means a lot...",
        "I never intended to hurt you...",
        "I appreciate your patience...",
        "I'm willing to make amends...",
        "I care about our connection...",
        "Please reconsider...",
        "Let's move forward positively...",
      ],
      currentIndex: 0,
      buttonSize: 100, // Initial button size
    };
  }

  handleNoClick = () => {
    const newIndex = (this.state.currentIndex + 1) % this.state.texts.length;
    const newButtonSize = this.state.buttonSize + 10; // Increase button size
    this.setState({ currentIndex: newIndex, buttonSize: newButtonSize });
  };

  render() {
    return (
      <div>
        <button
          className='btn btn-danger mr-2'
          onClick={this.handleNoClick}
          style={{
            fontSize: `${this.state.buttonSize}%`,
            padding: '10px 20px',
            whiteSpace: 'normal',
          }} // Apply button size
        >
          {this.state.texts[this.state.currentIndex]}
        </button>
      </div>
    );
  }
}

export default NoButton;
