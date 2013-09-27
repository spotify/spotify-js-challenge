           ______           __                     ____  ____  __  ___
          / ____/_  _______/ /_____  ____ ___     / __ \/ __ \/  |/  /  _      ___________ _____  ____  ___  _____
         / /   / / / / ___/ __/ __ \/ __ `__ \   / / / / / / / /|_/ /  | | /| / / ___/ __ `/ __ \/ __ \/ _ \/ ___/
        / /___/ /_/ (__  ) /_/ /_/ / / / / / /  / /_/ / /_/ / /  / /   | |/ |/ / /  / /_/ / /_/ / /_/ /  __/ /
        \____/\__,_/____/\__/\____/_/ /_/ /_/  /_____/\____/_/  /_/    |__/|__/_/   \__,_/ .___/ .___/\___/_/
                                                                                        /_/   /_/
        +------------------------------+
        |.==ooo=~~..~.~............    |
        |=ooooooo=~~~~~~~~.. . .   .   |
        |=ooooooo=  ~~~~~      .   ..  |
        |~====o==~    ~~ ...~..... .   |
        +------------------------------+

        Implement a custom DOM wrapper library called SpotifyDOM.
        Points: 3
        It must be compatible with IE >=8, Firefox, Safari and Chrome
        We need chaining so we can perform operations like this:
        // Change the content of all the elements that have the class '.element'
        SpotifyDOM.get('.element').each(function(content) { content.html('test'); });

        You can see the definition of the interface here, but also it's included
        in the file spotify-dom.js, that you can extend to
        send us the solution.
            ____      __            ____
           /  _/___  / /____  _____/ __/___ _________
           / // __ \/ __/ _ \/ ___/ /_/ __ `/ ___/ _ \
         _/ // / / / /_/  __/ /  / __/ /_/ / /__/  __/
        /___/_/ /_/\__/\___/_/  /_/  \__,_/\___/\___/

        /**
         * Constructor for the SpotifyDOM object.
         *
         * @param selector {String}, it can follow the following formats:
         *  - class e.g. '.element'
         *  - identifier e.g. '#element'
         *  - tag name e.g. 'li'
         * @return {SpotifyDOM}
         */
        var SpotifyDOM = function(selector) {};

        /**
         * Changes or returns the content of the element.
         *
         * @param content {String}
         * @return {SpotifyDOM}
         * @method html
         * @return {String} The content of the element
         * @throws {SpotifyDOMInvalidElement} When the current content of the wrapper
         * is a collection,
         *  e.g. SpotifyDOM(‘li’).html(‘test’)
         */
        SpotifyDOM.prototype.html = function(content) {};

        /**
         * Applies the callback to every element of the collection, the callback will
         * receive the current SpotifyDOM object of the iteration.
         *
         *  e.g. SpotifyDOM(‘li’).each(function(element) { element.html(‘test’); });
         *
         * @method each
         * @param {Function} callback
         * @return {SpotifyDOM}
         */
        SpotifyDOM.prototype.each = function(callback) {};

        /**
         * @method isCollection
         * @return {Boolean} true if the currently selected element is a collection(e.g. ‘li’).
         */
        SpotifyDOM.prototype.isCollection = function() {};
















































































slide 1