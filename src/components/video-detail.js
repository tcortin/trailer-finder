import React from 'react'

const VideoDetail = ({title, description, release, popularity}) => {
    return (
        <div className="video-detail">
            <h2>{title}</h2>
            <div className="infos">
                <p>Sortie: {release}</p>
                <p>Note: {popularity}/10</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default VideoDetail;