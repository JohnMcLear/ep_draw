# Deprecated, use WBO and ep_whiteboard instead :)

Use WBO and ep_whiteboard

https://github.com/lovasoa/whitebophir

https://www.npmjs.com/package/ep_whiteboard

# Drawing and painting in Etherpad

You must be running an instance [Etherdraw](https://github.com/JohnMcLear/draw).

In your `settings.json`, add:

## To change your host 

Set up a host accessible from the user's browser.

```json
    "ep_draw": {
        "host": "your.etherdrawhost.com"
    }

    # Example
    "ep_draw":{
        "host": "localhost:9002"
    }
```
## To enable by Default

```json
    "ep_draw": {
        "onByDefault": true
    }
```

## To enable fullscreen by Default
```json
    "ep_draw": {
        "autoFullscreen": true
    }
```

## To change the icon

```json
    "ep_draw": {
        "icon": "http://myicon.com/awesomeicon.png"
    }
```

## To put the icon on the right hand side of the toolbar
```json
    "ep_draw": {
        "position": "right"
    }
```



todo
====

1. Make the AuthorName, padID and Authorcolor passed to draw.etherpad.org
1. Allow setting for opacity in setting.json
1. Document the settings required to get it working
1. Allow a setting in the settings dropdown to hide the paint (with cookie)
1. Find out why going outside the canvas doesnt stop drawing
1. Allow setting for showing Artist count or not.
1. Clear/reset button
