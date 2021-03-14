(function (global) {

    var dc = {}

    var homeHtmlUrl = "snippets/home.html";

    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    var showLoading = function(selector) {
        var html = "div class ='text-center'>";
        html += "<img src= 'images/ajax-loader.gif></div>";
        insertHtml(selector, html)
        // body...
    }

    // Load home snippet page
    $ajaxUtils.sendGetRequest(
        homeHtmlUrl,
        function (homeHtml) {
            insertHtml('#main-content', homeHtml);
        },
        false);

    global.$dc = dc;

})(window);