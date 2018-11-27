import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  onVideoClick(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  onSearchClick(videoObject) {
    this.setState({
      videos: videoObject.items
    });
  }
  
  render() {
    let boundClickHandler = this.onVideoClick.bind(this);
    let boundSearchHandler = this.onSearchClick.bind(this);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search clickHandler={boundSearchHandler}/>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7" id="videoPlayer">
            <div>
              <VideoPlayer video={this.state.currentVideo} />
            </div>
          </div>
          <div className="col-md-5" id="videoList">
            <div>
              <VideoList videos={this.state.videos} clickHandler={boundClickHandler} />
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
