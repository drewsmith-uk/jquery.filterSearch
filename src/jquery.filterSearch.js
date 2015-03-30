
jQuery.fn.filterSearch = function (list, callback) {

    list = jQuery(list).children();
    var input = this;

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
    }).keyup(function () {
        input.change();
    });

    input.change();

    return this; // maintain jQuery chainability
}
