import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const IconsPannel = ({ rate }) => {

  const tooltipArray = [
    {
      message: 'Login to create and edit custom lists',
      classes: 'fas fa-list-ul fa-1x',
      id: 1
    },
    {
      message: 'Login to add this movie to your favorite list',
      classes: 'fas fa-heart fa-1x',
      id: 2
    },
    {
      message: 'Login to add this movie to your watchlist',
      classes: 'fas fa-bookmark fa-1x',
      id: 3
    },
    {
      message: 'Login to rate this movie',
      classes: 'fas fa-star fa-1x',
      id: 4
    }
  ]

  return (
    <div className="icon-panel">

      <span className="rate-outer">
        <span className="rate-inner">
          <span className="rate-vote">
            {rate}
          </span>
        </span>
      </span>

      <p className="rate-text">average <br /> vote</p>
      {tooltipArray.map(element => (
          <OverlayTrigger               
            placement="top"
            key={element.id}
            overlay={
              <Tooltip id={`tooltip-top-${element.id}`}>
                {element.message}
              </Tooltip>
            }
          >
            <span className="icon-panel-item"><i className={element.classes} /></span>
          </OverlayTrigger>
      ))}
    </div>
  )
}

export default IconsPannel