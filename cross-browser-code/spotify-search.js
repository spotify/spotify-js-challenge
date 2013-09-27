var SpotifySearch = {
	/**
	 * Returns a list of <LI> elements (enclosed within a <UL> element) with the title albums that match
	 * the given text.
	 *
	 * @param queryText {String} Query string to be used for performing the search.
	 * @param callback {Function} Method that will be called passing the <UL> element.
	 * @param context {Object} (Optional) Context to use when calling the given callback. Defaults to window.
	 */
	album: function(queryText, callback, context) {
		var results = document.createElement('ul');

		this._ajax('http://ws.spotify.com/search/1/album.json?q=' + encodeURIComponent(queryText), function(data) {
			var list = data && data['albums'];
			var length;
			var i;

			if (list instanceof Array) {
				length = list.length;

				for (i = 0; i < length; i++) {
					var album = list[i];
					var item = document.createElement('li');
					var text = document.createTextNode(album.name);

					item.classList.add('search-item');
					item.addEventListener('click', this._clicked.bind(this, album), false);
					item.appendChild(text);

					results.appendChild(item);
				}
			}

			callback.call((context || window), results);
		}, this);
	},


	/**
	 * Perform an AJAX call.  This library will be called from example.com; we need to ensure that CORS
	 * will always work.
	 *
	 * @param url {String} URL to fetch.
	 * @param callback {Function} Method that will be called with the JSON response.
	 * @param context {Object} (Optional) Context to use when calling the given callback. Defaults to window.
	 */
	_ajax: function(url, callback, context) {
		var xhr = new XMLHttpRequest();
		var that = this;
		
		xhr.onreadystatechange = function() {
			if ((xhr.readyState === 4) && (xhr.status === 200)) {
				callback.call((context || window), that._parseJson(xhr.responseText));
			}
		};

		xhr.open('GET', url, true);
		xhr.send(null);
	},


	/**
	 * Parses a JSON and returns "null" if the JSON was sintactically incorrect.
	 *
	 * @param str {String} JSON string.
	 * @returns {*} JS object represented by the JSON string passed.
	 */
	_parseJson: function(str) {
		try {
			return JSON.parse(str);
		} catch (err) {
			return null;
		}
	},


	/**
	 * Callback called when a user clicks in a <LI> object. It shows basic information bout the album
	 * selected.
	 *
	 * @param album {Object} Album object.
	 */
	_clicked: function(album) {
		alert([
			'Name: ' + album['name'],
			'Popularity: ' + (album['popularity'] * 100) + '%'
		].join('\n'));
	}
};
