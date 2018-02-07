import React from "react"
import PropTypes from "prop-types"
class Brick extends React.Component {

  constructor (props) {
    super(props);

    this.state = { open: false }
    this.open = this.open.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.game_running == false &&
        this.state.open == true) this.close()

    if (this.props.open_block == true &&
        nextProps.open_block == false &&
        this.state.open == true) this.close()
  }

  open () {
    if (this.props.game_running == false) return

    // if (this.props.open_block == true) return

    if (this.state.open == true && this.props.open_block == false) return

    this.setState({open: true})
    this.props.handle_open()
  }

  close () {
    this.setState({open: false})
  }

  render () {
    var brick_class = this.state.open ? 'open' : 'close'

    return (
      <div className={`brick ${brick_class}`} onClick={this.open}>
      </div>
    )
  }
}

export default Brick
