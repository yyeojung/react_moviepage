import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';

import { API_KEY, API_URL,API_IMG } from '../../API'
import Header from '../NavBar/Header'
import StarRating from '../common/StarRating'
import Loading from '../common/Loading'
import SlideCrew from '../common/SlideCrew'

function MovieDetail() {
    let {movieId} = useParams()
    const [isLoading, setLoading] = useState(true); 
    const [Movie, setMovie] = useState([]);
    const [CrewData, setCrewData] = useState([]);
    // const [Genre, setGenre] = useState([])
    
    useEffect(() => {
        
        let endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

        //영화 정보 api
        let endPoinInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KR`
        fetch(endPoinInfo)
            .then(response => response.json())
            .then(response => {
                setMovie(response);
                setLoading(false);
        })

        fetch(endPointCrew)
            .then(response => response.json())
            .then(response => {
                console.log(response.cast)
                setCrewData(response.cast);
        })
        
    },[])
    console.log(isLoading)

  return (
    <div> 
        {/* header */}
        <Header></Header>

        {/* body */}
        {isLoading ? (
            <Loading/>
        ) : (
        <div className='container' style={{position:'relative', overflow:'hidden'}}>
            <div className="black"></div>
            <div style={{backgroundImage:`url('${API_IMG}original/${Movie.backdrop_path}')`}} className='blur_bg'></div>
            {/* movie info */}
            <div className='movie_info'>
                <div className='movie_img_box'>
                    <img src={`${API_IMG}w500/${Movie.poster_path}`} alt={`${Movie.original_title}`} />
                </div>

                {/* movie desc */}
                <div className='movie_desc'>
                    <h2>{Movie.title}</h2>
                    <span className='martop_10'>{Movie.release_date}</span>
                    {/* 장르 */}
                    <ul className='genre_list martop_20'>
                        {Movie.genres.slice(0, 5).map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <p className='overview martop_20 lh_15'>{Movie.overview}</p>
                    {/* 예매율 프로그래스바를 만들었지만 예매율 데이터가 없어서 삭제! */}
                    {/* <p className='vote_txt martop_20'>{`${Movie.vote_average}`.slice(0,3)*10}%</p>
                    <div className='vote martop_10'>
                        <p style={{width:`${Movie.vote_average * 10}%`}}></p>
                    </div> */}

                    {/* 별점 */}
                    <div className='star_rate_box'>
                        <StarRating voteAverage={Movie.vote_average}/>
                        <h3 className='marleft_10'>{`${Movie.vote_average}`.slice(0,3)}</h3>
                    </div>
                    {/* 등장인물 */}
                    <div className='martop_20'>
                        <SlideCrew CrewData={CrewData} />
                    </div>
                </div>
            </div>
        </div>
        )}
    </div>
  )
}

export default MovieDetail
