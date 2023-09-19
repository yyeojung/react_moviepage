import React, { useEffect, useState } from 'react'

function StarRating(props) {
    const AVR_RATE = Math.round(props.voteAverage * 10) ; // 평점
    const STAR_IDX_ARR = ['first', 'second', 'third', 'fourth', 'last']; //별의 고유 아이디
    const [ratesResArr, setRatesResArr] = useState([0,0,0,0,0]); //별점 리스트 상태
    const calcStarRates = () => {
        let tempStarRatesArr = [0,0,0,0,0]; //임시리스트
        let starVerScore = (AVR_RATE * 70) / 100;//별의 width가 14이므로 14*5=70, 100점 만점인 현재와 비율 맞춰주기
        let idx = 0;
        while (starVerScore > 14) {//starVerScore값에 14를 하나씩 뺌, 나머지 숫자들은 tempStarRatesArr[idx] = starVerScore; 에서 채워줌
            tempStarRatesArr[idx] = 14;
            idx += 1; // 인덱스 0부터 첫번째 별
            starVerScore -= 14;
        }
        tempStarRatesArr[idx] = starVerScore;
        return tempStarRatesArr;    // 평균이 80이라면 [14, 14, 14, 14, 0]
    };
    useEffect(() => {
        setRatesResArr(calcStarRates) //첫 렌더링 때 한번만 상태를 설정
    }, [])
    console.log(ratesResArr)
    return (
        <div className='star_rate'>
            {STAR_IDX_ARR.map((item, idx) => {
                return (
                    <span className="star_icon" key={idx}>
                        <svg xmlns='http://www.w3.org/2000/svg' width='30' height='29' viewBox='0 0 14 13' fill='rgba(255,255,255,0.5)'>
                            {/* clip-path는 임의의 사각형을 만들어 별 위에 덮어주기로 했습니다. */}
                            <clipPath id={`${item}StarClip`}>
                                {/* 여기서 width는 svg의 viewBox 기준입니다. width가 14이기 때문에 절반만 채워주고 싶다면 7이 되는 것 입니다. */}
                                <rect width={`${ratesResArr[idx]}`} height='29' />
                            </clipPath>
                            <path
                                id={`${item}Star`}
                                d='M9,2l2.163,4.279L16,6.969,12.5,10.3l.826,4.7L9,12.779,4.674,15,5.5,10.3,2,6.969l4.837-.69Z'
                                transform='translate(-2 -2)'
                            />
                            {/* clip-path를 사용하기 위한 태그입니다. 채워졌을 때 색상을 설정하면 되고, 각 id를 잘 맞춰 적어주어야 합니다.  */}
                            <use clipPath={`url(#${item}StarClip)`} href={`#${item}Star`} fill='#e22f14'/>
                        </svg>
                    </span>
                )
            })}
        </div>
    )
}

export default StarRating