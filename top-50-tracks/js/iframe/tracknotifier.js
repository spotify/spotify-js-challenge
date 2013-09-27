var Spotify = Spotify || {};

Spotify.MessageRateSelector = {
  Rates: {
    STOP: 100000,
    SLOW: 5000,
    MEDIUM: 2000,
    FAST: 500
  },

  getButtonClass: function(buttonId) {
    switch (buttonId) {
      case 'btn-stop': return 'btn-danger';
      case 'btn-slow-rate': return 'btn-success';
      case 'btn-medium-rate': return 'btn-success';
      case 'btn-fast-rate': return 'btn-warning';
      default: return null;
    }
  },

  getButtonRate: function(buttonId) {
    switch (buttonId) {
      case 'btn-stop': return this.Rates.STOP;
      case 'btn-slow-rate': return this.Rates.SLOW;
      case 'btn-medium-rate': return this.Rates.MEDIUM;
      case 'btn-fast-rate': return this.Rates.FAST;
      default: return this.Rates.STOP;
    }
  }
};

Spotify.TrackNotifier = function() {
  this.messageInterval = null;
  this.lastRateButtonSelected = null;
  this.latestTracksNode = document.getElementById('latest-tracks');

  this.setupMessageInterval = function(messageRate) {
    if (this.messageInterval) {
      window.clearInterval(this.messageInterval);
    }
    if (messageRate < Spotify.MessageRateSelector.Rates.STOP) {
      this.messageInterval = window.setInterval(this.notifyRandomTrack.bind(this), messageRate);
    }
  };

  this.renderLastTrack = function(track) {
    var el = track.toHTMLElement();
    var toBeRemoved = this.latestTracksNode.firstChild;
    if (toBeRemoved) {
      this.latestTracksNode.removeChild(toBeRemoved);
    }
    this.latestTracksNode.appendChild(el);
  };

  this.getRandomTrackUri = function() {
    return Spotify.TracksData[Math.floor(Math.random() * Spotify.TracksData.length)];
  };

  this.notifyRandomTrack = function() {
    var self = this;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState === 4) {
        try {
          if (JSON.parse(this.response)) {
            parent.postMessage(this.response, '*');
            self.renderLastTrack(new Spotify.Track(this.response));
          }
        } catch (err) {
          // Do nothing; API may be down temporarily.
        }
      }
    };
    request.open('GET', 'http://ws.spotify.com/lookup/1/.json?uri=' + this.getRandomTrackUri());
    request.send();
  };

  this.setMessageRate = function(buttonId) {
    if (buttonId != this.lastRateButtonSelected) {
      document.getElementById(buttonId).classList.add(Spotify.MessageRateSelector.getButtonClass(buttonId));
      if (this.lastRateButtonSelected) {
        document.getElementById(this.lastRateButtonSelected)
          .classList.remove(Spotify.MessageRateSelector.getButtonClass(this.lastRateButtonSelected));
      }
      this.lastRateButtonSelected = buttonId;
      this.setupMessageInterval(Spotify.MessageRateSelector.getButtonRate(buttonId));
    }
  };

  this.listenForRateChanges = function() {
    document.getElementById('rate-selector').addEventListener('click', function(event) {
      this.setMessageRate(event.target.id);
    }.bind(this));
  };

  this.init = function() {
    this.setMessageRate('btn-medium-rate');
    this.listenForRateChanges();
  };
};

var trackNotifier = new Spotify.TrackNotifier();
trackNotifier.init();
