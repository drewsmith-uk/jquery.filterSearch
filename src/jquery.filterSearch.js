
jQuery.fn.filterSearch = function (list, timeoutOrCallback, optCallback) {

    list = jQuery(list).children();
    var input = this;
    var lastFilter = '';
    var timeout = 0;
    var callback;
    var keyTimeout;

    //check for valid callback and/or timeout
    if (jQuery.isFunction(timeoutOrCallback)) {
        callback = timeoutOrCallback || function() {};
    } else {
        timeout = timeoutOrCallback || 0;
        callback = optCallback || function() {};
    }

    input.change(function () {
        var filter = input.val().toLowerCase().split(" ").filter(function (el) { return el.length != 0 });
        list.each(function () {
            var item = jQuery(this);
            var text = item.text() || "";

            function isFilterInItem(filter) {
                if (text.toLowerCase().indexOf(filter) >= 0) {
                    return true;
                } else {
                    return false;
                }
            }

            if (filter.every(isFilterInItem)) {
                item.show();
            } else {
                item.hide();
            }
        })
        callback();
        return false;
    }).keydown(function() {
		clearTimeout(keyTimeout);
		keyTimeout = setTimeout(function() {
			if( input.val() === lastFilter ) return;
			lastFilter = input.val();
			input.change();
		}, timeout);
	});

    input.change();

    return this; // maintain jQuery chainability
};
