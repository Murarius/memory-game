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
        {row.map(item => <Brick key={`${item.x}-${item.y}`}/>)}
      </div>
    )
  }

  render () {
    var rows = this.initRows()

    return (
      <div className='bricks'>
        {rows.map((row) => this.renderRow(row))}
      </div>
    )
  }
}

export default Bricks
