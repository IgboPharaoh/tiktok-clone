import React, {useState} from 'react'
import './videsidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';


const VideoSidebar = () => {
  const [liked, setLiked] = useState(false)
  return (
    <div className="videosidebar">
      <div className="videosidebar__button" >
        {
          liked ? <FavoriteIcon onChange={(e) => setLiked(false)} /> : <FavoriteBorderIcon onChange={(e) => setLiked(true)} />
        }
        <p>300</p>
      </div>
      <div className="videosidebar__button" >
        <MessageIcon/>
        <p>230</p>
      </div>
      <div className="videosidebar__button" >
        <ShareIcon/>
        <p>10</p>
      </div>
    </div>
  )
}

export default VideoSidebar