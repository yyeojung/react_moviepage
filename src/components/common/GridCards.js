import React from 'react'
import {Link} from "react-router-dom"
import {Col} from 'antd';

import Addwish from './Addwish';

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={12}>
        <div className="grid_card">
          <Addwish/>
          <Link to ={`/movie/${props.movieId}`}>
            <img src={props.image} alt={props.movieName} />
          </Link>
        </div>
    </Col>
  )
}

export default GridCards