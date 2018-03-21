import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
  const videoItems = props.videoList.map((item) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={item.etag}
        videoItem={item}
      />
    )
  });
  return (
    <ul className='col-xs-12 col-lg-4 list-group'>
      {videoItems}
    </ul>
  )
}

export default VideoList;
