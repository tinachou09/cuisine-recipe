(function (global) {

    var homePage = {}

    var homeHtmlUrl = "snippets/home.html";
    var aboutUsUrl =  "snippets/about-us.html"
    var breakfastUrl = "snippets/breakfast.html"

    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    //On page load 
    document.addEventListener("DOMContentLoaded", function(_event){ //once the page loaded 
    // Load home snippet page
    //1st page you want to show at the browser
    $ajaxUtils.sendGetRequest(
        homeHtmlUrl,  //html that you want to send

        //call back function 
        function (responseText) {
            document.querySelector("#main-content").innerHTML = responseText; //once you got the HTML back, then you update the content.
        },
        false);

       updatePageonNavClick("aboutUs",aboutUsUrl)
       updatePageonNavClick("breakfast", breakfastUrl)
       updatePageonNavClick("homePage", homeHtmlUrl)
       

    });

    function updatePageonNavClick(buttonId, page) {
        document.getElementById(buttonId).addEventListener("click", function(_event){
            // Load home snippet page
            $ajaxUtils.sendGetRequest(
                page,
                function (responseText) {
                    document.querySelector("#main-content").innerHTML = responseText;
                },
                false);
            });
    }

  //function do difffernt thing 



    // homePage.loadAboutUsHTML = function () {
    // $ajaxUtils.sendGetRequest(aboutUsUrl,

    // )
    // };

     //Build the html for the about us page
    //  function buildAndShowAboutUsHTML
    global.$homePage = homePage;

})(window);