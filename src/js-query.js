/**
* JS Query -- Vanilla JS shortcuts for recovering jQuery users.
* @version 1.3.0
* @author Ed Link III.
*/

const $q = (selector) => (selector === document || !selector) ? document : document.querySelector(selector);
const $qa = (selector) => document.querySelectorAll(selector);

HTMLElement.prototype.find = function(selector) { return this.querySelector(selector); }
HTMLElement.prototype.findAll = function(selector) { return this.querySelectorAll(selector); }

HTMLCollection.prototype.__proto__ = Array.prototype;

NodeList.prototype.__proto__ = Array.prototype; // _borrowed_ from bling.js - will make things easier than I was currently doing them!
NodeList.prototype.filterNodes = function(selector) { return __arrayToNodeList(this.filter((el) => el.matches(selector))); }
NodeList.prototype.getArray = function() { return [...this]; }
NodeList.prototype.getIndex = function(index) { return this[index]; }

HTMLElement.prototype.next = function() { return this.nextElementSibling; }
HTMLElement.prototype.prev = function() { return this.previousElementSibling; }
HTMLElement.prototype.siblings = function(selector, inclusive = false) { if (typeof selector === "boolean") { inclusive = selector; selector = null; } if(selector && selector !== null) return __arrayToNodeList(this.parentNode.childNodes.filter((child) => ((!inclusive && child !== this) || (inclusive)) && child.tagName && child.matches(selector))); return __arrayToNodeList(this.parentNode.childNodes.filter((child) => ((!inclusive && child !== this) || (inclusive)) && child.tagName)); }

HTMLElement.prototype.kids = function(selector) { if(selector) return __arrayToNodeList(this.childNodes.filter((child) => child.tagName && child.matches(selector))); return __arrayToNodeList(this.childNodes.filter((child) => child.tagName)); }
HTMLElement.prototype.firstKid = function() { return this.firstElementChild; }
HTMLElement.prototype.lastKid = function() { return this.lastElementChild; }
HTMLElement.prototype.parent = function() { return this.parentNode; }
HTMLElement.prototype.parents = function(selector) { let arr = [], tagName = '', el = this, p; while(tagName !== 'HTML') { p = el.parentNode; if(selector) { if(el.matches(selector)) { arr.push(el); }} else { arr.push(p); } tagName = p.tagName.toUpperCase(); el = p; } return __arrayToNodeList(arr); }
HTMLElement.prototype.ancestors = function(selector) { return this.parents(selector); }
HTMLElement.prototype.closest = function(selector) { if(selector === undefined) return this.parentNode; let tagName = '', el = this, p, end = false; while(tagName !== 'HTML' && !end) { p = el.parentNode; if(p.matches(selector)) { end = true; return p; } tagName = p.tagName.toUpperCase(); el = p; } }

HTMLElement.prototype.is = function(selector) { return this.matches(selector); }
HTMLElement.prototype.isSelf = function(element) { return (this === element); }
HTMLElement.prototype.isDescendant = function(element) { return (this !== element && element.contains(this)); }
HTMLElement.prototype.isDirectDescendant = function(element) { return (this.parentNode === element); }
HTMLElement.prototype.isChild = function(element) { return (this.parentNode === element); }
HTMLElement.prototype.isParent = function(element) { return (element.parentNode === this); }
HTMLElement.prototype.hasKids = function(selector) { if(selector) return !!(this.childNodes.filter((child) => child.tagName && child.matches(selector)).length); return !!(this.childNodes.filter((child) => child.tagName).length); }
HTMLElement.prototype.hasDescendant = function(selector) { if(selector) return !!this.querySelectorAll(selector).length; return !!(this.childNodes.filter((child) => child.tagName).length); }

HTMLElement.prototype.isVisible = function() { return !!( this.offsetWidth || this.offsetHeight || this.getClientRects().length); }
HTMLElement.prototype.isHidden = function() { return !this.isVisible(); }

HTMLElement.prototype.hide   = function() { this.style.display = 'none'; return this; }
HTMLElement.prototype.show   = function(showAs=null) { this.style.display = (showAs) ? showAs : ''; return this; }
HTMLElement.prototype.toggle = function() { if(this.style.display !== 'none') this.hide(); else this.show(); return this; }

NodeList.prototype.hide   = function() { this.forEach((n) => n.hide());   return this; }
NodeList.prototype.show   = function(showAs=null) { this.forEach((n) => n.show(showAs));   return this; }
NodeList.prototype.toggle = function() { this.forEach((n) => n.toggle()); return this; }

HTMLElement.prototype.text   = function(str) { if(str === undefined) return this.textContent; this.textContent = str; return this; }
HTMLElement.prototype.html   = function(str) { if(str === undefined) return this.innerHTML;   this.innerHTML = str;   return this; }
HTMLElement.prototype.markup = function(str) { if(str === undefined) return this.outerHTML;   this.outerHTML = str;   return this; }

NodeList.prototype.text   = function(str) { if(str === undefined) return; this.forEach((n) => n.text(str));   return this; }
NodeList.prototype.html   = function(str) { if(str === undefined) return; this.forEach((n) => n.html(str));   return this; }
NodeList.prototype.markup = function(str) { if(str === undefined) return; this.forEach((n) => n.markup(str)); return this; }

HTMLElement.prototype.before  = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'beforebegin', obj); return (this.prev())     ? this.prev()     : this; }
HTMLElement.prototype.after   = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'afterend', obj);    return (this.next())     ? this.next()     : this; }

HTMLElement.prototype.prepend = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'afterbegin', obj);  return (this.firstKid()) ? this.firstKid() : this; }
HTMLElement.prototype.append  = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'beforeend', obj);   return (this.lastKid())  ? this.lastKid()  : this; }

NodeList.prototype.before = function(obj)  { if(obj === undefined) return; this.forEach((n) => n.before(obj));  return this; }
NodeList.prototype.after = function(obj)   { if(obj === undefined) return; this.forEach((n) => n.after(obj));   return this; }

NodeList.prototype.prepend = function(obj) { if(obj === undefined) return; this.forEach((n) => n.prepend(obj)); return this; }
NodeList.prototype.append = function(obj)  { if(obj === undefined) return; this.forEach((n) => n.append(obj));  return this; }

HTMLElement.prototype.appendTo = function(selector)     { let arr = $qa(selector).map((n) => n.append(this.clone(true)));  return (arr.length === 1) ? arr[0] : __arrayToNodeList(arr); }
HTMLElement.prototype.prependTo = function(selector)    { let arr = $qa(selector).map((n) => n.prepend(this.clone(true))); return (arr.length === 1) ? arr[0] : __arrayToNodeList(arr); }
HTMLElement.prototype.injectBefore = function(selector) { let arr = $qa(selector).map((n) => n.before(this.clone(true)));  return (arr.length === 1) ? arr[0] : __arrayToNodeList(arr); }
HTMLElement.prototype.injectAfter = function(selector)  { let arr = $qa(selector).map((n) => n.after(this.clone(true)));   return (arr.length === 1) ? arr[0] : __arrayToNodeList(arr); }

HTMLElement.prototype.replace = function(element) { element.parentNode.replaceChild(this, element); return this; }
HTMLElement.prototype.replaceWith = function(element) { this.parentNode.replaceChild(element, this); return element; }

HTMLElement.prototype.xPixels = function(newPx) { if(newPx === undefined) return this.offsetWidth;  if(typeof newPx === 'number') this.style.width  = newPx+'px'; else if(typeof newPx === 'string') this.style.width  = newPx; return this; }
HTMLElement.prototype.yPixels = function(newPx) { if(newPx === undefined) return this.offsetHeight; if(typeof newPx === 'number') this.style.height = newPx+'px'; else if(typeof newPx === 'string') this.style.height = newPx; return this; }

HTMLElement.prototype.hasClass = function(thisClass) { return this.classList.contains(thisClass); }

HTMLElement.prototype.addClass = function(newClass)    { this.classList.add(newClass);     return this; }
HTMLElement.prototype.removeClass = function(oldClass) { this.classList.remove(oldClass);  return this; }
HTMLElement.prototype.toggleClass = function(thisClass, force=null) { if(force===null) this.classList.toggle(thisClass); else this.classList.toggle(thisClass, force); return this; }

NodeList.prototype.addClass    = function(newClass) { this.forEach((n) => n.addClass(newClass));    return this; }
NodeList.prototype.removeClass = function(oldClass) { this.forEach((n) => n.removeClass(oldClass)); return this; }
NodeList.prototype.toggleClass = function(thisClass, force=null) { this.forEach((n) => n.toggleClass(thisClass, force)); return this; }

HTMLElement.prototype.hasVal  = function()   { return (this.value); }

HTMLElement.prototype.val = function(newValue)    { if(newValue === undefined) return this.value;                  this.value = newValue;                return this; }
HTMLElement.prototype.data = function(key, value) { if(value === undefined)    return this.dataset[key];           this.dataset[key] = value;            return this; }
HTMLElement.prototype.attr = function(key, value) { if(value === undefined)    return this.getAttribute(key);      this.setAttribute(key, value);        return this; }
HTMLElement.prototype.prop = function(key, value) { if(value === undefined)    return this[key];                   this[key] = value;                    return this; }
HTMLElement.prototype.css = function(key, value)  { if(value === undefined)    return getComputedStyle(this)[key]; this.style[__camelCase(key)] = value; return this; }

NodeList.prototype.val  = function(newValue)   { if(newValue === undefined) return this.map((n) => n.val()) ;    this.forEach((n) => n.val(newValue));    return this; }
NodeList.prototype.data = function(key, value) { if(value === undefined)    return this.map((n) => n.data(key)); this.forEach((n) => n.dat(key, value));  return this; }
NodeList.prototype.attr = function(key, value) { if(value === undefined)    return this.map((n) => n.attr(key)); this.forEach((n) => n.attr(key, value)); return this; }
NodeList.prototype.prop = function(key, value) { if(value === undefined)    return this.map((n) => n.prop(key)); this.forEach((n) => n.prop(key, value)); return this; }
NodeList.prototype.css  = function(key, value) { if(value === undefined)    return this.map((n) => n.css(key));  this.forEach((n) => n.css(key, value));  return this; }

if(typeof HTMLDocument.add === 'undefined' && typeof HTMLDocument.prototype.add === 'undefined')
HTMLDocument.prototype.add = function(tagName) { return document.createElement(tagName); }
if(typeof HTMLDocument.create === 'undefined' && typeof HTMLDocument.prototype.create === 'undefined')
HTMLDocument.prototype.create = function(tagName) { return document.createElement(tagName); }
HTMLElement.prototype.clone = function(deep = false) { let el = this.cloneNode(deep); return el; }

HTMLElement.prototype.empty = function() { this.innerHTML = ''; return this; }
// Element.remove() // -- ALREADY EXISTS

NodeList.prototype.empty = function() { this.forEach((n) => n.empty());  return this; }
NodeList.prototype.remove = function() { this.forEach((n) => n.remove()); return; }

HTMLElement.prototype.position = function() { return { left: this.offsetLeft, top: this.offsetTop }; }
HTMLElement.prototype.offset = function() { let rect = this.getBoundingClientRect(); return { top: rect.top + document.body.scrollTop, left: rect.left + document.body.scrollLeft } }

HTMLElement.prototype.hasFocus = function() { return (this === document.activeElement); }

EventTarget.prototype.trigger = function(eventType) { return this.dispatchEvent(new Event(eventType, { 'bubbles': true })); }
EventTarget.prototype.change = function() { return this.dispatchEvent(new Event('change', { 'bubbles': true })); }
// HTMLElement.click() // -- ALREADY EXISTS
// HTMLElement.focus() // -- ALREADY EXISTS
// HTMLElement.blur() // -- ALREADY EXISTS

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

if(typeof HTMLDocument.ready === 'undefined' && typeof HTMLDocument.prototype.ready === 'undefined')
HTMLDocument.prototype.ready = function(func) { if (document.readyState != "loading") func(); else document.addEventListener("DOMContentLoaded", func); }

if(typeof HTMLDocument.on === 'undefined' && typeof HTMLDocument.prototype.on === 'undefined')
HTMLDocument.prototype.on = function(event, selector, func) {
    if(!this.__events) this.__events = {};
    if(!this.__events[event]) this.__events[event] = {};
    if(!this.__events[event][selector]) this.__events[event][selector] = [];
    this.__events[event][selector].push(func);
    this.addEventListener(event, __eventHandler, true);
};
if(typeof HTMLDocument.off === 'undefined' && typeof HTMLDocument.prototype.off === 'undefined')
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

HTMLElement.prototype.on = function(event, selector, func) {
    HTMLDocument.prototype.on.apply(this, [].slice.call(arguments));
};
HTMLElement.prototype.off = function(event, selector) {
    HTMLDocument.prototype.off.apply(this, [].slice.call(arguments));
};

const __isElement = (element) => (element instanceof Element || element instanceof Element || element instanceof HTMLDocument)
const __camelCase = (string) => string.toLowerCase().replace(/-./g, c => c. substring(1).toUpperCase())
const __insertAdjacent = (el, place, obj) => { if(__isElement(obj)) el.insertAdjacentElement(place, obj); else el.insertAdjacentHTML(place, obj); }
const __buildElementPath = (el) => { let p = el.parentNode; if(p === document) { return el.tagName; }  return __buildElementPath(p) + " > :nth-child(" + (p.children.indexOf(el)+1) + ")"; } // original code by: apsillers @ stackoverflow.com
const __arrayToNodeList = (arr) => { return document.querySelectorAll(arr.map((el) => __buildElementPath(el)).join(",")); } // original code by: apsillers @ stackoverflow.com
