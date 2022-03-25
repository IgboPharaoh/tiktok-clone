import './App.css';
import Video from './components/video/Video';
import React, {useState, useEffect} from 'react'
import db from "./Firebase";
import 'firebase/compat/firestore';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() =>{
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()))
    })
  }, [videos])
  return (
    <div className="App">
      <div className="app__videos">
        {
          videos.map(({url, channel, description, song, likes, messages, shares, index}) =>
            
            <Video
              key={index}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
            )
        }
      </div>
    </div>
  );
}

export default App;
