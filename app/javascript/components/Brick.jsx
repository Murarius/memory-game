import React from "react"
import PropTypes from "prop-types"
class Brick extends React.Component {

  constructor (props) {
    super(props);

    this.state = { open: false }
    this.flip = this.flip.bind(this)
  }

  flip () {
    if (this.props.open_block == true) return
    open = this.state.open

    if (open == true) {
      this.close()
    } else {
      this.open()
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.game_running == false &&
        this.state.open == true) this.close()

    if (this.props.open_block == true &&
        nextProps.open_block == false &&
        this.state.open == true) this.close()
  }

  open () {
    this.setState({open: true})
    this.props.handle_open()
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
