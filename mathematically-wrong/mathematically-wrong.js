/**
 * Disclaimer: This fragment of code forms part of a code challenge,
 * it contains INTENTIONALLY bugs/problems that you need to identify.
 *
 * @see https://github.com/spotify/spotify-js-challenge
 */
var Spotify = Spotify || {};

/**
 * @class Spotify.Math
 */
Spotify = (function(namespace) {

    namespace.Math = {

        /**
         * Counts the number of zeros in a number passed a parameter.
         *
         * @param {Number} number
         * @method countZeros
         * @return {Number}
         */
        countZeros: function(number) {
            return ((number + "").length - (number + "").replace(/0/g, "").length);
        }

    };

    return namespace;

})(Spotify);

// Tests
console.log(Spotify.Math.countZeros(1000) === 3); // => true
console.log(Spotify.Math.countZeros(1100) === 2); // => true
console.log(Spotify.Math.countZeros(9999) === 0); // => true
console.log(Spotify.Math.countZeros(1000000) === 6); // => true
console.log(Spotify.Math.countZeros(111111111111111111111) === 0); // => false, why ??
