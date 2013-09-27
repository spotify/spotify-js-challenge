var Spotify = Spotify || {};

/**
 * Builds a track object from a track JSON received from the Spotify Metadata API.
 * @constructor
 */
Spotify.Track = function(json) {
  this.track = JSON.parse(json).track;
};

/**
 * Returns an HTML Element with track information.
 * @return {HTMLElement} The HTML element for the track.
 */
Spotify.Track.prototype.toHTMLElement = function() {
  var popularityRank = Math.round(this.track.popularity * 100);
  var el = document.createElement('a');
  el.className = 'list-group-item';
  el.href = this.track.href;
  el.setAttribute('data-popularity', popularityRank.toString());
  el.innerHTML =
    "<span class='badge'>" + popularityRank + "</span>" +
      "<strong>" + this.track.name + "</strong> by <strong>" + this.track.artists[0].name + "</strong>";
  return el;
};

/**
 * Returns the popularity index of the track (0 to 100).
 * @returns {number} Integer from 0 to 100 representing the popularity.
 */
Spotify.Track.prototype.getPopularity = function() {
  return Math.round(this.track.popularity * 100);
};