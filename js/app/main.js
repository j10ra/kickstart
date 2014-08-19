/* kickstart 19-08-2014 */
/* Author: Jetz Alipalo */
var website = website || {}, fn = {};

website.core = function() {
    return fn.page = {
        init: function() {
            console.log("App script: Loaded"), window.jQuery && console.log("jquery: Loaded");
        }
    }, {
        run: function() {
            fn.page.init();
        }
    };
}();