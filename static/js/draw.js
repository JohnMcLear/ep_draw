var postAceInit = function(hook, context){
  var draw = clientVars.ep_draw;
  if(draw){
    if(draw.onByDefault){ // Setup testing else poop out
      if(draw.onByDefault === 'true'){
        enabledraw();
        showdraw();
      }
    }
    else{
      $("#draw").hide();
      clientVars.ep_draw.enabled = false;
      // we don't draw it by default
    }

    $('.toggle_draw').click(function() {
      toggledraw();
    });
  }

  try {
    if (clientVars.ep_draw.icon){
      $('.draw_icon').css("background-image", 'url('+clientVars.ep_draw.icon+')');
      $('.draw_icon').css({
        height: "16px",
        width: "16px"
      });
    }
  } catch (e) {

  }

  try {
    if (clientVars.ep_draw.position){
      if(clientVars.ep_draw.position === "right"){
        $('.draw').parent().prependTo(".menu_right");
      }
    } 
  } catch (e) {

  }

}

function enabledraw(){
  var authorName = 'Testing';
  var authorColor = $('#myswatch').css('background-color');
  var draw_host = clientVars.ep_draw.host;

  var padID = clientVars.padId;

  if($("#draw").length === 0){ // If it's not available already then draw it
    $("#editorcontainer").append("<div id=draw><iframe id='drawEmbed' src='//"+draw_host+"/d/"+padID+"?authorName="+authorName+"&authorColor="+authorColor+"' width='100%' height='100%' style='border:none' frameborder='0' scrolling='no'></iframe></div>");
  }
  clientVars.ep_draw.enabled = true;
  showdraw();
}

function showdraw(){
  $("#draw").css({"z-index":"999999", "position":"absolute", "top":"0px", "right":"0px", "height":"200px", "width":"200px", "border":"1px solid #ccc"}).show();
  $("#drawEmbed").show().css({"overflow":"hidden"});
  if(clientVars.ep_draw.enabled !== true){
    enabledraw();

    $("#draw").hover(function(){
      clearTimeout($(this).data('timeout'));
      $("#draw").animate({"width":"100%", "height": "100%"});;
      $("#drawEmbed").animate({"width":"100%", "height": "100%"});;
      clientVars.ep_draw.fullscreen = true;
    }, function(){
      var t = setTimeout(function() { // Dont zoom out right away, wait a while
        $("#draw").animate({"width":"200px", "height": "200px"});;
        clientVars.ep_draw.fullscreen = false;
      }, 500);
      $(this).data('timeout', t);
    });

  }
  clientVars.ep_draw.visible = true;
}

function hidedraw(){
  $("#draw").hide();
  clientVars.ep_draw.fullscreen = false;
  clientVars.ep_draw.visible = false;
}

function toggledraw(){
  if(clientVars.ep_draw.visible === true && clientVars.ep_draw.fullscreen){
    hidedraw();
    return;
  }

  if(!clientVars.ep_draw.visible && !clientVars.ep_draw.autoFullscreen){
    showdraw();
    return;
  } else if(!clientVars.ep_draw.visible && clientVars.ep_draw.autoFullscreen){
    fullScreenDraw();
    return; 
  }
  if(clientVars.ep_draw.visible === true && !clientVars.ep_draw.fullscreen){
    fullScreenDraw();
    return;
  }
}

function fullScreenDraw(){
  clientVars.ep_draw.fullscreen = true;
  $("#draw").animate({"width":"100%", "height": "100%"});;
}

exports.postAceInit = postAceInit;
exports.enabledraw = enabledraw;
exports.showdraw = showdraw;
exports.hidedraw = hidedraw;
