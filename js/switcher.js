window.console=window.console||function(){var e={};e.log=e.warn=e.debug=e.info=e.error=e.time=e.dir=e.profile=e.clear=e.exception=e.trace=e.assert=function(){};return e}();jQuery(document).ready(function(e){e("#style-switcher .bottom a.settings").click(function(t){t.preventDefault();var n=e("#style-switcher");console.log(n.css("left"));if(n.css("left")==="-189px"){e("#style-switcher").animate({left:"0px"})}else{e("#style-switcher").animate({left:"-189px"})}});e("ul.colors li a").click(function(t){t.preventDefault();_self=e(this);colorx=_self.data("color");e("#color").attr("href","css/colors/"+colorx+".css");_self.parent().parent().find("a").removeClass("active");_self.addClass("active")})})