import React from "react"
import PropTypes from "prop-types"
class Brick extends React.Component {

  constructor (props) {
    super(props);

    this.state = { open: false }
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.game_running == false) this.close()

    if (this.props.open_block == true &&
        nextProps.open_block == false) this.close()
  }

  open () {
    if (this.props.game_running == false) return
    if (this.props.open_block) return
    if (this.state.open) return

    this.setState({open: true})
    this.props.handle_open()
  }

  close () {
    clearTimeout(this.flip_timeout)

    if (this.state.open == false) return
    this.setState({open: false})

    this.props.handle_close()
  }

  render () {
    var brick_class = this.state.open ? 'open' : 'close'

    if (this.props.open_block == true) {
      this.flip_timeout = setTimeout(this.close, 3000)
    }

    return (
      <div className={`brick ${brick_class}`} onClick={this.open}>
      </div>
    )
  }
}

export default Brick
