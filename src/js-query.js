/**
 * js-query -- Vanilla JS shortcuts for recovering jQuery users.
 * 
 * This project in no way is meant to fully replace everything jQuery can do.
 * At most, it offers a jQuery feel (shorthand) to Vanilla JavaScript.
 * 
 * @author Ed Link III.
 */

/**
 * Shortcut for document.querySelector().
 * 
 * Adds a jQuery feel to Vanilla JS.
 * Used for a single element (eg, '#id').
 * 
 * @param {string}  selector    `CSS` selector for element.
 * @return {element} Returns an element.
 */
const $q = (selector) => (selector === document) ? document : document.querySelector(selector);

/**
 * Shortcut for document.querySelector().
 * 
 * Adds a jQuery feel to Vanilla JS.
 * Used for multiple elements (eg, '.class').
 * 
 * @param {string}  selector    `CSS` selector for element.
 * @return {elementList} Returns an elementList.
 */
const $qa = (selector) => document.querySelectorAll(selector);

HTMLElement.prototype.find = function(selector) { return this.querySelector(selector); }
HTMLElement.prototype.findAll = function(selector) { return this.querySelectorAll(selector); }

HTMLElement.prototype.parent = function() { return this.parentElement; }
HTMLElement.prototype.parents = function(selector) { let arr = [], tagName = '', el = this, p; while(tagName !== 'HTML') { p = el.parentNode; if(selector) { if(el.matches(selector)) { arr.push(el); }} else { arr.push(p); } tagName = p.tagName.toUpperCase(); el = p; } return arr; }
HTMLElement.prototype.closest = function(selector) { if(selector === undefined) return this.parentElement; let tagName = '', el = this, p, end = false; while(tagName !== 'HTML' && !end) { p = el.parentNode; if(p.matches(selector)) { end = true; return p; } tagName = p.tagName.toUpperCase(); el = p; } }
HTMLElement.prototype.kids = function(selector) { if(selector) return Array.prototype.filter.call(this.childNodes, (child) => child.tagName && child.matches(selector)); return Array.prototype.filter.call(this.childNodes, (child) => child.tagName); }
HTMLElement.prototype.siblings = function(selector) { if(selector) return Array.prototype.filter.call(this.parentNode.children, (child) => child !== this && child.tagName && child.matches(selector)); return Array.prototype.filter.call(this.parentNode.children, (child) => child !== this && child.tagName); }

HTMLElement.prototype.next = function() { return this.nextElementSibling; }
HTMLElement.prototype.prev = function() { return this.previousElementSibling; }

HTMLElement.prototype.hide = function() { this.style.display = 'none'; return this; }
HTMLElement.prototype.show = function() { this.style.display = 'initial'; return this; }
HTMLElement.prototype.toggle = function() { this.style.display = (this.style.display !== 'none') ? 'none' : '' ; return this; }

NodeList.prototype.hide = function() { this.forEach((n) => n.style.display = 'none'); return this; }
NodeList.prototype.show = function() { this.forEach((n) => n.style.display = 'initial'); return this; }
NodeList.prototype.toggle = function() { this.forEach((n) => n.style.display = (n.style.display !== 'none') ? 'none' : '' ); return this; }

HTMLElement.prototype.text   = function(textString) { if(textString !== undefined) { this.innerText = textString; return this; } else return this.innerText; }
HTMLElement.prototype.html   = function(htmlString) { if(htmlString !== undefined) { this.innerHTML = htmlString; return this; } else return this.innerHTML; }
HTMLElement.prototype.markup = function(htmlString) { if(htmlString !== undefined) { this.outerHTML = htmlString; return this; } else return this.outerHTML; }

NodeList.prototype.text   = function(textString) { if(textString === undefined) return; this.forEach((n) => n.innerText = textString); return this; }
NodeList.prototype.html   = function(htmlString) { if(htmlString === undefined) return; this.forEach((n) => n.innerHTML = htmlString); return this; }
NodeList.prototype.markup = function(htmlString) { if(htmlString === undefined) return; this.forEach((n) => n.outerHTML = htmlString); return this; }

HTMLElement.prototype.before  = function(obj) { if(obj === undefined) return; let place = 'beforebegin'; __insertAdjacent(this, place, obj); return this; }
HTMLElement.prototype.prepend = function(obj) { if(obj === undefined) return; let place = 'afterbegin';  __insertAdjacent(this, place, obj); return this; }
HTMLElement.prototype.append  = function(obj) { if(obj === undefined) return; let place = 'beforeend';   __insertAdjacent(this, place, obj); return this; }
HTMLElement.prototype.after   = function(obj) { if(obj === undefined) return; let place = 'afterend';    __insertAdjacent(this, place, obj); return this; }

NodeList.prototype.before  = function(obj) { if(obj === undefined) return; let place = 'beforebegin'; this.forEach((n) => __insertAdjacent(n, place, obj)); return this; }
NodeList.prototype.prepend = function(obj) { if(obj === undefined) return; let place = 'afterbegin';  this.forEach((n) => __insertAdjacent(n, place, obj)); return this; }
NodeList.prototype.append  = function(obj) { if(obj === undefined) return; let place = 'beforeend';   this.forEach((n) => __insertAdjacent(n, place, obj)); return this; }
NodeList.prototype.after   = function(obj) { if(obj === undefined) return; let place = 'afterend';    this.forEach((n) => __insertAdjacent(n, place, obj)); return this; }

HTMLElement.prototype.addClass = function(newClass) { this.classList.add(newClass); return this; }
HTMLElement.prototype.removeClass = function(oldClass) { this.classList.remove(oldClass); return this; }
HTMLElement.prototype.toggleClass = function(thisClass) { this.classList.toggle(thisClass); return this; }
HTMLElement.prototype.hasClass = function(thisClass) { return this.classList.contains(thisClass); }

NodeList.prototype.addClass = function(newClass) { this.forEach((n) => n.classList.add(newClass)); return this; }
NodeList.prototype.removeClass = function(oldClass) { this.forEach((n) => n.classList.remove(oldClass)); return this; }
NodeList.prototype.toggleClass = function(thisClass) { this.forEach((n) => n.classList.toggle(thisClass)); return this; }

HTMLElement.prototype.val = function(newValue) { if(newValue !== undefined) { this.value = newValue; return this; } return this.value; }
HTMLElement.prototype.data = function(key, value) { if(value !== undefined) { this.dataset[key] = value; return this; } return this.dataset[key]; }
HTMLElement.prototype.attr = function(key, value) { if(value !== undefined) { this.setAttribute(key, value); return this; } return this.getAttribute(key); }
HTMLElement.prototype.prop = function(key, value) { if(value !== undefined) { this[key] = value; return this; } return this[key]; }
HTMLElement.prototype.css  = function(key, value) { if(value !== undefined) { this.style[__camelCase(key)] = value; return this; } return getComputedStyle(this)[key]; }

NodeList.prototype.val = function(newValue) { if(newValue === undefined) return; this.forEach((n) => { n.value = newValue; }); return this; }
NodeList.prototype.data = function(key, value) { if(value === undefined) return; this.forEach((n) => { n.dataset[key] = value; }); return this; }
NodeList.prototype.attr = function(key, value) { if(value === undefined) return; this.forEach((n) => { n.setAttribute(key, value); }); return this; }
NodeList.prototype.prop = function(key, value) { if(value === undefined) return; this.forEach((n) => { n[key] = value; }); return this; }
NodeList.prototype.css  = function(key, value) { if(value === undefined) return; this.forEach((n) => { n.style[__camelCase(key)] = value; }); return this; }

HTMLElement.prototype.position = function() { return { left: this.offsetLeft, top: this.offsetTop }; }
HTMLElement.prototype.offset = function() { return this.getBoundingClientRect(); }

HTMLElement.prototype.remove = function() { this.parentNode.removeChild(this); return false; }

EventTarget.prototype.change = function() { return this.dispatchEvent(new Event('change', { 'bubbles': true })); }
// HTMLElement.click() // -- ALREADY EXISTS
// HTMLElement.focus() // -- ALREADY EXISTS
// HTMLElement.blur() // -- ALREADY EXISTS

const __isElement = (element) => (element instanceof Element || element instanceof HTMLElement || element instanceof HTMLDocument)
const __camelCase = (string) => string.toLowerCase().replace(/-./g, c => c. substring(1).toUpperCase())
const __insertAdjacent = (el, place, obj) => { if(__isElement(obj)) el.insertAdjacentElement(place, obj); else el.insertAdjacentHTML(place, obj); }

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

HTMLElement.prototype.on = function(event, selector, func) {
    HTMLDocument.prototype.on.apply(this, [].slice.call(arguments));
};
HTMLElement.prototype.off = function(event, selector) {
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
                        throw '['+ this.status +': '+ this.statusText +'] '+ this.responseURL +'\n'+ this.responseText;
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
