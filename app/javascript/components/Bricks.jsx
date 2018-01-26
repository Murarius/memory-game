import React from "react"
import PropTypes from "prop-types"
import Brick from './Brick';

class Bricks extends React.Component {

  constructor (props) {
    super(props);

    this.renderRow = this.renderRow.bind(this)
    this.initRows = this.initRows.bind(this)
  }

  initRows() {
    var rows = []

    for (var i = 0; i < this.props.height; i++) {
      var row = []

      for (var j = 0; j < this.props.width; j++) {
        row.push({x: j, y: i})
      }
      rows.push(row)
    }

    return(rows)
  }

  renderRow(row) {
    return (
      <div className='bricks-row' key={row[0].y}>
        {row.map(item => <Brick key={`${item.x}-${item.y}`} game_running={this.props.game_running}/>)}
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
