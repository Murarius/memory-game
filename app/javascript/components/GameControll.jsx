import React from "react"
import PropTypes from "prop-types"
class GameControll extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      width: this.props.width,
      height: this.props.height,
      difficulty: this.props.difficulty,
      max_width: this.props.max_params.width,
      max_height: this.props.max_params.height,
      max_difficulty: this.props.max_params.difficulty
    }

    this.changeUp = this.changeUp.bind(this)
    this.changeDown = this.changeDown.bind(this)
  }

  changeUp(event) {
    event.preventDefault()
    var key = event.currentTarget.name

    var value = this.state[key] + 1
    value = this.valueValidation(key, value)

    this.setState({[key]: value})
    this.props.changeGameOptions(key, value)
  }

  changeDown(event) {
    event.preventDefault();
    var key = event.currentTarget.name

    var value = this.state[`${key}`] - 1
    value = this.valueValidation(key, value)

    this.setState({[key]: value})
    this.props.changeGameOptions(key, value)
  }

  valueValidation(key, value) {
    var max_value = this.state[`max_${key}`]

    if (value < 2) {
      return 2
    }

    if (value > max_value) {
      return max_value
    }

    return value
  }

  render () {
    return (
      <div className='game-controlls'>
        <div className='controll'>
          <label>Width:</label>
          <div className='value'>{this.state.width}</div>
          <a href='#' name='width' className='caret' onClick={this.changeUp}><i className="fa fa-caret-up"></i></a>
          <a href='#' name='width' className='caret' onClick={this.changeDown}><i className="fa fa-caret-down"></i></a>
        </div>

        <div className='controll'>
          <label>Height:</label>
          <div className='value'>{this.state.height}</div>
          <a href='#' name='height' className='caret' onClick={this.changeUp}><i className="fa fa-caret-up"></i></a>
          <a href='#' name='height' className='caret' onClick={this.changeDown}><i className="fa fa-caret-down"></i></a>
        </div>

        <div className='controll'>
          <label>Difficulty:</label>
          <div className='value'>{this.state.difficulty}</div>
          <a href='#' name='difficulty' className='caret' onClick={this.changeUp}><i className="fa fa-caret-up"></i></a>
          <a href='#' name='difficulty' className='caret' onClick={this.changeDown}><i className="fa fa-caret-down"></i></a>
        </div>

        <a href='#' className='btn start red'>Start Game</a>
      </div>
    )
  }
}

export default GameControll
