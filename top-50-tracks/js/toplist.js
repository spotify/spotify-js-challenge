var Spotify = Spotify || {};

Spotify.TopList = {

  /**
   * Sets up a listener for messages generated in the iframe.
   * Calls handleIncomingTrack() for each received track.
   */
  listenForIncomingMessages: function() {

    // YOUR CODE FOR SETTING UP A LISTENER FOR INCOMING TRACKS MUST BE IMPLEMENTED
    // HERE. Call "this.handleIncomingTrack" WITH A "Spotify.Track" OBJECT.
    // SEE: https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage

  },

  handleIncomingTrack: function(track) {
    var position = this.getInsertPosition(track);
    var div = document.getElementById('top-tracks');
    var children = div.childNodes;
    var length = Math.max(0, children.length);

    if ((typeof position === 'number') && (position >= 0) && (position <= length)) {
      if (position === length) {
        div.appendChild(track.toHTMLElement());
      } else {
        div.insertBefore(track.toHTMLElement(), div.childNodes[position]);
      }

      if (length > 49) {
        div.removeChild(div.lastChild);
      }
    }
  },

  /**
   * Returns the position of the new track for adding it to the list.
   * Decides if a track must be added to the toplist.
   * @param {Spotify.Track} track A track object.
   */
  getInsertPosition: function(track) {
    var position = null;
    Spotify.Profiler.startTiming();

    // YOUR CODE FOR RETURNING THE POSITION MUST BE
    // IMPLEMENTED HERE. ASSIGN IT TO "position".

    Spotify.Profiler.stopTiming();
    return position;
  }
};

Spotify.TopList.listenForIncomingMessages();