function css(e,t,a){if(2==arguments.length)return parseFloat(e.currentStyle?e.currentStyle[t]:document.defaultView.getComputedStyle(e,!1)[t]);if(3==arguments.length)switch(t){case"width":case"height":case"paddingLeft":case"paddingTop":case"paddingRight":case"paddingBottom":a=Math.max(a,0);case"left":case"top":case"marginLeft":case"marginTop":case"marginRight":case"marginBottom":e.style[t]=a+"px";break;case"opacity":e.style.filter="alpha(opacity:"+100*a+")",e.style.opacity=a;break;default:e.style[t]=a}return function(t,a){css(e,t,a)}}function miaovStartMove(e,t,a,i,o){var s=null;switch(e.timer&&clearInterval(e.timer),a){case MIAOV_MOVE_TYPE.BUFFER:s=miaovDoMoveBuffer;break;case MIAOV_MOVE_TYPE.FLEX:s=miaovDoMoveFlex}e.timer=setInterval(function(){s(e,t,i,o)},15)}function miaovDoMoveBuffer(e,t,a,i){var o=!0,s="",l=0,r=0;for(s in t)r=css(e,s),t[s]!=r&&(o=!1,l=(t[s]-r)/5,l=l>0?Math.ceil(l):Math.floor(l),css(e,s,r+l));i&&i.call(e),o&&(clearInterval(e.timer),e.timer=null,a&&a.call(e))}function miaovDoMoveFlex(e,t,a,i){var o=!0,s="",r=0;for(s in t)if(e.oSpeed||(e.oSpeed={}),e.oSpeed[s]||(e.oSpeed[s]=0),r=css(e,s),Math.abs(t[s]-r)>1||Math.abs(e.oSpeed[s])>1){o=!1,e.oSpeed[s]+=(t[s]-r)/5,e.oSpeed[s]*=.7;var n=65;Math.abs(e.oSpeed[s])>n&&(e.oSpeed[s]=e.oSpeed[s]>0?n:-n),css(e,s,r+e.oSpeed[s])}i&&i.call(e),o&&(clearInterval(e.timer),e.timer=null,a&&a.call(e))}function getByClass(e,t){var a=e.getElementsByTagName("*"),i=[],o=0;for(o=0;o<a.length;o++)a[o].className==t&&i.push(a[o]);return i}var MIAOV_MOVE_TYPE={BUFFER:1,FLEX:2};$(function(){var e=document.getElementById("div1"),t=getByClass(e,"shopBox")[0].getElementsByTagName("li"),a=getByClass(e,"tab_box")[0].getElementsByTagName("a"),i=getByClass(e,"caret")[0],o=[],s=null,l=0;for(l=0;l<t.length;l++)t[l].index=l,o[l]=t[l].offsetLeft;for(l=0;l<t.length;l++)t[l].style.position="absolute",t[l].style.left=o[l]+"px";a[0].onclick=function(){function l(){t[e];e>=t.length/2?(miaovStartMove(t[e],{left:1200},MIAOV_MOVE_TYPE.FLEX),s=setTimeout(l,100),e--):s=setTimeout(r,150)}function r(){e>=0&&(miaovStartMove(t[e],{left:o[e]},MIAOV_MOVE_TYPE.FLEX),s=setTimeout(r,100)),e--}var e=t.length-1;clearTimeout(s),l(),a[1].className="",this.className="show",miaovStartMove(i,{left:this.offsetLeft+this.offsetWidth/2},MIAOV_MOVE_TYPE.BUFFER)},a[1].onclick=function(){function l(){t[e];e<t.length/2?(miaovStartMove(t[e],{left:-400},MIAOV_MOVE_TYPE.FLEX),s=setTimeout(l,100),e++):e==t.length/2&&(s=setTimeout(r,150))}function r(){e<t.length&&(miaovStartMove(t[e],{left:o[e-t.length/2]},MIAOV_MOVE_TYPE.FLEX),s=setTimeout(r,100)),e++}var e=0;clearTimeout(s),l(),a[0].className="",this.className="show",miaovStartMove(i,{left:this.offsetLeft+this.offsetWidth/2},MIAOV_MOVE_TYPE.BUFFER)},$(".erweimaK").click(function(){$(this).animate({left:50},500),$(".erweima").fadeIn(2e3)})});