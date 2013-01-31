var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');
var drawString = "";

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
