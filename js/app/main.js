//Use strict
//-------------------------------/

var website = website || {}, fn = {};

website.core = (function () {

    fn.page = {
        init: function () {
            console.log('app script: Loaded');

            var hello = 20;
            if(hello === 1){
                alert(hello);
            }
        }
    };

    return {
        run: function () {
            fn.page.init();
            var hello = 0;

            if(hello === 2) {
                alert('sdasd');
            }
        }
    };

}());

$(document).ready(function() {website.core.run();
});
