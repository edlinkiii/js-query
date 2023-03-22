/**
* JS Query -- Vanilla JS shortcuts for recovering jQuery users.
* @version 1.2.4
* @author Ed Link III.
*/

// refactored a la bling.js
window.$q = document.querySelector.bind(document);
window.$qa = document.querySelectorAll.bind(document);

// _borrowed_ from bling.js - will make things easier than I was currently doing them!
NodeList.prototype.__proto__ = Array.prototype;

if(typeof HTMLElement.find === 'undefined' && typeof HTMLElement.prototype.find === 'undefined')
Node.prototype.find = function(selector) { return this.querySelector(selector); }
if(typeof HTMLElement.findAll === 'undefined' && typeof HTMLElement.prototype.findAll === 'undefined')
Node.prototype.findAll = function(selector) { return this.querySelectorAll(selector); }
if(typeof NodeList.filter === 'undefined' && typeof NodeList.prototype.filter === 'undefined')
NodeList.prototype.filter = function(selector) { return this.filter((el) => el.matches(selector)); }

if(typeof HTMLElement.next === 'undefined' && typeof HTMLElement.prototype.next === 'undefined')
Node.prototype.next = function() { return this.nextElementSibling; }
if(typeof HTMLElement.prev === 'undefined' && typeof HTMLElement.prototype.prev === 'undefined')
Node.prototype.prev = function() { return this.previousElementSibling; }
if(typeof HTMLElement.siblings === 'undefined' && typeof HTMLElement.prototype.siblings === 'undefined')
Node.prototype.siblings = function(selector, inclusive = false) { if (typeof selector === "boolean") { inclusive = selector; selector = null; } if(selector && selector !== null) return this.parentNode.children.filter((child) => ((!inclusive && child !== this) || (inclusive)) && child.tagName && child.matches(selector)); return this.parentNode.children.filter((child) => ((!inclusive && child !== this) || (inclusive)) && child.tagName); }
if(typeof HTMLElement.kids === 'undefined' && typeof HTMLElement.prototype.kids === 'undefined')
Node.prototype.kids = function(selector) { if(selector) return this.childNodes.filter((child) => child.tagName && child.matches(selector)); return this.childNodes.filter((child) => child.tagName); }
if(typeof HTMLElement.firstKid === 'undefined' && typeof HTMLElement.prototype.firstKid === 'undefined')
Node.prototype.firstKid = function() { return Array.prototype.filter.call(this.childNodes, (child) => child.tagName)[0]; }
if(typeof HTMLElement.lastKid === 'undefined' && typeof HTMLElement.prototype.lastKid === 'undefined')
Node.prototype.lastKid = function() { let arr = Array.prototype.filter.call(this.childNodes, (child) => child.tagName); return arr[arr.length-1]; }
if(typeof HTMLElement.parent === 'undefined' && typeof HTMLElement.prototype.parent === 'undefined')
Node.prototype.parent = function() { return this.parentElement; }
if(typeof HTMLElement.parents === 'undefined' && typeof HTMLElement.prototype.parents === 'undefined')
Node.prototype.parents = function(selector) { let arr = [], tagName = '', el = this, p; while(tagName !== 'HTML') { p = el.parentNode; if(selector) { if(el.matches(selector)) { arr.push(el); }} else { arr.push(p); } tagName = p.tagName.toUpperCase(); el = p; } return __arrayToNodeList(arr); }
if(typeof HTMLElement.ancestors === 'undefined' && typeof HTMLElement.prototype.ancestors === 'undefined')
Node.prototype.ancestors = function(selector) { return this.parents(selector); }
if(typeof HTMLElement.closest === 'undefined' && typeof HTMLElement.prototype.closest === 'undefined')
Node.prototype.closest = function(selector) { if(selector === undefined) return this.parentElement; let tagName = '', el = this, p, end = false; while(tagName !== 'HTML' && !end) { p = el.parentNode; if(p.matches(selector)) { end = true; return p; } tagName = p.tagName.toUpperCase(); el = p; } }

if(typeof HTMLElement.is === 'undefined' && typeof HTMLElement.prototype.is === 'undefined')
Node.prototype.is = function(selector) { return this.matches(selector); }
if(typeof HTMLElement.isSelf === 'undefined' && typeof HTMLElement.prototype.isSelf === 'undefined')
Node.prototype.isSelf = function(element) { return (this === element); }
if(typeof HTMLElement.isDescendant === 'undefined' && typeof HTMLElement.prototype.isDescendant === 'undefined')
Node.prototype.isDescendant = function(element) { return (this !== element && element.contains(this)); }
if(typeof HTMLElement.isDirectDescendant === 'undefined' && typeof HTMLElement.prototype.isDirectDescendant === 'undefined')
Node.prototype.isDirectDescendant = function(element) { return (this.parentElement === element); }
if(typeof HTMLElement.isChild === 'undefined' && typeof HTMLElement.prototype.isChild === 'undefined')
Node.prototype.isChild = function(element) { return (this.parentElement === element); }
if(typeof HTMLElement.isParent === 'undefined' && typeof HTMLElement.prototype.isParent === 'undefined')
Node.prototype.isParent = function(element) { return (element.parentElement === this); }
if(typeof HTMLElement.hasKids === 'undefined' && typeof HTMLElement.prototype.hasKids === 'undefined')
Node.prototype.hasKids = function(selector) { if(selector) return !!(Array.prototype.filter.call(this.childNodes, (child) => child.tagName && child.matches(selector)).length); return !!(Array.prototype.filter.call(this.childNodes, (child) => child.tagName).length); }
if(typeof HTMLElement.hasDescendant === 'undefined' && typeof HTMLElement.prototype.hasDescendant === 'undefined')
Node.prototype.hasDescendant = function(selector) { if(selector) return !!this.querySelectorAll(selector).length; return !!(Array.prototype.filter.call(this.childNodes, (child) => child.tagName).length); }

if(typeof HTMLElement.isVisible === 'undefined' && typeof HTMLElement.prototype.isVisible === 'undefined')
Node.prototype.isVisible = function() { return !!( this.offsetWidth || this.offsetHeight || this.getClientRects().length); }
if(typeof HTMLElement.isHidden === 'undefined' && typeof HTMLElement.prototype.isHidden === 'undefined')
Node.prototype.isHidden = function() { return !this.isVisible(); }

if(typeof HTMLElement.hide === 'undefined' && typeof HTMLElement.prototype.hide === 'undefined')
Node.prototype.hide   = function() { this.style.display = 'none'; return this; }
if(typeof HTMLElement.show === 'undefined' && typeof HTMLElement.prototype.show === 'undefined')
Node.prototype.show   = function(showAs=null) { this.style.display = (showAs) ? showAs : ''; return this; }
if(typeof HTMLElement.toggle === 'undefined' && typeof HTMLElement.prototype.toggle === 'undefined')
Node.prototype.toggle = function() { if(this.style.display !== 'none') this.hide(); else this.show(); return this; }

if(typeof NodeList.hide === 'undefined' && typeof NodeList.prototype.hide === 'undefined')
NodeList.prototype.hide   = function() { this.forEach((n) => n.hide());   return this; }
if(typeof NodeList.show === 'undefined' && typeof NodeList.prototype.show === 'undefined')
NodeList.prototype.show   = function(showAs=null) { this.forEach((n) => n.show(showAs));   return this; }
if(typeof NodeList.toggle === 'undefined' && typeof NodeList.prototype.toggle === 'undefined')
NodeList.prototype.toggle = function() { this.forEach((n) => n.toggle()); return this; }

if(typeof HTMLElement.text === 'undefined' && typeof HTMLElement.prototype.text === 'undefined')
Node.prototype.text   = function(str) { if(str === undefined) return this.textContent; this.textContent = str; return this; }
if(typeof HTMLElement.html === 'undefined' && typeof HTMLElement.prototype.html === 'undefined')
Node.prototype.html   = function(str) { if(str === undefined) return this.innerHTML;   this.innerHTML = str;   return this; }
if(typeof HTMLElement.markup === 'undefined' && typeof HTMLElement.prototype.markup === 'undefined')
Node.prototype.markup = function(str) { if(str === undefined) return this.outerHTML;   this.outerHTML = str;   return this; }

if(typeof NodeList.text === 'undefined' && typeof NodeList.prototype.text === 'undefined')
NodeList.prototype.text   = function(str) { if(str === undefined) return; this.forEach((n) => n.text(str));   return this; }
if(typeof NodeList.html === 'undefined' && typeof NodeList.prototype.html === 'undefined')
NodeList.prototype.html   = function(str) { if(str === undefined) return; this.forEach((n) => n.html(str));   return this; }
if(typeof NodeList.markup === 'undefined' && typeof NodeList.prototype.markup === 'undefined')
NodeList.prototype.markup = function(str) { if(str === undefined) return; this.forEach((n) => n.markup(str)); return this; }

if(typeof HTMLElement.before === 'undefined' && typeof HTMLElement.prototype.before === 'undefined')
Node.prototype.before  = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'beforebegin', obj); return (this.prev())     ? this.prev()     : this; }
if(typeof HTMLElement.prepend === 'undefined' && typeof HTMLElement.prototype.prepend === 'undefined')
Node.prototype.prepend = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'afterbegin', obj);  return (this.firstKid()) ? this.firstKid() : this; }
if(typeof HTMLElement.append === 'undefined' && typeof HTMLElement.prototype.append === 'undefined')
Node.prototype.append  = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'beforeend', obj);   return (this.lastKid())  ? this.lastKid()  : this; }
if(typeof HTMLElement.after === 'undefined' && typeof HTMLElement.prototype.after === 'undefined')
Node.prototype.after   = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'afterend', obj);    return (this.next())     ? this.next()     : this; }

if(typeof NodeList.before === 'undefined' && typeof NodeList.prototype.before === 'undefined')
NodeList.prototype.before = function(obj)  { if(obj === undefined) return; this.forEach((n) => n.before(obj));  return this; }
if(typeof NodeList.prepend === 'undefined' && typeof NodeList.prototype.prepend === 'undefined')
NodeList.prototype.prepend = function(obj) { if(obj === undefined) return; this.forEach((n) => n.prepend(obj)); return this; }
if(typeof NodeList.append === 'undefined' && typeof NodeList.prototype.append === 'undefined')
NodeList.prototype.append = function(obj)  { if(obj === undefined) return; this.forEach((n) => n.append(obj));  return this; }
if(typeof NodeList.after === 'undefined' && typeof NodeList.prototype.after === 'undefined')
NodeList.prototype.after = function(obj)   { if(obj === undefined) return; this.forEach((n) => n.after(obj));   return this; }

if(typeof HTMLElement.appendTo === 'undefined' && typeof HTMLElement.prototype.appendTo === 'undefined')
Node.prototype.appendTo = function(selector)     { let arr = $qa(selector).map((n) => n.append(this.clone(true)));  return (arr.length === 1) ? arr[0] : __arrayToNodeList(arr); }
if(typeof HTMLElement.prependTo === 'undefined' && typeof HTMLElement.prototype.prependTo === 'undefined')
Node.prototype.prependTo = function(selector)    { let arr = $qa(selector).map((n) => n.prepend(this.clone(true))); return (arr.length === 1) ? arr[0] : __arrayToNodeList(arr); }
if(typeof HTMLElement.injectBefore === 'undefined' && typeof HTMLElement.prototype.injectBefore === 'undefined')
Node.prototype.injectBefore = function(selector) { let arr = $qa(selector).map((n) => n.before(this.clone(true)));  return (arr.length === 1) ? arr[0] : __arrayToNodeList(arr); }
if(typeof HTMLElement.injectAfter === 'undefined' && typeof HTMLElement.prototype.injectAfter === 'undefined')
Node.prototype.injectAfter = function(selector)  { let arr = $qa(selector).map((n) => n.after(this.clone(true)));   return (arr.length === 1) ? arr[0] : __arrayToNodeList(arr); }

if(typeof HTMLElement.replace === 'undefined' && typeof HTMLElement.prototype.replace === 'undefined')
Node.prototype.replace = function(element) { element.parentNode.replaceChild(this, element); return this; }
if(typeof HTMLElement.replaceWith === 'undefined' && typeof HTMLElement.prototype.replaceWith === 'undefined')
Node.prototype.replaceWith = function(element) { this.parentNode.replaceChild(element, this); return element; }

if(typeof HTMLElement.xPixels === 'undefined' && typeof HTMLElement.prototype.xPixels === 'undefined')
Node.prototype.xPixels = function(newPx) { if(newPx === undefined) return this.offsetWidth;  if(typeof newPx === 'number') this.style.width  = newPx+'px'; else if(typeof newPx === 'string') this.style.width  = newPx; return this; }
if(typeof HTMLElement.yPixels === 'undefined' && typeof HTMLElement.prototype.yPixels === 'undefined')
Node.prototype.yPixels = function(newPx) { if(newPx === undefined) return this.offsetHeight; if(typeof newPx === 'number') this.style.height = newPx+'px'; else if(typeof newPx === 'string') this.style.height = newPx; return this; }

if(typeof HTMLElement.hasClass === 'undefined' && typeof HTMLElement.prototype.hasClass === 'undefined')
Node.prototype.hasClass = function(thisClass) { return this.classList.contains(thisClass); }

if(typeof HTMLElement.addClass === 'undefined' && typeof HTMLElement.prototype.addClass === 'undefined')
Node.prototype.addClass = function(newClass)    { this.classList.add(newClass);     return this; }
if(typeof HTMLElement.removeClass === 'undefined' && typeof HTMLElement.prototype.removeClass === 'undefined')
Node.prototype.removeClass = function(oldClass) { this.classList.remove(oldClass);  return this; }
if(typeof HTMLElement.toggleClass === 'undefined' && typeof HTMLElement.prototype.toggleClass === 'undefined')
Node.prototype.toggleClass = function(thisClass, force=null) { if(force===null) this.classList.toggle(thisClass); else this.classList.toggle(thisClass, force); return this; }

if(typeof NodeList.addClass === 'undefined' && typeof NodeList.prototype.addClass === 'undefined')
NodeList.prototype.addClass    = function(newClass) { this.forEach((n) => n.addClass(newClass));    return this; }
if(typeof NodeList.removeClass === 'undefined' && typeof NodeList.prototype.removeClass === 'undefined')
NodeList.prototype.removeClass = function(oldClass) { this.forEach((n) => n.removeClass(oldClass)); return this; }
if(typeof NodeList.toggleClass === 'undefined' && typeof NodeList.prototype.toggleClass === 'undefined')
NodeList.prototype.toggleClass = function(thisClass, force=null) { this.forEach((n) => n.toggleClass(thisClass, force)); return this; }

if(typeof HTMLElement.hasVal === 'undefined' && typeof HTMLElement.prototype.hasVal === 'undefined')
Node.prototype.hasVal  = function()   { return (this.value); }

if(typeof HTMLElement.val === 'undefined' && typeof HTMLElement.prototype.val === 'undefined')
Node.prototype.val = function(newValue)    { if(newValue === undefined) return this.value;                  this.value = newValue;                return this; }
if(typeof HTMLElement.data === 'undefined' && typeof HTMLElement.prototype.data === 'undefined')
Node.prototype.data = function(key, value) { if(value === undefined)    return this.dataset[key];           this.dataset[key] = value;            return this; }
if(typeof HTMLElement.attr === 'undefined' && typeof HTMLElement.prototype.attr === 'undefined')
Node.prototype.attr = function(key, value) { if(value === undefined)    return this.getAttribute(key);      this.setAttribute(key, value);        return this; }
if(typeof HTMLElement.prop === 'undefined' && typeof HTMLElement.prototype.prop === 'undefined')
Node.prototype.prop = function(key, value) { if(value === undefined)    return this[key];                   this[key] = value;                    return this; }
if(typeof HTMLElement.css === 'undefined' && typeof HTMLElement.prototype.css === 'undefined')
Node.prototype.css = function(key, value)  { if(value === undefined)    return getComputedStyle(this)[key]; this.style[__camelCase(key)] = value; return this; }

if(typeof NodeList.val === 'undefined' && typeof NodeList.prototype.val === 'undefined')
NodeList.prototype.val  = function(newValue)   { if(newValue === undefined) return; this.forEach((n) => n.val(newValue));    return this; }
if(typeof NodeList.data === 'undefined' && typeof NodeList.prototype.data === 'undefined')
NodeList.prototype.data = function(key, value) { if(value === undefined)    return; this.forEach((n) => n.dat(key, value));  return this; }
if(typeof NodeList.attr === 'undefined' && typeof NodeList.prototype.attr === 'undefined')
NodeList.prototype.attr = function(key, value) { if(value === undefined)    return; this.forEach((n) => n.attr(key, value)); return this; }
if(typeof NodeList.prop === 'undefined' && typeof NodeList.prototype.prop === 'undefined')
NodeList.prototype.prop = function(key, value) { if(value === undefined)    return; this.forEach((n) => n.prop(key, value)); return this; }
if(typeof NodeList.css === 'undefined' && typeof NodeList.prototype.css === 'undefined')
NodeList.prototype.css  = function(key, value) { if(value === undefined)    return; this.forEach((n) => n.css(key, value));  return this; }

if(typeof HTMLDocument.add === 'undefined' && typeof HTMLDocument.prototype.add === 'undefined')
HTMLDocument.prototype.add = function(tagName) { return document.createElement(tagName); }
if(typeof HTMLDocument.create === 'undefined' && typeof HTMLDocument.prototype.create === 'undefined')
HTMLDocument.prototype.create = function(tagName) { return document.createElement(tagName); }
if(typeof HTMLElement.clone === 'undefined' && typeof HTMLElement.prototype.clone === 'undefined')
Node.prototype.clone = function(deep = false) { let el = this.cloneNode(deep); return el; }

if(typeof HTMLElement.empty === 'undefined' && typeof HTMLElement.prototype.empty === 'undefined')
Node.prototype.empty = function() { this.innerHTML = ''; return this; }
// Element.remove() // -- ALREADY EXISTS

if(typeof NodeList.empty === 'undefined' && typeof NodeList.prototype.empty === 'undefined')
NodeList.prototype.empty = function() { this.forEach((n) => n.empty());  return this; }
if(typeof NodeList.remove === 'undefined' && typeof NodeList.prototype.remove === 'undefined')
NodeList.prototype.remove = function() { this.forEach((n) => n.remove()); return; }

if(typeof HTMLElement.position === 'undefined' && typeof HTMLElement.prototype.position === 'undefined')
Node.prototype.position = function() { return { left: this.offsetLeft, top: this.offsetTop }; }
if(typeof HTMLElement.offset === 'undefined' && typeof HTMLElement.prototype.offset === 'undefined')
Node.prototype.offset = function() { let rect = this.getBoundingClientRect(); return { top: rect.top + document.body.scrollTop, left: rect.left + document.body.scrollLeft } }

if(typeof HTMLElement.hasFocus === 'undefined' && typeof HTMLElement.prototype.hasFocus === 'undefined')
Node.prototype.hasFocus = function() { return (this === document.activeElement); }

if(typeof HTMLElement.trigger === 'undefined' && typeof HTMLElement.prototype.trigger === 'undefined')
Node.prototype.trigger = function(eventType) { return this.dispatchEvent(new Event(eventType, { 'bubbles': true })); }
if(typeof HTMLElement.change === 'undefined' && typeof HTMLElement.prototype.change === 'undefined')
Node.prototype.change = function() { return this.dispatchEvent(new Event('change', { 'bubbles': true })); }
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

if(typeof HTMLElement.on === 'undefined' && typeof HTMLElement.prototype.on === 'undefined')
Node.prototype.on = function(event, selector, func) {
    HTMLDocument.prototype.on.apply(this, [].slice.call(arguments));
};
if(typeof HTMLElement.off === 'undefined' && typeof HTMLElement.prototype.off === 'undefined')
Node.prototype.off = function(event, selector) {
    HTMLDocument.prototype.off.apply(this, [].slice.call(arguments));
};

const __isElement = (element) => (element instanceof Element || element instanceof Element || element instanceof HTMLDocument)
const __camelCase = (string) => string.toLowerCase().replace(/-./g, c => c. substring(1).toUpperCase())
const __insertAdjacent = (el, place, obj) => { if(__isElement(obj)) el.insertAdjacentElement(place, obj); else el.insertAdjacentHTML(place, obj); }
const __buildElementPath = (el) => { let p = el.parentNode; if(p === document) { return el.tagName; }  return __buildElementPath(p) + " > :nth-child(" + (Array.prototype.indexOf.call(p.children, el)+1) + ")"; } // original code by: apsillers @ stackoverflow.com
const __arrayToNodeList = (arr) => { return document.querySelectorAll(arr.map((el) => __buildElementPath(el)).join(",")); } // original code by: apsillers @ stackoverflow.com
