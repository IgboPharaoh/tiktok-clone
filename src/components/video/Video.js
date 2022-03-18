import React, {useRef, useState} from 'react'
import VideoFooter from '../video-footer/VideoFooter'
import VideoSidebar from '../video-sidebar/VideoSidebar'
import './video.css'

const Video = () => {
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
        src="https://v16-webapp.tiktok.com/b17f979aeeae42cd8aab112215a6b6d4/62347d9a/video/tos/useast2a/tos-useast2a-ve-0068c001/ad9bf7d012434164a5fea37480e2e8d7/?a=1988&br=2946&bt=1473&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=2&er=&ft=XOQ9-3tqnz7Thx_H_DXq&l=2022031806381701019204603707035CC6&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajc4dGg6ZnR0OzMzNzczM0ApZGVmOWdoOztoNzY1NGhoN2decm01cjRna2lgLS1kMTZzcy42M18uLWFiMl4wLWFeMWM6Yw%3D%3D&vl=&vr=">
        </video>
        <VideoFooter
            channel='Aboki chief'
            description='check out this dance'
            song =" User - yeah"
        />
        <VideoSidebar/>
    </div>
  )
}

export default Video