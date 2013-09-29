var eejs = require('ep_etherpad-lite/node/eejs/');
var settings = require('ep_etherpad-lite/node/utils/Settings');
var drawString = "";

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  if(settings.ep_draw){ // Setup testing else poop out
    //sane defaults
    var url = settings.ep_draw.url ? settings.ep_draw.url : 'http://draw.etherpad.org';
    var onByDefault = settings.ep_draw.onByDefault ? settings.ep_draw.onByDefault : 'true';

    drawString = "<script type='text/javascript'>";
    drawString += "var draw = {}; draw.onByDefault = '"+onByDefault+"';";
    drawString += " draw.url = '"+url+"';";
    drawString += "</script>";
  }else{
    drawString = "<script type='text/javascript'>";
    drawString += "var draw = {}; draw.onByDefault = 'true'; draw.url='http://draw.etherpad.org'";
    drawString += "</script>";
  }
  args.content = args.content + drawString; // add Google Analytics to the contents
  return cb();
}
exports.clientVars = function(hook, context, callback)
{
  // return the setting to the clientVars, sending the value
  return callback({ "url": settings.ep_draw.url });
};
