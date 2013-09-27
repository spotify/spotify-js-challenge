var ClickableAreas = (function(namespace) {
	/**
	 * Creates a new area map. It requires a DOM element to be created.
	 *
	 * @param object {Element} DOM element to use.
	 * @constructor
	 */
	function ClickableAreas(object) {
		var that = this;

		if ((!object) || (object.nodeType !== 1)) {
			throw new TypeError('Element passed is not a valid DOM element');
		}

		object.addEventListener('click', function(evt) {
			 that._click(evt);
		});

		this._areas = [];
	};
	
	
	
	ClickableAreas.prototype = {
		_areas: null,


		/**
		 * Adds a new clickable area. The passed callback will be called when the
		 * area is clicked.
		 *
		 * @param x {Number} X coordinate of the area.
		 * @param y {Number} Y coordinate of the area.
		 * @param width {Number} Area width.
		 * @param height {Number} Area height.
		 * @param handler {Function} Callback to be called when the area is clicked.
		 */
		addArea: function(x, y, width, height, handler) {
			this._areas.push({
				rect: {
					topLeft: [x, y],
					bottomRight: [x + width, y + height]
				},

				handler: handler
			});
		},
	

		/**
		 * Returns the local mouse coordinates.
		 *
		 * @private
		 * @param evt {MouseEvent} Event for extracting the coordinates.
		 * @returns {Array} [X, Y] coordinates of the pixel where the cursor is.
		 */
		_getMouseCoordinates: function(evt) {
			return [evt.offsetX, evt.offsetY];
		},


		/**
		 * Internal event that will handle the click over the DOM element.
		 *
		 * @private
		 * @param evt {MouseEvent} Event passed by the JS engine.
		 */
		_click: function(evt) { 
			var point = this._getMouseCoordinates(evt);
			var areas = this._areas;
			var length = areas.length;
			var area;
			var i;

			for (i = 0; i < length; i++) {
				area = areas[i];

				if (this._pointInRect(point, area.rect)) {
					area.handler();
				}
			}
		},


		/**
		 * Checks if a point is inside a provided rectangle or not. The rectangle object
		 * is made by two points ("topLeft" and "bottomRight") of the form [X, Y]. The
		 * point also follows this format.
		 *
		 * @private
		 * @param point {Array} [X, Y] point.
		 * @param rect {Object} Object with the upper-left and bottom-right coordinates of the rect.
		 * @returns {Boolean} True if the point is inside the rectangle.
		 */
		_pointInRect: function(point, rect) {
			var topLeft = rect.topLeft;
			var bottomRight = rect.bottomRight;
			var x = point[0];
			var y = point[1];

			return ((topLeft[0] <= x) && (x <= bottomRight[0])) &&
			       ((topLeft[1] <= y) && (y <= bottomRight[1]));
		}
	};
	
	
	return ClickableAreas;
})();
