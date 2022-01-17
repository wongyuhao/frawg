function getID(url) {
  
    var timeToSec = function(str) {
      var sec = 0;
      if (/h/.test(str)) { sec += parseInt(str.match(/(\d+)h/,'$1')[0],10) * 60 * 60; }
      if (/m/.test(str)) { sec += parseInt(str.match(/(\d+)m/,'$1')[0],10) * 60; }
      if (/s/.test(str)) { sec += parseInt(str.match(/(\d+)s/,'$1')[0],10); }
      return sec;
    };
    
    var videoId = /^https?\:\/\/(www\.)?youtu\.be/.test(url) ? url.replace(/^https?\:\/\/(www\.)?youtu\.be\/([\w-]{11}).*/,"$2") : url.replace(/.*\?v\=([\w-]{11}).*/,"$1");
    var videoStartTime = /[^a-z]t\=/.test(url) ? url.replace(/^.+t\=([\dhms]+).*$/,'$1') : 0;
    var videoStartSeconds = videoStartTime ? timeToSec(videoStartTime) : 0;
    var videoShowRelated = ~~/rel\=1/.test(url);
    
    return {
      id: videoId,
      startString: videoStartTime,
      startSeconds: videoStartSeconds,
      showRelated: videoShowRelated
    };
    
  }; // youtubeParser();

  

  export default function ytstring(url){
    return `http://img.youtube.com/vi/${getID(url).id}/hqdefault.jpg`
  }