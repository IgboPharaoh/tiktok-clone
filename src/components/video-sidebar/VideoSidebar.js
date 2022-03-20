import React, {useState} from 'react'
import './videsidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';


const VideoSidebar = ({likes, shares, messages}) => {
  const [liked, setLiked] = useState(false)
  return (
    <div className="videosidebar">
      <div className="videosidebar__button" >
        {
          liked ? <FavoriteIcon fontSize="Large" onClick={(e) => setLiked(false)} /> : <FavoriteBorderIcon onClick={(e) => setLiked(true)} />
        }
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videosidebar__button" >
        <MessageIcon/>
        <p>{messages}</p>
      </div>
      <div className="videosidebar__button" >
        <ShareIcon/>
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar