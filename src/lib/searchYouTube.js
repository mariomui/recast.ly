
var searchYouTube = (event, options, successCB) => {
   
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: successCB,
    error: function(error) {
      console.error('Failed to fetch videos', error);
    }
  });
  
};

export default searchYouTube;
