import React, {useRef, useState} from 'react'
import VideoFooter from '../video-footer/VideoFooter'
import VideoSidebar from '../video-sidebar/VideoSidebar'
import './video.css'

const Video = ({url, channel, description, song, likes, messages, shares}) => {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const onVideoPress = () =>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
  return (
    <div className="video">
        <video 
        className="video__player" 
        ref={videoRef}
        onClick={onVideoPress}
        loop
        src={url}
        >
        </video>
        <VideoFooter channel={channel} description={description} song ={song} />
        <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  )
}

export default Video