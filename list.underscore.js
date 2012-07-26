List.prototype.templateEngines.underscore = function(list, settings) {
    var h = window.ListJsHelpers;
    var listSource = h.getByClass(settings.listClass, list.listContainer, true),
        itemSource = _.template(settings.item),
        templater = this;

    var ensure = {
        created: function(item) {
            if (item.elm === undefined) {
                templater.create(item);
            }
        }
    };

    /* Get values from element */
    this.get = function(item, valueNames) {
        // console.log("get not implemented");
    };

    /* Sets values at element */
    this.set = function(item, values) {
        if (item.elm !== undefined) {
            return;
        }
        var div = document.createElement('div');
        div.innerHTML = itemSource(item.values());
        item.elm = div.firstChild;
    };

    this.create = this.set;

    this.remove = function(item) {
        listSource.removeChild(item.elm);
    };
    this.show = function(item) {
        ensure.created(item);
        listSource.appendChild(item.elm);
    };
    this.hide = function(item) {
        if (item.elm !== undefined && item.elm.parentNode === listSource) {
            listSource.removeChild(item.elm);
        }
    };
    this.clear = function() {
        /* .innerHTML = ''; fucks up IE */
        if (listSource.hasChildNodes()) {
            while (listSource.childNodes.length >= 1)
            {
                listSource.removeChild(listSource.firstChild);
            }
        }
    };
};