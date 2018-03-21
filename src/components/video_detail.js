import React from 'react';

const VideoDetail = ({videoItem}) => {
  if(!videoItem){
    return(
      <div></div>
    )
  }
  const videoId = videoItem.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;


  return(
    <div className="video-detail col-xs-12 col-lg-8 ">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url}></iframe>
      </div>
      <div className="details">
        <div>{videoItem.snippet.title}</div>
        <div>{videoItem.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
