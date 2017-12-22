import React from "react"
import PropTypes from "prop-types"
class GameStatus extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      width: this.props.width,
      height: this.props.height,
      difficulty: this.props.difficulty,
    }
  }

  render () {
    return (
      <div className='game-status'>
        <div className='score'><label>score:</label><span>0</span></div>
      </div>
    )
  }
}

export default GameStatus
