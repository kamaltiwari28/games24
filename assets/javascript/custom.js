
        (function($){
            $(window).on("load",function(){
                
                $.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
                $.mCustomScrollbar.defaults.axis="yx"; //enable 2 axis scrollbars by default
               
                
                $("#content").mCustomScrollbar({theme:"rounded-dark"});
                
                $(".all-themes-switch a").click(function(e){
                    e.preventDefault();
                    var $this=$(this),
                        rel=$this.attr("rel"),
                        el=$(".content");
                    switch(rel){
                        case "toggle-content":
                            el.toggleClass("expanded-content");
                            break;
                    }
                });
                
            });
        })(jQuery);