import React from "react"
import PropTypes from "prop-types"
class GameControll extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      width: this.props.width,
      height: this.props.height,
      difficulty: this.props.difficulty,
      max_width: 16,
      max_height: 8,
      max_difficulty: 4
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
      <div className='game-controll'>
        <div className='input'>
          <label>Width: <span>{this.state.width}</span></label>
          <a href='#' name='width' onClick={this.changeUp}><i className="fa fa-caret-square-o-up"></i></a>
          <a href='#' name='width' onClick={this.changeDown}><i className="fa fa-caret-square-o-down"></i></a>
        </div>

        <div className='input'>
          <label>Height: <span>{this.state.height}</span></label>
            <a href='#' name='height' onClick={this.changeUp}><i className="fa fa-caret-square-o-up"></i></a>
            <a href='#' name='height' onClick={this.changeDown}><i className="fa fa-caret-square-o-down"></i></a>
        </div>

        <div className='input'>
          <label>Difficulty: <span>{this.state.difficulty}</span></label>
            <a href='#' name='difficulty' onClick={this.changeUp}><i className="fa fa-caret-square-o-up"></i></a>
            <a href='#' name='difficulty' onClick={this.changeDown}><i className="fa fa-caret-square-o-down"></i></a>
        </div>
      </div>
    )
  }
}

export default GameControll
