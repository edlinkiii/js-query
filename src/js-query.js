/**
 * js-query -- Vanilla JS shortcuts for recovering jQuery users.
 * 
 * @author Ed Link III.
 */

const $q = (selector) => (selector === document || !selector) ? document : document.querySelector(selector);
const $qa = (selector) => document.querySelectorAll(selector);
const $js = jsQuery = (selector) => new JSQuery({ selector: selector });

Element.prototype.find    = function(selector) { return JSQuery.$find(this, selector); }
Element.prototype.findAll = function(selector) { return JSQuery.$findAll(this, selector); }
NodeList.prototype.filter = function(selector) { return JSQuery.$filter(this, selector); }

Element.prototype.next = function() { return JSQuery.$next(this); }
Element.prototype.prev = function() { return JSQuery.$prev(this); }

Element.prototype.siblings  = function(selector, inclusive = false) { return JSQuery.$siblings(this, selector, inclusive); }
Element.prototype.kids      = function(selector) { return JSQuery.$kids(this, selector); }
Element.prototype.firstKid  = function() { return JSQuery.$firstKid(this); }
Element.prototype.lastKid   = function() { return JSQuery.$lastKid(this); }
Element.prototype.parent    = function() { return JSQuery.$parent(this); }
Element.prototype.parents   = function(selector) { return JSQuery.$parents(this, selector); }
Element.prototype.ancestors = function(selector) { return JSQuery.$parents(this, selector); }
Element.prototype.closest   = function(selector) { return JSQuery.$closest(this, selector); }

Element.prototype.hide   = function() { return JSQuery.$hide(this); }
Element.prototype.show   = function(displayType) { return JSQuery.$show(this, displayType); }
Element.prototype.toggle = function(displayType) { return JSQuery.$toggle(this, displayType); }

NodeList.prototype.hide   = function() { return JSQuery.$hide(this); }
NodeList.prototype.show   = function(displayType) { return JSQuery.$show(this, displayType); }
NodeList.prototype.toggle = function(displayType) { return JSQuery.$toggle(this, displayType); }

Element.prototype.text   = function(string) { return JSQuery.$text(this, string); }
Element.prototype.html   = function(string) { return JSQuery.$html(this, string); }
Element.prototype.markup = function(string) { return JSQuery.$markup(this, string); }

NodeList.prototype.text   = function(string) { return JSQuery.$text(this, string); }
NodeList.prototype.html   = function(string) { return JSQuery.$html(this, string); }
NodeList.prototype.markup = function(string) { return JSQuery.$markup(this, string); }

Element.prototype.before  = function(obj) { return JSQuery.$before(this, obj); }
Element.prototype.prepend = function(obj) { return JSQuery.$prepend(this, obj); }
Element.prototype.append  = function(obj) { return JSQuery.$append(this, obj); }
Element.prototype.after   = function(obj) { return JSQuery.$after(this, obj); }

NodeList.prototype.before  = function(obj) { return JSQuery.$before(this, obj); }
NodeList.prototype.prepend = function(obj) { return JSQuery.$prepend(this, obj); }
NodeList.prototype.append  = function(obj) { return JSQuery.$append(this, obj); }
NodeList.prototype.after   = function(obj) { return JSQuery.$after(this, obj); }

Element.prototype.appendTo     = function(selector) { return JSQuery.$appendTo(this, selector); }
Element.prototype.prependTo    = function(selector) { return JSQuery.$prependTo(this, selector); }
Element.prototype.injectBefore = function(selector) { return JSQuery.$insertBefore(this, selector); }
Element.prototype.injectAfter  = function(selector) { return JSQuery.$insertAfter(this, selector); }

Element.prototype.xPixels = function(newPx) { return JSQuery.$width(this, newPx); }
Element.prototype.yPixels = function(newPx) { return JSQuery.$height(this, newPx); }

Element.prototype.hasClass = function(thisClass) { return JSQuery.$hasClass(this, thisClass); }

Element.prototype.addClass    = function(thisClass) { return JSQuery.$addClass(this, thisClass); }
Element.prototype.removeClass = function(thisClass) { return JSQuery.$removeClass(this, thisClass); }
Element.prototype.toggleClass = function(thisClass) { return JSQuery.$toggleClass(this, thisClass); }

NodeList.prototype.addClass    = function(thisClass) { return JSQuery.$addClass(this, thisClass); }
NodeList.prototype.removeClass = function(thisClass) { return JSQuery.$removeClass(this, thisClass); }
NodeList.prototype.toggleClass = function(thisClass) { return JSQuery.$toggleClass(this, thisClass); }

Element.prototype.val  = function(value) { return JSQuery.$val(this, value); }
Element.prototype.data = function(key, value) { return JSQuery.$data(this, key, value); }
Element.prototype.attr = function(key, value) { return JSQuery.$attr(this, key, value); }
Element.prototype.prop = function(key, value) { return JSQuery.$prop(this, key, value); }
Element.prototype.css  = function(key, value) { return JSQuery.$css(this, key, value); }

NodeList.prototype.val  = function(value) { return JSQuery.$val(this, value); }
NodeList.prototype.data = function(key, value) { return JSQuery.$data(this, key, value); }
NodeList.prototype.attr = function(key, value) { return JSQuery.$attr(this, key, value); }
NodeList.prototype.prop = function(key, value) { return JSQuery.$prop(this, key, value); }
NodeList.prototype.css  = function(key, value) { return JSQuery.$css(this, key, value); }

HTMLDocument.prototype.add = function(tagName) { return JSQuery.$add(tagName); }

HTMLDocument.prototype.create = function(tagName) { return JSQuery.$add(tagName); }

Element.prototype.clone = function(deep = false) { return JSQuery.$clone(this, deep); }

Element.prototype.empty  = function() { return JSQuery.$empty(this); }
NodeList.prototype.empty = function() { return JSQuery.$empty(this); }

// Element.remove() // -- ALREADY EXISTS
NodeList.prototype.remove = function() { return JSQuery.$remove(this); }

Element.prototype.position = function() { return JSQuery.$position(this); }
Element.prototype.offset   = function() { return JSQuery.$offset(this); }

EventTarget.prototype.change = function() { return this.dispatchEvent(new Event('change', { 'bubbles': true })); }
// EventTarget.click() // -- ALREADY EXISTS
// EventTarget.focus() // -- ALREADY EXISTS
// EventTarget.blur() // -- ALREADY EXISTS

function __eventHandler(e) {
    for(let selector in this.__events[e.type]) {
        if(e.target.matches && e.target.matches(selector)) {
            const callbacks = this.__events[e.type][selector];
            callbacks.forEach(function (callback) {
             callback.call(e.target, e) // bind 'event.target' to 'this' in callbacks
            })
        }
    }
}

HTMLDocument.prototype.ready = function(func) { if (document.readyState != "loading") func(); else document.addEventListener("DOMContentLoaded", func); }

HTMLDocument.prototype.on = function(event, selector, func) {
    if(!this.__events) this.__events = {};
    if(!this.__events[event]) this.__events[event] = {};
    if(!this.__events[event][selector]) this.__events[event][selector] = [];
    this.__events[event][selector].push(func);
    this.addEventListener(event, __eventHandler, true);
};
HTMLDocument.prototype.off = function(event, selector) {
    if(this.__events) {
        if(this.__events[event]) {
            if(this.__events[event][selector]) {
                delete this.__events[event][selector];
            }
        }
    }
    this.removeEventListener(event, __eventHandler, true);
};

Element.prototype.on = function(event, selector, func) {
    HTMLDocument.prototype.on.apply(this, [].slice.call(arguments));
};
Element.prototype.off = function(event, selector) {
    HTMLDocument.prototype.off.apply(this, [].slice.call(arguments));
};

const ajax = (options) => {
    return new Promise((resolve, reject) => {
        const defaults = {
            url: null,
            type: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            data: null,
            json: true,
            callback: (data) => { console.log(data); },
            error: (err) => { console.error(err); }
        }
        const opt = {...defaults, ...options};
        if(!opt.url) {
            reject(false);
            return false;
        }
        try {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState === 4) {
                    if (this.status >= 200 && this.status < 300) {
                        opt.callback((opt.json && this.responseText) ? JSON.parse(this.responseText) : this.responseText);
                        resolve(true);
                    }
                    else {
                        opt.error('['+ this.status +': '+ this.statusText +'] '+ this.responseURL +'\n'+ this.responseText, this);
                        reject(false);
                    }
                }
            }
            xhr.open(opt.type, opt.url, true);
            for(let h in opt.headers) {
                xhr.setRequestHeader(h, opt.headers[h]);
            }
            xhr.send((opt.data) ? ((opt.json) ? JSON.stringify(opt.data) : opt.data) : null);
        }
        catch(err) {
            opt.error(err);
            reject(false);
        }
    });
}

const __isElement = (element) => (element instanceof Element || element instanceof Element || element instanceof HTMLDocument)
const __camelCase = (string) => string.toLowerCase().replace(/-./g, c => c. substring(1).toUpperCase())
const __insertAdjacent = (el, place, obj) => { if(__isElement(obj)) el.insertAdjacentElement(place, obj); else el.insertAdjacentHTML(place, obj); }
const __buildElementPath = (el) => { let p = el.parentNode; if(p === document) { return el.tagName; }  return __buildElementPath(p) + " > :nth-child(" + (Array.prototype.indexOf.call(p.children, el)+1) + ")"; } // original code by: apsillers @ stackoverflow.com
const __toNodeList = (arr) => { return document.querySelectorAll(arr.map((el) => __buildElementPath(el)).join(",")); } // original code by: apsillers @ stackoverflow.com
const __FPS = 1000 / 60;
const __animate = (func) => { if(func()) { setTimeout(() => { __animate(func); }, __FPS); } }
const __defaultDisplay = (tag) => {
    if(!tag) return "none";
    switch(tag.toLowerCase()) {
        case "address": case "article": case "aside": case "blockquote": case "body": case "dd": case "details": case "div": case "dl": case "dt": case "fieldset": case "figcaption": case "figure": case "footer": case "form": case "h1": case "h2": case "h3": case "h4": case "h5": case "h6": case "header": case "hr": case "html": case "iframe": case "legend": case "menu": case "nav": case "ol": case "p": case "pre": case "section": case "summary": case "ul": return "block";
        case "area":case "datalist":case "head":case "link":case "param":case "script":case "style":case "title": return "none";
        case "img": return "inline-block";
        case "caption": return "table-caption";
        case "col": return "table-column";
        case "colgroup": return "table-column-group";
        case "li": return "list-item";
        case "table": return "table";
        case "tbody": return "table-row-group";
        case "td": return "table-cell";
        case "tfoot": return "table-footer-group";
        case "th": return "table-cell";
        case "thead": return "table-header-group";
        case "tr": return "table-row";
        case "map": case "output": case "q": default: return "inline";
    }
}
