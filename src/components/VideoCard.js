import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;



    return (
        <div className='p-2 m-2 w-80 shadow-lg'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="" />
            <ul>
                <li className='font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    );
}

// Higher order component, take an existing element and return another element by modifying it.
export const AdVideoCard = ({info}) => {
    return (
        <div className='p-1 m-1 border border-red-900'>
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard