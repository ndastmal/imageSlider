
(function ($) {
    $.fn.slider = function (options) {
        function getEventTarget(e) {
            e = e || window.event;
            return e.target || e.srcElement; 
        }
        
        var settings = $.extend({
            height : "100px",		
            width : "100px",	
            borderColor : "#030303",		
            borderWidth : "2px"	,
            borderStyle:"solid",
            padding: "10px"
        }, options);
        
        $("div#slideImages").css("height", settings.height).css("width", settings.width).css("border-color", settings.borderColor).css("border-width", settings.borderWidth).css("border-style", settings.borderStyle).css("padding", settings.padding).css("padding", settings.padding);
        
        
        var ul = document.getElementById('sliderLinks');


                var elClicked;
                var elLength = $("#slideImages > img").length;
                var i;
                var imageNameLoop;
                var linkNameLoop;                  
                
                ul.onclick = function(event) {
                    var target1 = getEventTarget(event);

                    elClicked = target1.innerHTML;
                    
                    if(elClicked <= elLength){
                                           
                        elClicked = Number(elClicked -1);

                        var imageName = document.getElementById('img' + elClicked);
                        var linkName = document.getElementById('link' + elClicked);
                        $(imageName).fadeIn(2500, "swing");
                        $(linkName).css({'fontSize':'40px', 'textDecoration':'underline', margin:'0'});

                        for (i = 0; i < elLength; i++){

                            var imageNameLoop = document.getElementById('img' + i);
                            var linkNameLoop = document.getElementById('link' + i);

                            $(linkNameLoop).not(linkName).css({'fontSize':'inherit', 'textDecoration':'none', 'margin':'0 6px'});
                            $(imageNameLoop).not(imageName).fadeOut(2500, "swing");

                        }
                    }
                };
        }
}(jQuery));
