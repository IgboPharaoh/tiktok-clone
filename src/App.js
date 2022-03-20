import './App.css';
import Video from './components/video/Video';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          url
          channel
          description
          song
          likes
          messages
          shares
        />
        <Video/>
        <Video/>
        <Video/>
      </div>
    </div>
  );
}

export default App;
