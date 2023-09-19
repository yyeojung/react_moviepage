import React from 'react'
import { useState } from "react"
import styled from 'styled-components';

import icon1 from '../../image/icon/icon_heart_1.png'
import icon2 from '../../image/icon/icon_heart_2.png'

function Addwish() {
    const [Wish, setWish] = useState(true); 
    const wishClick = () => {
        setWish(!Wish);
    }
  return (
    <WishIcon onClick={wishClick} isWish={Wish}/>
  )
}

export default Addwish

const WishIcon = styled.button`
    width: 3rem;
    height: 3rem;
    border:none;
    background-image: url(${props => props.isWish ? icon1 : icon2});
    background-size:100%;
    position:absolute;
    top:1rem;
    right:1rem;
`