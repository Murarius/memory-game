import React from "react"
import PropTypes from "prop-types"
class Brick extends React.Component {

  constructor (props) {
    super(props);

    this.state = { open: false }
    this.flip = this.flip.bind(this)
  }

  flip () {
    open = this.state.open
    if (open == true) return
    this.setState({open: !open})
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.game_running == false) this.close()
  }

  close () {
    this.setState({open: false})
  }

  render () {
    var brick_class = this.state.open ? 'open' : 'close'

    return (
      <div className={`brick ${brick_class}`} onClick={this.flip}>
      </div>
    )
  }
}

export default Brick
