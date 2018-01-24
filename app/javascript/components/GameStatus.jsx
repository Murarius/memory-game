import React from "react"
import PropTypes from "prop-types"
import Timer from './Timer'

class GameStatus extends React.Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   width: this.props.width,
    //   height: this.props.height,
    //   difficulty: this.props.difficulty,
    // }
  }

  render () {
    return (
      <div className='game-status'>
        <div className='code'><label>Game Code:</label><span>{this.props.game_code}</span></div>
        <div className='time'><label>Time:</label><span><Timer start={Date.now()} /></span></div>
        <div className='score'><label>Score:</label><span>0</span></div>
      </div>
    )
  }
}

export default GameStatus
