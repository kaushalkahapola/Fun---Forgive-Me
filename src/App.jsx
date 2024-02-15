import React, { Component } from 'react';
import NoButton from './components/nobutton.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isYes: false
    };
    this.yesImage = new Image();
    this.noImage = new Image();
  }

  componentDidMount() {
    this.yesImage.src = "https://c.tenor.com/bPcWmTGt0x0AAAAC/tenor.gif";
    this.noImage.src = "https://media.tenor.com/TYSqB4d-uvoAAAAi/cute-crying.gif";
  }

  render() {
    return (
      <div className="App container mt-5">
        {this.state.isYes ? (
          <>
          <img className="responsive-gif" src={this.yesImage.src} alt="" />
          <h1 className="yes display-4">Thank you for forgiving me!</h1>
          <h1>😊😊😊</h1>
          </>
        ) : (
          <>
          <img className="responsive-gif" src='https://media.tenor.com/TYSqB4d-uvoAAAAi/cute-crying.gif' alt="" />
          <div className='mb-4'>
            <h1 className="display-4">Will You Forgive Me?</h1>
            <h1 className='display-4'>🥺😢😭</h1>
            </div>
            <button
              className="btn btn-success mr-2"
              onClick={() => this.setState({ isYes: true })}
            >
              Yes, Sure ! 😊
            </button>
            <NoButton />
          </>
        )}
      </div>
    );
  }
}

export default App;
