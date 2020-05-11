/**
 * JS Query -- Vanilla JS shortcuts for recovering jQuery users.
 * @version 1.1.2
 * @author Ed Link III.
 */

const $q = (selector) => (selector === document || !selector) ? document : document.querySelector(selector);
const $qa = (selector) => document.querySelectorAll(selector);

Element.prototype.find = function(selector) { return this.querySelector(selector); }
Element.prototype.findAll = function(selector) { return this.querySelectorAll(selector); }
NodeList.prototype.filter = function(selector) { return __toNodeList(Array.prototype.filter.call(this, (el) => el.matches(selector))); }

Element.prototype.next = function() { return this.nextElementSibling; }
Element.prototype.prev = function() { return this.previousElementSibling; }
Element.prototype.siblings = function(selector, inclusive = false) { if (typeof selector === "boolean") { inclusive = selector; selector = null; } console.log(selector, inclusive); if(selector && selector !== null) return __toNodeList(Array.prototype.filter.call(this.parentNode.children, (child) => ((!inclusive && child !== this) || (inclusive)) && child.tagName && child.matches(selector))); return __toNodeList(Array.prototype.filter.call(this.parentNode.children, (child) => ((!inclusive && child !== this) || (inclusive)) && child.tagName)); }
Element.prototype.kids = function(selector) { if(selector) return __toNodeList(Array.prototype.filter.call(this.childNodes, (child) => child.tagName && child.matches(selector))); return __toNodeList(Array.prototype.filter.call(this.childNodes, (child) => child.tagName)); }
Element.prototype.firstKid = function() { return Array.prototype.filter.call(this.childNodes, (child) => child.tagName)[0]; }
Element.prototype.lastKid = function() { let arr = Array.prototype.filter.call(this.childNodes, (child) => child.tagName); return arr[arr.length-1]; }
Element.prototype.parent = function() { return this.parentElement; }
Element.prototype.parents = function(selector) { let arr = [], tagName = '', el = this, p; while(tagName !== 'HTML') { p = el.parentNode; if(selector) { if(el.matches(selector)) { arr.push(el); }} else { arr.push(p); } tagName = p.tagName.toUpperCase(); el = p; } return __toNodeList(arr); }
Element.prototype.ancestors = function(selector) { return this.parents(selector); }
Element.prototype.closest = function(selector) { if(selector === undefined) return this.parentElement; let tagName = '', el = this, p, end = false; while(tagName !== 'HTML' && !end) { p = el.parentNode; if(p.matches(selector)) { end = true; return p; } tagName = p.tagName.toUpperCase(); el = p; } }

Element.prototype.isSelf = function(element) { return (this === element); }
Element.prototype.isDescendant = function(element) { return (this !== element && element.contains(this)); }
Element.prototype.isDirectDescendant = function(element) { return (this.parentElement === element); }
Element.prototype.isChild = function(element) { return (this.parentElement === element); }
Element.prototype.isParent = function(element) { return (element.parentElement === this); }

Element.prototype.hide   = function() { this.style.display = 'none';                                     return this; }
Element.prototype.show   = function() { this.style.display = __defaultDisplay(this.tagName);             return this; }
Element.prototype.toggle = function() { if(this.style.display !== 'none') this.hide(); else this.show(); return this; }

NodeList.prototype.hide   = function() { this.forEach((n) => n.hide());   return this; }
NodeList.prototype.show   = function() { this.forEach((n) => n.show());   return this; }
NodeList.prototype.toggle = function() { this.forEach((n) => n.toggle()); return this; }

Element.prototype.text   = function(str) { if(str === undefined) return this.textContent; this.textContent = str; return this; }
Element.prototype.html   = function(str) { if(str === undefined) return this.innerHTML;   this.innerHTML = str;   return this; }
Element.prototype.markup = function(str) { if(str === undefined) return this.outerHTML;   this.outerHTML = str;   return this; }

NodeList.prototype.text   = function(str) { if(str === undefined) return; this.forEach((n) => n.text(str));   return this; }
NodeList.prototype.html   = function(str) { if(str === undefined) return; this.forEach((n) => n.html(str));   return this; }
NodeList.prototype.markup = function(str) { if(str === undefined) return; this.forEach((n) => n.markup(str)); return this; }

Element.prototype.before  = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'beforebegin', obj); return (this.prev())     ? this.prev()     : this; }
Element.prototype.prepend = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'afterbegin', obj);  return (this.firstKid()) ? this.firstKid() : this; }
Element.prototype.append  = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'beforeend', obj);   return (this.lastKid())  ? this.lastKid()  : this; }
Element.prototype.after   = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'afterend', obj);    return (this.next())     ? this.next()     : this; }

NodeList.prototype.before  = function(obj) { if(obj === undefined) return; let arr = Array.from(this).map((n) => n.before(obj));  return __toNodeList(arr); }
NodeList.prototype.prepend = function(obj) { if(obj === undefined) return; let arr = Array.from(this).map((n) => n.prepend(obj)); return __toNodeList(arr); }
NodeList.prototype.append  = function(obj) { if(obj === undefined) return; let arr = Array.from(this).map((n) => n.append(obj));  return __toNodeList(arr); }
NodeList.prototype.after   = function(obj) { if(obj === undefined) return; let arr = Array.from(this).map((n) => n.after(obj));   return __toNodeList(arr); }

Element.prototype.appendTo     = function(selector) { let arr = Array.from($qa(selector)).map((n) => n.append(this.clone(true)));  return (arr.length === 1) ? arr[0] : __toNodeList(arr); }
Element.prototype.prependTo    = function(selector) { let arr = Array.from($qa(selector)).map((n) => n.prepend(this.clone(true))); return (arr.length === 1) ? arr[0] : __toNodeList(arr); }
Element.prototype.injectBefore = function(selector) { let arr = Array.from($qa(selector)).map((n) => n.before(this.clone(true)));  return (arr.length === 1) ? arr[0] : __toNodeList(arr); }
Element.prototype.injectAfter  = function(selector) { let arr = Array.from($qa(selector)).map((n) => n.after(this.clone(true)));   return (arr.length === 1) ? arr[0] : __toNodeList(arr); }

Element.prototype.replace     = function(element) { element.parentNode.replaceChild(this, element); return this; }
Element.prototype.replaceWith = function(element) { this.parentNode.replaceChild(element, this); return element; }

Element.prototype.xPixels = function(newPx) { if(newPx === undefined) return this.offsetWidth;  if(typeof newPx === 'number') this.style.width  = newPx+'px'; else if(typeof newPx === 'string') this.style.width  = newPx; return this; }
Element.prototype.yPixels = function(newPx) { if(newPx === undefined) return this.offsetHeight; if(typeof newPx === 'number') this.style.height = newPx+'px'; else if(typeof newPx === 'string') this.style.height = newPx; return this; }

Element.prototype.hasClass = function(thisClass) { return this.classList.contains(thisClass); }

Element.prototype.addClass    = function(newClass)  { this.classList.add(newClass);     return this; }
Element.prototype.removeClass = function(oldClass)  { this.classList.remove(oldClass);  return this; }
Element.prototype.toggleClass = function(thisClass) { this.classList.toggle(thisClass); return this; }

NodeList.prototype.addClass    = function(newClass)  { this.forEach((n) => n.addClass(newClass));     return this; }
NodeList.prototype.removeClass = function(oldClass)  { this.forEach((n) => n.removeClass(oldClass));  return this; }
NodeList.prototype.toggleClass = function(thisClass) { this.forEach((n) => n.toggleClass(thisClass)); return this; }

Element.prototype.val  = function(newValue)   { if(newValue === undefined) return this.value;                  this.value = newValue;                return this; }
Element.prototype.data = function(key, value) { if(value === undefined)    return this.dataset[key];           this.dataset[key] = value;            return this; }
Element.prototype.attr = function(key, value) { if(value === undefined)    return this.getAttribute(key);      this.setAttribute(key, value);        return this; }
Element.prototype.prop = function(key, value) { if(value === undefined)    return this[key];                   this[key] = value;                    return this; }
Element.prototype.css  = function(key, value) { if(value === undefined)    return getComputedStyle(this)[key]; this.style[__camelCase(key)] = value; return this; }

NodeList.prototype.val  = function(newValue)   { if(newValue === undefined) return; this.forEach((n) => n.val(newValue));    return this; }
NodeList.prototype.data = function(key, value) { if(value === undefined)    return; this.forEach((n) => n.dat(key, value));  return this; }
NodeList.prototype.attr = function(key, value) { if(value === undefined)    return; this.forEach((n) => n.attr(key, value)); return this; }
NodeList.prototype.prop = function(key, value) { if(value === undefined)    return; this.forEach((n) => n.prop(key, value)); return this; }
NodeList.prototype.css  = function(key, value) { if(value === undefined)    return; this.forEach((n) => n.css(key, value));  return this; }

HTMLDocument.prototype.add = function(tagName) { return document.createElement(tagName); }
HTMLDocument.prototype.create = function(tagName) { return document.createElement(tagName); }
Element.prototype.clone = function(deep = false) { let el = this.cloneNode(deep); return el; }

Element.prototype.empty = function() { this.innerHTML = ''; return this; }
// Element.remove() // -- ALREADY EXISTS

NodeList.prototype.empty  = function() { this.forEach((n) => n.empty());  return this; }
NodeList.prototype.remove = function() { this.forEach((n) => n.remove()); return; }

Element.prototype.position = function() { return { left: this.offsetLeft, top: this.offsetTop }; }
Element.prototype.offset   = function() { let rect = this.getBoundingClientRect(); return { top: rect.top + document.body.scrollTop, left: rect.left + document.body.scrollLeft } }

Element.prototype.hasFocus = function() { return (this === document.activeElement); }

EventTarget.prototype.trigger = function(eventType) { return this.dispatchEvent(new Event(eventType, { 'bubbles': true })); }
EventTarget.prototype.change  = function() { return this.dispatchEvent(new Event('change', { 'bubbles': true })); }
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
