import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var Search = (props) => {
    
  var options = {
    max: 5,
    key: YOUTUBE_API_KEY
  };
    
  var callSearchYouTube = () => {
    options.query = document.getElementById('searchYT').value;
    searchYouTube(options, props.clickHandler);
  };
  
  var keyDownHandler = (event) => {
    setTimeout(callSearchYouTube, 500);
  };
  
  return (
    <div className="search-bar form-inline">
      <input onKeyDown={keyDownHandler} className="form-control" type="text" id="searchYT"/>
      <button onClick={callSearchYouTube} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  ); 
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
