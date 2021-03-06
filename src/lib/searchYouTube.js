var searchYouTube = (options, successCB) => {
       
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      type: 'video', 
      videoEmbeddable: 'true'
    },
    contentType: "application/json",
    dataType: "json",
    success: successCB,
    error: function(error) {
      console.error('Failed to fetch videos', error);
    }
  });
  
};

export default searchYouTube;
