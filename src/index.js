import App from './components/App.js';  

import VideoPlayer from './components/VideoPlayer.js';
import VideoList from './components/VideoList.js';

import exampleVideoData from './data/exampleVideoData.js';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<VideoList videos={exampleVideoData} />, document.getElementById('videoList'));
ReactDOM.render(<VideoPlayer video={exampleVideoData[0]} />, document.getElementById('videoPlayer'));
