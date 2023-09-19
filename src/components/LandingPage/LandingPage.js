import React from 'react'
import { useEffect, useState } from "react"
import { API_URL, API_KEY, API_IMG } from "../../API"
import {Row} from 'antd';

import MainImg from "./MainImg";
import Header from '../NavBar/Header';
import GridCards from "../common/GridCards";
import Loading from '../common/Loading';



function LandingPage() {
    // const [Loading, setLoading] = useState(true); 로딩 추가할거임,,
    const [Movies, setMovies] = useState([]); //최신 영화 목록
    const [MainMovieImg, setMainMovieImg] = useState(null); //setMainMovieImg(response.results[1])영화 정보
    const [CurrentPage, setCurrentPage] = useState(0); //버튼 불러오기 영화 목록
    const [isLoading, setIsLoading] = useState(true); 


    const fetchMovies = (endpoint) => {
        fetch(endpoint)
        .then(response => response.json())
        .then((response) => {
            if (CurrentPage === 0) { 
                setMovies([...response.results]);
                setMainMovieImg(response.results[2]);//페이지 1의 첫번째 인기 영화!
            } else { // 페이지가 추가되면 기존의 목록들 뒤에 추가하기, 영화가 추가될 때마다 메인 영화 이미지가 바껴서 코드 수정 
                setMovies([...Movies, ...response.results]);
            } 
            setCurrentPage(response.page)
            setIsLoading(false)
        })
    }

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
        fetchMovies(endpoint)
    }, [])

    const loadMoreMovie = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${CurrentPage + 1}`;
        fetchMovies(endpoint)
    }

    return (
        <div className="wrap">
            <Header></Header>
            {isLoading ? (
                <Loading/>
            ) : (
            <div className="container">
                {/* 메인 이미지 */}
                {MainMovieImg && (
                    <MainImg 
                        img={`${API_IMG}original/${MainMovieImg.backdrop_path}`}
                        title={MainMovieImg.original_title}
                        overview={MainMovieImg.overview}
                    />
                )}
                <div className="movie_list">
                    <h2>Movies by lastest</h2>
                    <hr />
                    <Row gutter={[16, 16]}>
                        {Movies && Movies.map((movie, index) => (
                            <React.Fragment key={index}>
                                <GridCards
                                    image={movie.poster_path ? 
                                        `${API_IMG}w500/${movie.poster_path}` : null} //포스터가 있으면 이미지, 아니면 null
                                    movieId={movie.id}
                                    movieName={movie.original_title}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                </div>
                <div className='btn_box'>
                    <button className='more_btn' onClick={loadMoreMovie}>Load More</button>
                </div>

            </div>

            )}
        </div>
    )
}
export default LandingPage
