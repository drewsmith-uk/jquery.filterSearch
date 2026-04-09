(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.filterSearch = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    function filterSearch(input, list, timeoutOrCallback, optCallback) {

        if (typeof input === 'string') {
            input = document.querySelector(input);
        }

        var listEl = typeof list === 'string' ? document.querySelector(list) : list;
        var items = listEl.children;
        var lastFilter = '';
        var timeout = 0;
        var callback;
        var keyTimeout;

        if (typeof timeoutOrCallback === 'function') {
            callback = timeoutOrCallback;
        } else {
            timeout = timeoutOrCallback || 0;
            callback = optCallback || function () {};
        }

        function doFilter() {
            var filter = input.value.toLowerCase().split(' ').filter(function (el) { return el.length !== 0; });

            for (var i = 0; i < items.length; i++) {
                var text = (items[i].textContent || '').toLowerCase();

                var match = filter.every(function (term) {
                    return text.indexOf(term) >= 0;
                });

                items[i].style.display = match ? '' : 'none';
            }

            callback();
        }

        input.addEventListener('input', function () {
            clearTimeout(keyTimeout);
            keyTimeout = setTimeout(function () {
                if (input.value === lastFilter) return;
                lastFilter = input.value;
                doFilter();
            }, timeout);
        });

        doFilter();
    }

    return filterSearch;

}));
