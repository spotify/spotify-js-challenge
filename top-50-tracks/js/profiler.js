var Spotify = Spotify || {};

/**
 * Methods to profile the rendering time and checking if the top list is correct.
 */
Spotify.Profiler = {

  /**
   * Stores the time when startTiming() was called.
   * @private
   */
  _startTime: null,

  /**
   * Method to be called before rendering a track inside the top list.
   */
  startTiming: function() {
    this._startTime = window.performance.now();
  },

  /**
   * Method to be called before after a track inside the top list.
   * Updates the render time and correctness badges.
   */
  stopTiming: function() {
    var timeElapsed = (window.performance.now() - this._startTime).toFixed(3);
    document.getElementById('render-timing-label').innerHTML = 'Render time: ' + timeElapsed + ' ms';
    var correctnessNode = document.getElementById('correctness-label');

    if (this._isCorrect()) {
      correctnessNode.innerHTML = 'Correct';
      correctnessNode.classList.remove('label-danger');
      correctnessNode.classList.add('label-success');
    } else {
      correctnessNode.innerHTML = 'Not correct';
      correctnessNode.classList.remove('label-success');
      correctnessNode.classList.add('label-danger');
    }
  },

  /**
   * Checks if the rendered top list is correct.
   * @return {boolean} True if the toplist has the correct order and has =< 50 tracks, false otherwise.
   * @private
   */
  _isCorrect: function() {
    var tracks = document.getElementById('top-tracks').querySelectorAll('a');
    var highestPopularity = 101;
    var popularity;

    if (tracks.length > 50) {
      return false;
    }

    for (var i = 0; i < tracks.length; i++) {
      popularity = +tracks[i].getAttribute('data-popularity');

      if (popularity > highestPopularity) {
        return false;
      } else {
        highestPopularity = popularity;
      }
    }
    return true;
  }

};
