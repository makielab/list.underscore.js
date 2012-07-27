list.underscore.js
==================

[Underscore](http://underscorejs.org/) templating plugin for [list.js](http://listjs.com/).

Instead of relying on class names:

```javascript
var options = {
    item: "<li><span class='name'></span><span class='city'></span></li>"
}
```

with this plugin you can do:

```javascript
var options = {
    item: "<li><%= name %><%= city %></li>"
}
```

Enable like so:

```javascript
var options = {
    engine: "underscore"
}
```
