import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

import { API_IMG } from '../../API'
import empryIcon from '../../image/icon/empty.png'

function SlideCrew(props) {
    const { CrewData } = props;

    const settings = {
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        responsive: [ // 반응형 웹 구현 옵션
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                }
            },
        ]
      };
    
      return (
        <div>
            <Slider {...settings}>
                {CrewData.slice(0, 9).map((item, index) => (
                    <SlideElement className="slide_img" key={index}>
                        {item.profile_path ? (
                            <img src={`${API_IMG}/w300/${item.profile_path}`} alt={item.name} />
                        ) : (
                            <EmptyImg>
                                <img src={empryIcon} alt="empty" className='empty_img' />
                            </EmptyImg>
                        )}
                        <p className='fw_bold'>{item.character}</p>
                        <p>{item.name}</p>
                    </SlideElement>
                ))}
            </Slider>
        </div>
      );
}

export default SlideCrew

const SlideElement = styled.div`
  padding: 0 2rem;
`;

const EmptyImg = styled.div`
    border:.1rem solid rgba(255,255,255,0.4);
    width: 100%;
    height: 15rem;
    max-height:15rem;
    position:relative;
`