import React from "react"
import PropTypes from "prop-types"
import GameControll from './GameControll'
import Bricks from './Bricks'

class GameContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      width: 6,
      height: 3,
      difficulty: 2
    }

    this.changeGameOptions = this.changeGameOptions.bind(this)
  }

  changeGameOptions(type, value) {
    this.setState({[type]: value})
  }

  render () {
    return (
      <div className='content memory-game'>
        <GameControll width={this.state.width}
                      height={this.state.height}
                      difficulty={this.state.difficulty}
                      changeGameOptions={this.changeGameOptions}/>
        <Bricks width={this.state.width}
                height={this.state.height} />
      </div>
    )
  }
}

export default GameContainer