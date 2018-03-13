import React from "react"
import PropTypes from "prop-types"
import GameControll from './GameControll'
import GameStatus from './GameStatus'
import Bricks from './Bricks'

class GameContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      width: props.game_defaults.width,
      height: props.game_defaults.height,
      difficulty: props.game_defaults.difficulty,
      game_running: false,
      game_code: null
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
      this.handleGameStop()
    } else {
      this.handleGameStart()
    }
  }

  handleGameStart() {
    axios({
      method: 'post',
      url: '/games',
      data: {
        width: this.state.width,
        height: this.state.height,
        difficulty: this.state.difficulty
      }
    }).then(res => {
      this.setState({game_running: true})
      this.setState({game_code: res.data.code})
    })
  }

  handleGameStop() {
    axios({
      method: 'delete',
      url: '/games',
      data: {
        code: this.state.game_code,
      }
    }).then(res => {
      this.setState({game_running: false})
      this.setState({game_code: null})
    })
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
      component = <GameStatus game_code={this.state.game_code}/>
    } else {
      component = <GameControll
                    width={this.state.width}
                    height={this.state.height}
                    difficulty={this.state.difficulty}
                    max_params={this.props.max_params}
                    changeGameOptions={this.changeGameOptions}/>
    }

    return (
      <div className='content memory-game'>
        {component}
        {this.controllButton()}

        <Bricks game_running={this.state.game_running}
                width={this.state.width}
                height={this.state.height}
                difficulty={this.state.difficulty} />
      </div>
    )
  }
}

export default GameContainer
