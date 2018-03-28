import React from 'react'
import VideoDetail from './video-detail'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";
const VideoListItem = (props) => {
    const movie = props.movie;
    return (
    <div>
        <li onClick={handleOnClick}>
            <div className="media">
                <div className="media-left">
                    <img height="140px" src={`${IMAGE_BASE_URL}${movie.poster_path}`}></img>
                </div>
                <div className ="media-body">
                    <h5>{movie.title}</h5>
                    <p>{movie.overview}</p>
                    <span>. . .</span>
                </div>
            </div>
        </li>
    </div>
)
    function handleOnClick(){
        props.callback(movie);
    }
}

export default VideoListItem;