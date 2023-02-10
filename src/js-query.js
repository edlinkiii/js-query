/**
* JS Query -- Vanilla JS shortcuts for recovering jQuery users.
* @version 1.2.3
* @author Ed Link III.
*/

// refactored a la bling.js
window.$q = document.querySelector.bind(document);
window.$qa = document.querySelectorAll.bind(document);
// const $q = (selector) => (selector === document || !selector) ? document : document.querySelector(selector);
// const $qa = (selector) => document.querySelectorAll(selector);

if(typeof Element.find === 'undefined' && typeof Element.prototype.find === 'undefined')
Element.prototype.find = function(selector) { return this.querySelector(selector); }
if(typeof Element.findAll === 'undefined' && typeof Element.prototype.findAll === 'undefined')
Element.prototype.findAll = function(selector) { return this.querySelectorAll(selector); }
if(typeof NodeList.filter === 'undefined' && typeof NodeList.prototype.filter === 'undefined')
NodeList.prototype.filter = function(selector) { return __toNodeList(Array.prototype.filter.call(this, (el) => el.matches(selector))); }

if(typeof Element.next === 'undefined' && typeof Element.prototype.next === 'undefined')
Element.prototype.next = function() { return this.nextElementSibling; }
if(typeof Element.prev === 'undefined' && typeof Element.prototype.prev === 'undefined')
Element.prototype.prev = function() { return this.previousElementSibling; }
if(typeof Element.siblings === 'undefined' && typeof Element.prototype.siblings === 'undefined')
Element.prototype.siblings = function(selector, inclusive = false) { if (typeof selector === "boolean") { inclusive = selector; selector = null; } console.log(selector, inclusive); if(selector && selector !== null) return __toNodeList(Array.prototype.filter.call(this.parentNode.children, (child) => ((!inclusive && child !== this) || (inclusive)) && child.tagName && child.matches(selector))); return __toNodeList(Array.prototype.filter.call(this.parentNode.children, (child) => ((!inclusive && child !== this) || (inclusive)) && child.tagName)); }
if(typeof Element.kids === 'undefined' && typeof Element.prototype.kids === 'undefined')
Element.prototype.kids = function(selector) { if(selector) return __toNodeList(Array.prototype.filter.call(this.childNodes, (child) => child.tagName && child.matches(selector))); return __toNodeList(Array.prototype.filter.call(this.childNodes, (child) => child.tagName)); }
if(typeof Element.firstKid === 'undefined' && typeof Element.prototype.firstKid === 'undefined')
Element.prototype.firstKid = function() { return Array.prototype.filter.call(this.childNodes, (child) => child.tagName)[0]; }
if(typeof Element.lastKid === 'undefined' && typeof Element.prototype.lastKid === 'undefined')
Element.prototype.lastKid = function() { let arr = Array.prototype.filter.call(this.childNodes, (child) => child.tagName); return arr[arr.length-1]; }
if(typeof Element.parent === 'undefined' && typeof Element.prototype.parent === 'undefined')
Element.prototype.parent = function() { return this.parentElement; }
if(typeof Element.parents === 'undefined' && typeof Element.prototype.parents === 'undefined')
Element.prototype.parents = function(selector) { let arr = [], tagName = '', el = this, p; while(tagName !== 'HTML') { p = el.parentNode; if(selector) { if(el.matches(selector)) { arr.push(el); }} else { arr.push(p); } tagName = p.tagName.toUpperCase(); el = p; } return __toNodeList(arr); }
if(typeof Element.ancestors === 'undefined' && typeof Element.prototype.ancestors === 'undefined')
Element.prototype.ancestors = function(selector) { return this.parents(selector); }
if(typeof Element.closest === 'undefined' && typeof Element.prototype.closest === 'undefined')
Element.prototype.closest = function(selector) { if(selector === undefined) return this.parentElement; let tagName = '', el = this, p, end = false; while(tagName !== 'HTML' && !end) { p = el.parentNode; if(p.matches(selector)) { end = true; return p; } tagName = p.tagName.toUpperCase(); el = p; } }

if(typeof Element.isSelf === 'undefined' && typeof Element.prototype.isSelf === 'undefined')
Element.prototype.isSelf = function(element) { return (this === element); }
if(typeof Element.isDescendant === 'undefined' && typeof Element.prototype.isDescendant === 'undefined')
Element.prototype.isDescendant = function(element) { return (this !== element && element.contains(this)); }
if(typeof Element.isDirectDescendant === 'undefined' && typeof Element.prototype.isDirectDescendant === 'undefined')
Element.prototype.isDirectDescendant = function(element) { return (this.parentElement === element); }
if(typeof Element.isChild === 'undefined' && typeof Element.prototype.isChild === 'undefined')
Element.prototype.isChild = function(element) { return (this.parentElement === element); }
if(typeof Element.isParent === 'undefined' && typeof Element.prototype.isParent === 'undefined')
Element.prototype.isParent = function(element) { return (element.parentElement === this); }
if(typeof Element.hasKids === 'undefined' && typeof Element.prototype.hasKids === 'undefined')
Element.prototype.hasKids = function(selector) { if(selector) return !!(Array.prototype.filter.call(this.childNodes, (child) => child.tagName && child.matches(selector)).length); return !!(Array.prototype.filter.call(this.childNodes, (child) => child.tagName).length); }
if(typeof Element.hasDescendant === 'undefined' && typeof Element.prototype.hasDescendant === 'undefined')
Element.prototype.hasDescendant = function(selector) { if(selector) return !!this.querySelectorAll(selector).length; return !!(Array.prototype.filter.call(this.childNodes, (child) => child.tagName).length); }

if(typeof Element.isVisible === 'undefined' && typeof Element.prototype.isVisible === 'undefined')
Element.prototype.isVisible = function() { return !!( this.offsetWidth || this.offsetHeight || this.getClientRects().length); }
if(typeof Element.isHidden === 'undefined' && typeof Element.prototype.isHidden === 'undefined')
Element.prototype.isHidden = function() { return !this.isVisible(); }

if(typeof Element.hide === 'undefined' && typeof Element.prototype.hide === 'undefined')
Element.prototype.hide   = function() { this.style.display = 'none'; return this; }
if(typeof Element.show === 'undefined' && typeof Element.prototype.show === 'undefined')
Element.prototype.show   = function(showAs=null) { this.style.display = (showAs) ? showAs : ''; return this; }
if(typeof Element.toggle === 'undefined' && typeof Element.prototype.toggle === 'undefined')
Element.prototype.toggle = function() { if(this.style.display !== 'none') this.hide(); else this.show(); return this; }

if(typeof NodeList.hide === 'undefined' && typeof NodeList.prototype.hide === 'undefined')
NodeList.prototype.hide   = function() { this.forEach((n) => n.hide());   return this; }
if(typeof NodeList.show === 'undefined' && typeof NodeList.prototype.show === 'undefined')
NodeList.prototype.show   = function(showAs=null) { this.forEach((n) => n.show(showAs));   return this; }
if(typeof NodeList.toggle === 'undefined' && typeof NodeList.prototype.toggle === 'undefined')
NodeList.prototype.toggle = function() { this.forEach((n) => n.toggle()); return this; }

if(typeof Element.text === 'undefined' && typeof Element.prototype.text === 'undefined')
Element.prototype.text   = function(str) { if(str === undefined) return this.textContent; this.textContent = str; return this; }
if(typeof Element.html === 'undefined' && typeof Element.prototype.html === 'undefined')
Element.prototype.html   = function(str) { if(str === undefined) return this.innerHTML;   this.innerHTML = str;   return this; }
if(typeof Element.markup === 'undefined' && typeof Element.prototype.markup === 'undefined')
Element.prototype.markup = function(str) { if(str === undefined) return this.outerHTML;   this.outerHTML = str;   return this; }

if(typeof NodeList.text === 'undefined' && typeof NodeList.prototype.text === 'undefined')
NodeList.prototype.text   = function(str) { if(str === undefined) return; this.forEach((n) => n.text(str));   return this; }
if(typeof NodeList.html === 'undefined' && typeof NodeList.prototype.html === 'undefined')
NodeList.prototype.html   = function(str) { if(str === undefined) return; this.forEach((n) => n.html(str));   return this; }
if(typeof NodeList.markup === 'undefined' && typeof NodeList.prototype.markup === 'undefined')
NodeList.prototype.markup = function(str) { if(str === undefined) return; this.forEach((n) => n.markup(str)); return this; }

if(typeof Element.before === 'undefined' && typeof Element.prototype.before === 'undefined')
Element.prototype.before  = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'beforebegin', obj); return (this.prev())     ? this.prev()     : this; }
if(typeof Element.prepend === 'undefined' && typeof Element.prototype.prepend === 'undefined')
Element.prototype.prepend = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'afterbegin', obj);  return (this.firstKid()) ? this.firstKid() : this; }
if(typeof Element.append === 'undefined' && typeof Element.prototype.append === 'undefined')
Element.prototype.append  = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'beforeend', obj);   return (this.lastKid())  ? this.lastKid()  : this; }
if(typeof Element.after === 'undefined' && typeof Element.prototype.after === 'undefined')
Element.prototype.after   = function(obj) { if(obj === undefined) return; __insertAdjacent(this, 'afterend', obj);    return (this.next())     ? this.next()     : this; }

if(typeof NodeList.before === 'undefined' && typeof NodeList.prototype.before === 'undefined')
NodeList.prototype.before = function(obj)  { if(obj === undefined) return; let arr = Array.from(this).map((n) => n.before(obj));  return __toNodeList(arr); }
if(typeof NodeList.prepend === 'undefined' && typeof NodeList.prototype.prepend === 'undefined')
NodeList.prototype.prepend = function(obj) { if(obj === undefined) return; let arr = Array.from(this).map((n) => n.prepend(obj)); return __toNodeList(arr); }
if(typeof NodeList.append === 'undefined' && typeof NodeList.prototype.append === 'undefined')
NodeList.prototype.append = function(obj)  { if(obj === undefined) return; let arr = Array.from(this).map((n) => n.append(obj));  return __toNodeList(arr); }
if(typeof NodeList.after === 'undefined' && typeof NodeList.prototype.after === 'undefined')
NodeList.prototype.after = function(obj)   { if(obj === undefined) return; let arr = Array.from(this).map((n) => n.after(obj));   return __toNodeList(arr); }

if(typeof Element.appendTo === 'undefined' && typeof Element.prototype.appendTo === 'undefined')
Element.prototype.appendTo = function(selector)     { let arr = Array.from($qa(selector)).map((n) => n.append(this.clone(true)));  return (arr.length === 1) ? arr[0] : __toNodeList(arr); }
if(typeof Element.prependTo === 'undefined' && typeof Element.prototype.prependTo === 'undefined')
Element.prototype.prependTo = function(selector)    { let arr = Array.from($qa(selector)).map((n) => n.prepend(this.clone(true))); return (arr.length === 1) ? arr[0] : __toNodeList(arr); }
if(typeof Element.injectBefore === 'undefined' && typeof Element.prototype.injectBefore === 'undefined')
Element.prototype.injectBefore = function(selector) { let arr = Array.from($qa(selector)).map((n) => n.before(this.clone(true)));  return (arr.length === 1) ? arr[0] : __toNodeList(arr); }
if(typeof Element.injectAfter === 'undefined' && typeof Element.prototype.injectAfter === 'undefined')
Element.prototype.injectAfter = function(selector)  { let arr = Array.from($qa(selector)).map((n) => n.after(this.clone(true)));   return (arr.length === 1) ? arr[0] : __toNodeList(arr); }

if(typeof Element.replace === 'undefined' && typeof Element.prototype.replace === 'undefined')
Element.prototype.replace = function(element) { element.parentNode.replaceChild(this, element); return this; }
if(typeof Element.replaceWith === 'undefined' && typeof Element.prototype.replaceWith === 'undefined')
Element.prototype.replaceWith = function(element) { this.parentNode.replaceChild(element, this); return element; }

if(typeof Element.xPixels === 'undefined' && typeof Element.prototype.xPixels === 'undefined')
Element.prototype.xPixels = function(newPx) { if(newPx === undefined) return this.offsetWidth;  if(typeof newPx === 'number') this.style.width  = newPx+'px'; else if(typeof newPx === 'string') this.style.width  = newPx; return this; }
if(typeof Element.yPixels === 'undefined' && typeof Element.prototype.yPixels === 'undefined')
Element.prototype.yPixels = function(newPx) { if(newPx === undefined) return this.offsetHeight; if(typeof newPx === 'number') this.style.height = newPx+'px'; else if(typeof newPx === 'string') this.style.height = newPx; return this; }

if(typeof Element.hasClass === 'undefined' && typeof Element.prototype.hasClass === 'undefined')
Element.prototype.hasClass = function(thisClass) { return this.classList.contains(thisClass); }

if(typeof Element.addClass === 'undefined' && typeof Element.prototype.addClass === 'undefined')
Element.prototype.addClass = function(newClass)    { this.classList.add(newClass);     return this; }
if(typeof Element.removeClass === 'undefined' && typeof Element.prototype.removeClass === 'undefined')
Element.prototype.removeClass = function(oldClass) { this.classList.remove(oldClass);  return this; }
if(typeof Element.toggleClass === 'undefined' && typeof Element.prototype.toggleClass === 'undefined')
Element.prototype.toggleClass = function(thisClass, force=null) { if(force===null) this.classList.toggle(thisClass); else this.classList.toggle(thisClass, force); return this; }

if(typeof NodeList.addClass === 'undefined' && typeof NodeList.prototype.addClass === 'undefined')
NodeList.prototype.addClass    = function(newClass) { this.forEach((n) => n.addClass(newClass));    return this; }
if(typeof NodeList.removeClass === 'undefined' && typeof NodeList.prototype.removeClass === 'undefined')
NodeList.prototype.removeClass = function(oldClass) { this.forEach((n) => n.removeClass(oldClass)); return this; }
if(typeof NodeList.toggleClass === 'undefined' && typeof NodeList.prototype.toggleClass === 'undefined')
NodeList.prototype.toggleClass = function(thisClass, force=null) { this.forEach((n) => n.toggleClass(thisClass, force)); return this; }

if(typeof Element.hasVal === 'undefined' && typeof Element.prototype.hasVal === 'undefined')
Element.prototype.hasVal  = function()   { return (this.value); }

if(typeof Element.val === 'undefined' && typeof Element.prototype.val === 'undefined')
Element.prototype.val = function(newValue)    { if(newValue === undefined) return this.value;                  this.value = newValue;                return this; }
if(typeof Element.data === 'undefined' && typeof Element.prototype.data === 'undefined')
Element.prototype.data = function(key, value) { if(value === undefined)    return this.dataset[key];           this.dataset[key] = value;            return this; }
if(typeof Element.attr === 'undefined' && typeof Element.prototype.attr === 'undefined')
Element.prototype.attr = function(key, value) { if(value === undefined)    return this.getAttribute(key);      this.setAttribute(key, value);        return this; }
if(typeof Element.prop === 'undefined' && typeof Element.prototype.prop === 'undefined')
Element.prototype.prop = function(key, value) { if(value === undefined)    return this[key];                   this[key] = value;                    return this; }
if(typeof Element.css === 'undefined' && typeof Element.prototype.css === 'undefined')
Element.prototype.css = function(key, value)  { if(value === undefined)    return getComputedStyle(this)[key]; this.style[__camelCase(key)] = value; return this; }

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
if(typeof Element.clone === 'undefined' && typeof Element.prototype.clone === 'undefined')
Element.prototype.clone = function(deep = false) { let el = this.cloneNode(deep); return el; }

if(typeof Element.empty === 'undefined' && typeof Element.prototype.empty === 'undefined')
Element.prototype.empty = function() { this.innerHTML = ''; return this; }
// Element.remove() // -- ALREADY EXISTS

if(typeof NodeList.empty === 'undefined' && typeof NodeList.prototype.empty === 'undefined')
NodeList.prototype.empty = function() { this.forEach((n) => n.empty());  return this; }
if(typeof NodeList.remove === 'undefined' && typeof NodeList.prototype.remove === 'undefined')
NodeList.prototype.remove = function() { this.forEach((n) => n.remove()); return; }

if(typeof Element.position === 'undefined' && typeof Element.prototype.position === 'undefined')
Element.prototype.position = function() { return { left: this.offsetLeft, top: this.offsetTop }; }
if(typeof Element.offset === 'undefined' && typeof Element.prototype.offset === 'undefined')
Element.prototype.offset = function() { let rect = this.getBoundingClientRect(); return { top: rect.top + document.body.scrollTop, left: rect.left + document.body.scrollLeft } }

if(typeof Element.hasFocus === 'undefined' && typeof Element.prototype.hasFocus === 'undefined')
Element.prototype.hasFocus = function() { return (this === document.activeElement); }

if(typeof EventTarget.trigger === 'undefined' && typeof EventTarget.prototype.trigger === 'undefined')
EventTarget.prototype.trigger = function(eventType) { return this.dispatchEvent(new Event(eventType, { 'bubbles': true })); }
if(typeof EventTarget.change === 'undefined' && typeof EventTarget.prototype.change === 'undefined')
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

if(typeof Element.on === 'undefined' && typeof Element.prototype.on === 'undefined')
Element.prototype.on = function(event, selector, func) {
    HTMLDocument.prototype.on.apply(this, [].slice.call(arguments));
};
if(typeof Element.off === 'undefined' && typeof Element.prototype.off === 'undefined')
Element.prototype.off = function(event, selector) {
    HTMLDocument.prototype.off.apply(this, [].slice.call(arguments));
};

// const ajax = (options) => {} // removed

const __isElement = (element) => (element instanceof Element || element instanceof Element || element instanceof HTMLDocument)
const __camelCase = (string) => string.toLowerCase().replace(/-./g, c => c. substring(1).toUpperCase())
const __insertAdjacent = (el, place, obj) => { if(__isElement(obj)) el.insertAdjacentElement(place, obj); else el.insertAdjacentHTML(place, obj); }
const __buildElementPath = (el) => { let p = el.parentNode; if(p === document) { return el.tagName; }  return __buildElementPath(p) + " > :nth-child(" + (Array.prototype.indexOf.call(p.children, el)+1) + ")"; } // original code by: apsillers @ stackoverflow.com
const __toNodeList = (arr) => { return document.querySelectorAll(arr.map((el) => __buildElementPath(el)).join(",")); } // original code by: apsillers @ stackoverflow.com
const __FPS = 1000 / 60;
const __animate = (func) => { if(func()) { setTimeout(() => { __animate(func); }, __FPS); } }
