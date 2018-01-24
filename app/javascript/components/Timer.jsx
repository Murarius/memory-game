import React from "react"
import PropTypes from "prop-types"

class Timer extends React.Component {

  constructor (props) {
    super(props);

    this.state = { elapsed: 0 }
  }

  componentDidMount () {
      this.timer = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  tick () {
    this.setState({elapsed: new Date() - this.props.start});
  }

  render () {
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed / 10).toFixed(1);

    return <b>{seconds}</b>;
  }
}

export default Timer
