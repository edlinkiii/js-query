// Vanilla JS helpers -- for recovering jQuery users

const $q = (selector) => (selector === document) ? document : document.querySelector(selector);
const $qa = (selector) => document.querySelectorAll(selector);

HTMLElement.prototype.find = function(selector) { return this.querySelector(selector); }
HTMLElement.prototype.findAll = function(selector) { return this.querySelectorAll(selector); }
HTMLElement.prototype.parent = function() { return this.parentElement; }
HTMLElement.prototype.children = function() { return this.childNodes; }

HTMLElement.prototype.next = function() { return this.nextElementSibling; }
HTMLElement.prototype.prev = function() { return this.previousElementSibling; }

HTMLElement.prototype.hide = function() { this.style.display = 'none'; return this; }
HTMLElement.prototype.show = function() { this.style.display = 'initial'; return this; }
HTMLElement.prototype.toggle = function() { this.style.display = (this.style.display !== 'none') ? 'none' : '' ; return this; }

NodeList.prototype.hide = function() { this.forEach((n) => n.style.display = 'none'); return this; }
NodeList.prototype.show = function() { this.forEach((n) => n.style.display = 'initial'); return this; }
NodeList.prototype.toggle = function() { this.forEach((n) => n.style.display = (n.style.display !== 'none') ? 'none' : '' ); return this; }

HTMLElement.prototype.text = function(textString) { if(textString !== undefined) { this.innerText = textString; return this; } else return this.innerText; }
HTMLElement.prototype.html = function(htmlString) { if(htmlString !== undefined) { this.innerHTML = htmlString; return this; } else return this.innerHTML; }
HTMLElement.prototype.markup = function(htmlString) { if(htmlString !== undefined) { this.outerHTML = htmlString; return this; } else return this.outerHTML; }

HTMLElement.prototype.prepend = function(string) { if(string === undefined) return; else { this.innerHTML = string + this.innerHTML; return this; } }
HTMLElement.prototype.append = function(string) { if(string === undefined) return; else { this.innerHTML = this.innerHTML + string; return this; } }

HTMLElement.prototype.addClass = function(newClass) { this.classList.add(newClass); return this; }
HTMLElement.prototype.removeClass = function(oldClass) { this.classList.remove(oldClass); return this; }
HTMLElement.prototype.toggleClass = function(thisClass) { this.classList.toggle(thisClass); return this; }
HTMLElement.prototype.hasClass = function(thisClass) { return this.classList.contains(thisClass); }

NodeList.prototype.addClass = function(newClass) { this.forEach((n) => n.classList.add(newClass)); return this; }
NodeList.prototype.removeClass = function(oldClass) { this.forEach((n) => n.classList.remove(oldClass)); return this; }
NodeList.prototype.toggleClass = function(thisClass) { this.forEach((n) => n.classList.toggle(thisClass)); return this; }

HTMLElement.prototype.val = function(newValue) { if(newValue !== undefined) { this.value = newValue; return this; } else return this.value; }
HTMLElement.prototype.data = function(key, value) { if(value !== undefined) { this.dataset[key] = value; return this; } else return this.dataset[key]; }
HTMLElement.prototype.attr = function(key, value) { if(value !== undefined) { this.setAttribute(key, value); return this; } else return this.getAttribute(key); }
HTMLElement.prototype.prop = function(key, value) { if(value !== undefined) { this[key] = value; return this; } else return this[key]; }

EventTarget.prototype.change = function() { return this.dispatchEvent(new Event('change', { 'bubbles': true })); }
// HTMLElement.click() // -- ALREADY EXISTS
// HTMLElement.focus() // -- ALREADY EXISTS
// HTMLElement.blur() // -- ALREADY EXISTS

function eventHandler(e) {
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
    this.addEventListener(event, eventHandler, true);
};
HTMLDocument.prototype.off = function(event, selector) {
    if(this.__events) {
        if(this.__events[event]) {
            if(this.__events[event][selector]) {
                delete this.__events[event][selector];
            }
        }
    }
    this.removeEventListener(event, eventHandler, true);
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
