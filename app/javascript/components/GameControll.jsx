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

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    var key = event.target.name
    var value = parseInt(event.target.value)
    value = this.valueValidation(key, value)

    this.setState({[key]: value})
    this.props.changeGameOptions(key, value)
  }

  valueValidation(key, value) {
    var max_value = this.state[`max_${key}`];

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
          <label>Width:</label>
          <input type='number' name='width' onChange={this.handleChange} value={this.state.width} />
        </div>

        <div className='input'>
          <label>Height:</label>
          <input type='number' name='height' onChange={this.handleChange} value={this.state.height} />
        </div>

        <div className='input'>
          <label>Difficulty:</label>
          <input type='number' name='difficulty' onChange={this.handleChange} value={this.state.difficulty} />
        </div>
      </div>
    )
  }
}

export default GameControll
