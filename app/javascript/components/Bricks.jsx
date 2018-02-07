import React from "react"
import PropTypes from "prop-types"
import Brick from './Brick';

class Bricks extends React.Component {

  constructor (props) {
    super(props);

    var flip_timeout = null

    this.state = { opened: 0, open_block: false }

    this.renderRow = this.renderRow.bind(this)
    this.initRows = this.initRows.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.resetSelection = this.resetSelection.bind(this)
  }

  initRows() {
    var rs = []

    for (var i = 0; i < this.props.height; i++) {
      var r = []

      for (var j = 0; j < this.props.width; j++) {
        r.push(<Brick key={`${j}-${i}`}
                        game_running={this.props.game_running}
                        open_block={this.state.open_block}
                        handle_open={this.handleOpen}
                 />)
      }
      rs.push(r)
    }

    return(rs)
  }

  handleOpen () {
    var open_block = false

    if (this.state.opened == this.props.difficulty && this.state.open_block == true) {
      this.resetSelection()
      return
    } else if (this.state.opened + 1 == this.props.difficulty) {
      open_block = true
    }

    this.setState({ opened: this.state.opened + 1,
                    open_block: open_block })
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.open_block == false) return
    this.flip_timeout = setTimeout(this.resetSelection, 3000);
  }

  resetSelection (initial = 0) {
    clearTimeout(this.flip_timeout)


    this.setState({ opened: initial,
                    open_block: false })
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
