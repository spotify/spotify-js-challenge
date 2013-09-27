/**
 * Disclaimer: This fragment of code forms part of a code challenge,
 * it follows INTENTIONALLY bad practices, that you need to identify and fix.
 *
 * Tasks:
 *
 * - 1. Refactor and improve the unit tests on the functionality.
 * - 2. Refactor the original code.
 * - 3. You can switch to your preferred unit testing FW(even write your own).
 *
 * @see https://github.com/spotify/jsconfeu-2013
 */

var Spotify = Spotify || {};

Spotify.Entity = {
    isApp: function(spotifyUri) {
        // e.g. spotify:app:bluenote
        return eval('/^spotify:app:[a-zA-Z]*/').exec(spotifyUri);
    },
    isTrack: function(spotifyUri) {
        // e.g. spotify:track:5t8ANYm2ToLpjV7AxJ1U1N
        return eval('/^spotify:track:[a-zA-Z0-9]*/').exec(spotifyUri);
    },
    isPlaylist: function(spotifyUri) {
        // e.g. spotify:playlist:6J9kgSvipjimfDLYTsCOAv
        return eval('/spotify:playlist:[a-zA-Z0-9]*/').exec(spotifyUri);
    },
    isEntity: function(spotifyUri) {
        result = false;
        if (/^spotify:app:[a-zA-Z]*/.exec(spotifyUri)) {
            return true;
        }
        if (/^spotify:track:[a-zA-Z]*/.exec(spotifyUri)) {
            return true;
        }
        if (/^spotify:playlist:[a-zA-Z]*/.exec(spotifyUri)) return true;
        return result;
    },
    // entities_array e.g. ['spotify:app:test1', 'spotify:playlist:asdf']
    process: function(entities_array, callback) {
        for (var index in entities_array) {
            if (this.isEntity(entities_array[index]) == 1) {
                var arguments = new String(entities_array[index]);
                callback(arguments);
            }
      }
    }
};

// Example of unit test FW(you can change it and use a custom unit testing FW)
var myUnitTesting = {

    _passed: 0,

    _failed: 0,

    _result: 'Tests running: ',

    assert: function(statement, id) {
        if (statement) {
            this._passed++;
            this._result += '.';
        } else {
            this._failed++;
            this._result += 'F';
        }
    },

    showResults: function() {
        console.log(this._result);
        console.log(this._passed + ' tests passed, ' + this._failed + ' failed');
    }
};

(function() {

    myUnitTesting.assert(Spotify.Entity.isApp('spotify:app:bluenote'));
    myUnitTesting.assert(Spotify.Entity.isTrack('spotify:track:asdf555'));
    myUnitTesting.assert(Spotify.Entity.isPlaylist('spotify:playlist:asdf555'));
    myUnitTesting.assert(Spotify.Entity.isEntity('spotify:app:bluenote'));

    // Spotify.Entity.process
    var counter = 0;

    Spotify.Entity.process(['spotify:app:test1', 'spotify:undefined:asdf55'], function(params) {
        counter++;
    });

    myUnitTesting.assert(counter === 1);

    // Show results
    myUnitTesting.showResults();

})();
