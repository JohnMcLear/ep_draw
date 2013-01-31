var postAceInit = function(hook, context){
  if(draw){
    if(draw.onByDefault){ // Setup testing else poop out
      if(draw.onByDefault === 'true'){
        enabledraw(draw.key);
        showdraw();
      }
    }
    else{
      $("#draw").hide();
      // we don't draw it by default
    }
  }
}

function enabledraw(key){

  var authorName = 'Testing';
  var authorColor = $('#usericon a').css("box-shadow");

  var authorColor = '#000'; // Temporary to be deleted once the authorColor draw code exists

  if($("#draw").length === 0){ // If it's not available already tehn draw it
    $("#editorcontainer").prepend("<div id=draw><iframe id='drawEmbed' src='http://draw.etherpad.org/d/test?authorName="+authorName+"&authorColor="+authorColor+"' width='100%' height='100%' style='border:none' frameborder='0' scrolling='no'></iframe></div>");
  } 
}

function showdraw(){
  enabledraw(draw.key);
  $("#draw").css({"z-index":"999999", "position":"absolute", "top":"0px", "right":"0px", "height":"200px", "width":"200px", "border":"1px solid #ccc"});
  $("#drawEmbed").show().css({"overflow":"hidden"});
  $("#draw").hover(function(){
    clearTimeout($(this).data('timeout'));
    $("#draw").animate({"width":"400px", "height": "400px"});;
  }, function(){
    var t = setTimeout(function() { // Dont zoom out right away, wait a while
      $("#draw").animate({"width":"200px", "height": "200px"});;
    }, 500);
    $(this).data('timeout', t);
  });
}

function hidedraw(){
  $("#draw").hide();
}

function toggledraw(){
  if($("#drawEmbed").is(":visible")){
    hidedraw();
  }else{
    showdraw();
  }
}

$(".drawButton").click(function(){ /* On click listener for draw button */
  toggledraw();
});

exports.postAceInit = postAceInit;
exports.enabledraw = enabledraw;
exports.showdraw = showdraw;
exports.hidedraw = hidedraw;
