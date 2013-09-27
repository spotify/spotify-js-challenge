Cross-browser code
==================
![Spotify Logo](../resources/spotify-logo.png)

You need to make this code cross-browser compatible in order to ship it for a variety of navigators.

**Points: 2**

Given the proposed piece of code: [spotify-search.js](./spotify-search.js)

* Make it cross-browser.
* Needs to run correctly in IE>=8, Firefox, Safari and Chrome.
* **Note:** No FW allowed to solve it ;)

Example of execution
====================

```javascript
SpotifySearch.album('foo', function(list) {
	document.body.appendChild(list);
});
```
