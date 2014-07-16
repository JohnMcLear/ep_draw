var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');
var drawString = "";

exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_draw/templates/editbarButtons.ejs");
  return cb();
}

exports.clientVars = function(hook, context, callback){
  var draw = {};

  try {
    if (settings.ep_draw.host){
      draw.host = settings.ep_draw.host;
    }
  } catch (e){
    console.warn("ep_draw.host NOT SET in settings.json.  The requirement is the host of the etherdraw service IE draw.etherpad.org, copy/paste value to settings.json --  'ep_draw' { 'host': 'your.etherdrawhost.com'}");
    draw.host = "draw.etherpad.org";
  }

  try {
    if(settings.ep_draw.onByDefault){
      draw.onByDefault = true;
    }
  } catch (e){
    draw.onByDefault = false;
  }

  try {
    if(settings.ep_draw.icon){
      draw.icon = settings.ep_draw.icon;
    }
  } catch (e){
    draw.icon = "../static/plugins/ep_draw/static/img/icon.png";
  }
    
  return callback( { "ep_draw": draw } );
};

