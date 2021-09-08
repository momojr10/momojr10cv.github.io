$(function(){
    $(".navbar a, footer a").on("click",function(event){
        event.preventDefault();
        var hash=this.hash;
        $("body ,html").animate({scrollTop:$(hash).offset().top},900,function(){
            window.location.hash=hash;
        });
    });
    $(".navbar-default .navbar-toggle").click(function(){
        $(".navbar li a").click(function(){
            $(".navbar-collapse").hide(1000,function()
            {
                $(".navbar-default .navbar-toggle").click(function(){
                    $(".navbar-collapse").show(1000);
                }); 
            });
        });
    });
  
        $(".navbar li .formation").click(function(){
            $(".timeline #ecole").hide(1000,function() {
                $(".timeline #univ1").hide(1000,function(){
                    $(".timeline #univ2").hide(1000,function(){
                        $(".timeline #ecole").show(2000,function(){
                            $(".timeline #univ1").show(2000,function(){
                                $(".timeline #univ2").show(2000);
                            });
                        });
                    });
            });
        });
           
    });
    $(".navbar li .formationOnline").click(function(){
        $(".education-block").slideUp(3000).slideDown(3000);
    });
 });
