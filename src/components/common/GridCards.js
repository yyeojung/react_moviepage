import React from 'react'
import {Link} from "react-router-dom"
import {Col} from 'antd';

function GridCards(props) {
  return (
    <Col lg={6} md={8} sm ={12} xs={24}>
        <div className="grid_card">
          <Link to ={`/movie/${props.movieId}`}>
            <img src={props.image} alt={props.movieName} />
          </Link>
        </div>
    </Col>
  )
}

export default GridCards