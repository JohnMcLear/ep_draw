var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');
var drawString = "";

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_draw/templates/editbarButtons.ejs");
  return cb();
}

exports.clientVars = function(hook, context, callback){
  var draw_host;
  try {
    if (settings.ep_draw.host){
        draw_host = settings.ep_draw.host;
    }
  } catch (e){
    console.warn("ep_draw.host: host of the etherdraw service");
    draw_host = "";
  }
  return callback({ "draw_host": draw_host });
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  if(settings.ep_draw){ // Setup testing else poop out
    drawString = "<script type='text/javascript'>";
    drawString += "var draw = {}; draw.onByDefault = '"+settings.ep_draw.onByDefault+"'";
    drawString += "</script>";
  }else{
    drawString = "<script type='text/javascript'>";
    drawString += "var draw = {}; draw.onByDefault = 'true'";
    drawString += "</script>";
  }
  args.content = args.content + drawString; // add Google Analytics to the contents
  return cb();
}
