import React from "react"
import PropTypes from "prop-types"
import GameControll from './GameControll'
import GameStatus from './GameStatus'
import Bricks from './Bricks'

class GameContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      width: props.game_defaults.width,
      height: props.game_defaults.height,
      difficulty: props.game_defaults.difficulty,
      game_running: false
    }

    this.changeGameOptions = this.changeGameOptions.bind(this)
    this.toggleGameState = this.toggleGameState.bind(this)
    this.controllButton = this.controllButton.bind(this)
  }

  changeGameOptions(type, value) {
    this.setState({[type]: value})
  }

  toggleGameState(e) {
    if (this.state.game_running == true) {
      this.setState({game_running: false})
    } else {
      this.setState({game_running: true})
    }
  }

  controllButton() {
    let runing = this.state.game_running
    let button_text = runing ? 'Start' : 'Stop'
    let button_class = runing ? 'red' : 'green'

    return(
      <a className={'btn start-btn ' + button_class}  onClick={this.toggleGameState}>
        {button_text}
      </a>
    )
  }

  render () {
    let component = null;
    if (this.state.game_running) {
      component = <GameStatus/>
    } else {
      component = <GameControll width={this.state.width}
                    height={this.state.height}
                    difficulty={this.state.difficulty}
                    max_params={this.props.max_params}
                    changeGameOptions={this.changeGameOptions}/>
    }

    return (
      <div className='content memory-game'>
        {component}
        {this.controllButton()}

        <Bricks width={this.state.width}
                height={this.state.height} />
      </div>
    )
  }
}

export default GameContainer
