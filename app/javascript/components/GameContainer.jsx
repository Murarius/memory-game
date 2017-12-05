import React from "react"
import PropTypes from "prop-types"
class GameContainer extends React.Component {
  render () {
    return (
      <div>
        Game container
        <GameControll />
        <Bricks />
      </div>
    )
  }
}

export default GameContainer
