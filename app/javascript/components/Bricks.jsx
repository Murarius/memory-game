import React from "react"
import PropTypes from "prop-types"
import Brick from './Brick';

class Bricks extends React.Component {

  constructor (props) {
    super(props)

    var flip_timeout = null

    this.state = { opened: 0, bricks: [] }

    this.renderRow = this.renderRow.bind(this)
    this.initRows = this.initRows.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  initRows() {
    var rs = []

    for (var i = 0; i < this.props.height; i++) {
      var r = []

      for (var j = 0; j < this.props.width; j++) {
        r.push(<Brick key={`${j}-${i}`}
                      game_running={this.props.game_running}
                      open_block={this.openBlock()}
                      handle_open={this.handleOpen}
                      handle_close={this.handleClose}
                 />)
      }
      rs.push(r)
    }

    this.state.bricks = [].concat(...rs)
    return(rs)
  }

  handleOpen () {
    this.setState({ opened: this.state.opened + 1})
  }

  handleClose () {
    this.setState(function(previousState, currentProps) {
      return {opened: previousState.opened - 1};
    });
  }

  openBlock () {
    return this.state.opened >= this.props.difficulty
  }

  renderRow(row) {
    return (
      <div className='bricks-row' key={row[0].key.split('-')[1]}>
        {row}
      </div>
    )
  }

  render () {
    var rows = this.initRows()
    var bricks_class = this.props.game_running ? 'running' : 'stopped'

    return (
      <div className={`bricks ${bricks_class}`}>
        {rows.map((row) => this.renderRow(row))}
      </div>
    )
  }
}

export default Bricks
