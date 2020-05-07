class JSQuery {
  selector = null;
  element = null;
  displayType = null;
  constructor(obj) {
    for(let o in obj) {
      this[o] = obj[o];
    }
    if(this.selector) {
      this.element = this.getElement(this.selector);
    }
  }
  /***** $js() interface methods *****************/
  getElement(selector) {
    return (selector === document || selector === 'document' || !selector) ? document : document.querySelectorAll(selector);
  }
  hasClass(thisClass) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$hasClass(this.element, thisClass)

    return this;
  }
  addClass(thisClass) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$addClass(this.element, thisClass)

    return this;
  }
  removeClass(thisClass) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$removeClass(this.element, thisClass)

    return this;
  }
  toggleClass(thisClass) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$toggleClass(this.element, thisClass)

    return this;
  }
  hide() {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.displayType = getComputedStyle(this.element[0])['display'];

    this.constructor.$hide(this.element);

    return this;
  }
  show(displayType) {
    if(displayType) {
      this.displayType = displayType;
    }

    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$show(this.element, this.displayType);

    return this;
  }
  toggle(displayType) {
    if(displayType) {
      this.displayType = displayType;
    }

    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$toggle(this.element, this.displayType);

    return this;
  }
  text(string) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    let returned = this.constructor.$text(this.element, string);

    return (string) ? this :  returned;
  }
  html(string) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;
    
    let returned = this.constructor.$html(this.element, string);
    
    return (string) ? this :  returned;
  }
  markup(string) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;
    
    let returned = this.constructor.$markup(this.element, string);
    
    return (string) ? this : returned;
  }
  val(value) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;
    
    let returned = this.constructor.$val(this.element, value);
    
    return (value) ? this : returned;
  }
  data(key, value) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;
    
    let returned = this.constructor.$data(this.element, key, value);
    
    return (value) ? this : returned;
  }
  attr(key, value) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;
    
    let returned = this.constructor.$attr(this.element, key, value);
    
    return (value) ? this : returned;
  }
  prop(key, value) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;
    
    let returned = this.constructor.$prop(this.element, key, value);
    
    return (value) ? this : returned;
  }
  css(key, value) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;
    
    let returned = this.constructor.$css(this.element, key, value);
    
    return (value) ? this : returned;
  }
  /***** extension methods - $js() only! ****************/
  id(value) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;
    
    let returned = this.constructor.$prop(this.element, 'id', value);
    
    return (value) ? this : returned;
  }
  /***** static methods for vanilla elements ****************/
  static $find(element, selector) {
    return element.querySelector(selector);
  }
  static $findAll(element, selector) {
    return element.querySelectorAll(selector);
  }
  static $filter(element, selector) {
    return this.__toNodeList(Array.prototype.filter.call(element, (el) => el.matches(selector)));
  }
  static $hasClass(element, thisClass) {
    if(element.length && element.length === 1) {
      return element[0].classList.contains(thisClass);
    }
    if(element.length) {
      return false;
    }
    else {
      return element.classList.contains(thisClass);
    }
  }
  static $addClass(element, thisClass) {
    if(!element) return false;
    if(!thisClass) return element;
    if(element.length) {
      element.forEach((el) => {
        el.classList.add(thisClass);
      })
    }
    else {
      element.classList.add(thisClass);
    }
    return element;
  }
  static $removeClass(element, thisClass) {
    if(!element) return false;
    if(!thisClass) return element;
    if(element.length) {
      element.forEach((el) => {
        el.classList.remove(thisClass);
      })
    }
    else {
      element.classList.remove(thisClass);
    }
    return element;
  }
  static $toggleClass(element, thisClass) {
    if(!element) return false;

    if(!thisClass) return element;

    if(element.length) {

      element.forEach((el) => {
        el.classList.toggle(thisClass);
      })

    }
    else {
      element.classList.toggle(thisClass);
    }

    return element;
  }
  static $hide(element) {
    if(!element) return false;

    if(element.length) {

      element.forEach((el) => {
        el.style.display = 'none';
      })

    }
    else {
      element.style.display = 'none';
    }
    
    return element;
  }
  static $show(element, displayType) {
    if(!element) return false;

    if(element.length) {

      element.forEach((el) => {
        el.style.display = (displayType) ? displayType : this.__defaultDisplay(el.tagName);
      })

    }
    else {
      element.style.display = (displayType) ? displayType : this.__defaultDisplay(element.tagName);
    }

    return element;
  }
  static $toggle(element, displayType) {
    if(!element) return false;

    if(element.length) {

      element.forEach((el) => {
        if(el.style.display !== 'none') {
          this.$hide(el);
        }
        else {
          this.$show(el, displayType);
        }
      });
    }
    else {
      if(element.style.display !== 'none') {
        this.$hide(element);
      }
      else {
        this.$show(element, displayType);
      }
    }

    return element;
  }
  static $text(element, string) {
    if(!element) return false;

    if(element.length) {
      if(!string) {
        if(element.length === 1) {
          return element[0].textContent;
        }
        else {
          return false;
        }
      }

      element.forEach((el) => {
        el.textContent = string;
      });
    }
    else {
      if(!string) {
        return element.textContent;
      }
      else {
        element.textContent = string;
      }
    }

    return element;
  }
  static $html(element, string) {
    if(!element) return false;

    if(element.length) {
      if(!string) {
        if(element.length === 1) {
          return element[0].innerHTML;
        }
        else {
          return false;
        }
      }

      element.forEach((el) => {
        el.innerHTML = string;
      });
    }
    else {
      if(!string) {
        return element.innerHTML;
      }
      else {
        element.innerHTML = string;
      }
    }

    return element;
  }
  static $markup(element, string) {
    if(!element) return false;

    if(element.length) {
      if(!string) {
        if(element.length === 1) {
          return element[0].outerHTML;
        }
        else {
          return false;
        }
      }

      element.forEach((el) => {
        el.outerHTML = string;
      });
    }
    else {
      if(!string) {
        return element.outerHTML;
      }
      else {
        element.outerHTML = string;
      }
    }

    return element;
  }
  static $val(element, value) {
    if(!value) {
      if(element.length === 1) {
        return element[0].value;
      }
      else {
        return false;
      }
    }

    if(element.length) {
      if(!value) return false;

      element.forEach((el) => {
        el.value = value;
      });
    }
    else {
      if(!value) {
        return element.value;
      }
      else {
        element.value = value;
      }
    }

    return element;
  }
  static $data(element, key, value) {
    if(!element) return false;
    if(!key) return false;

    if(element.length) {
      if(!value) {
        if(element.length === 1) {
          return element[0].dataset[key];
        }
        else {
          return false;
        }
      }

      element.forEach((el) => {
        el.dataset[key] = value;
      });
    }
    else {
      if(!value) {
        return element.dataset[key];
      }
      else {
        element.dataset[key] = value;
      }
    }

    return element;
  }
  static $attr(element, key, value) {
    if(!element) return false;
    if(!key) return false;

    if(element.length) {
      if(!value) {
        if(element.length === 1) {
          return element[0].getAttribute(key);
        }
        else {
          return false;
        }
      }

      element.forEach((el) => {
        el.setAttribute(key, value);
      });
    }
    else {
      if(!value) {
        return element.getAttribute(key);
      }
      else {
        element.setAttribute(key, value);
      }
    }

    return element;
  }
  static $prop(element, key, value) {
    if(!element) return false;
    if(!key) return false;

    if(element.length) {
      if(!value) {
        if(element.length === 1) {
          return element[0][key];
        }
        else {
          return false;
        }
      }

      element.forEach((el) => {
        el[key] = value;
      });
    }
    else {
      if(!value) {
        return element[key];
      }
      else {
        element[key] = value;
      }
    }

    return element;
  }
  static $css(element, key, value) {
    if(!element) return false;
    if(!key) return false;

    if(element.length) {
      if(!value) {
        if(element.length === 1) {
          return getComputedStyle(element[0])[key];
        }
        else {
          return false;
        }
      }

      element.forEach((el) => {
        el.style[this.__camelCase(key)] = value;
      });
    }
    else {
      if(!value) {
        return getComputedStyle(element)[key];
      }
      else {
        element.style[this.__camelCase(key)] = value;
      }
    }

    return element;
  }
  static $width(element, newWidth) {
    if(newWidth === undefined) return element.offsetWidth;

    element.style.width = (typeof newWidth === 'number') ? newWidth+'px' : newWidth;

    return element;
  }
  static $height(element, newHeight) {
    if(newHeight === undefined) return element.offsetHeight;

    element.style.height = (typeof newHeight === 'number') ? newHeight+'px' : newHeight;

    return element;
  }
  static $next(element) {
    return element.nextElementSibling;
  }
  static $prev(element) {
    return element.previousElementSibling;
  }
  static $siblings(element, selector, inclusive=false) {
    if (typeof selector === "boolean") {
      inclusive = selector; selector = null;
    }
    
    if(selector && selector !== null) {
      return this.__toNodeList(Array.prototype.filter.call(element.parentNode.children, (child) => ((!inclusive && child !== element) || (inclusive)) && child.tagName && child.matches(selector)));
    }
    return this.__toNodeList(Array.prototype.filter.call(element.parentNode.children, (child) => ((!inclusive && child !== element) || (inclusive)) && child.tagName));
  }
  static $kids(element, selector) {
    if(selector) return this.__toNodeList(Array.prototype.filter.call(element.childNodes, (child) => child.tagName && child.matches(selector))); 
    return this.__toNodeList(Array.prototype.filter.call(element.childNodes, (child) => child.tagName));
  }
  static $firstKid(element) {
    return Array.prototype.filter.call(element.childNodes, (child) => child.tagName)[0];
  }
  static $lastKid(element) {
    let arr = Array.prototype.filter.call(element.childNodes, (child) => child.tagName);
    
    return arr[arr.length-1];
  }
  static $parent(element) {
    return element.parentElement;
  }
  static $parents(element, selector) {
    let array = [];
    let tagName = '';
    let parent;
    
    while(tagName !== 'HTML') {
      parent = element.parentNode;
      
      if(selector) {
        if(element.matches(selector)) {
          array.push(element);
        }
      }
      else {
        array.push(parent);
      }
      
      tagName = parent.tagName.toUpperCase();
      
      element = parent;
    }
    
    return this.__toNodeList(array);
  }
  static $closest(element, selector) {
    if(selector === undefined) return element.parentElement;
    
    let tagName = '';
    let parent;
    let end = false;
    
    while(tagName !== 'HTML' && !end) {
      parent = element.parentNode;
      if(parent.matches(selector)) {
        end = true;
        
        return parent;
      }
      tagName = parent.tagName.toUpperCase();
      
      element = parent;
    }
  }
  static $before(element, object) {
    if(object === undefined) return;

    if(element.length) {
      let array = Array.from(element).map((el) => this.$before(el, object));
      
      return this.__toNodeList(array);
    }

    this.__insertAdjacent(element, 'beforebegin', object);
    
    return (this.$prev(element)) ? this.$prev(element) : element;
  }
  static $prepend(element, object) {
    if(object === undefined) return;

    if(element.length) {
      let array = Array.from(element).map((el) => this.$prepend(el, object));
      
      return this.__toNodeList(array);
    }

    this.__insertAdjacent(element, 'afterbegin', object);
    
    return (this.$firstKid(element)) ? this.$firstKid(element) : element;
  }
  static $append(element, object) {
    if(object === undefined) return;

    if(element.length) {
      let array = Array.from(element).map((el) => this.$append(el, object));
      
      return this.__toNodeList(array);
    }

    this.__insertAdjacent(element, 'beforeend', object);
    
    return (this.$lastKid(element)) ? this.$lastKid(element) : element;
  }
  static $after(element, object) {
    if(object === undefined) return;

    if(element.length) {
      let array = Array.from(element).map((el) => this.$after(el, object));
      
      return this.__toNodeList(array);
    }

    this.__insertAdjacent(element, 'afterend', object);
    
    return (this.$next(element)) ? this.$next(element) : element;
  }
  static $appendTo(element, selector) {
    let array = Array.from(document.querySelectorAll(selector)).map((el) => this.$append(el, element.clone(true)));
    
    return (array.length === 1) ? array[0] : this.__toNodeList(array);
  }
  static $prependTo(element, selector) {
    let array = Array.from(document.querySelectorAll(selector)).map((el) => this.$prepend(el, element.clone(true)));
    
    return (array.length === 1) ? array[0] : this.__toNodeList(array);
  }
  static $insertBefore(element, selector) {
    let array = Array.from(document.querySelectorAll(selector)).map((el) => this.$before(el, element.clone(true)));
    
    return (array.length === 1) ? array[0] : this.__toNodeList(array);
  }
  static $insertAfter(element, selector) {
    let array = Array.from(document.querySelectorAll(selector)).map((el) => this.$after(el, element.clone(true)));
    
    return (array.length === 1) ? array[0] : this.__toNodeList(array);
  }
  static $add(tagName) {
    return document.createElement(tagName);
  }
  static $clone(element, deep=false) {
    return element.cloneNode(deep);
  }
  static $empty(element) {
    if(element.length) {
      element.forEach((el) => {
        el.innerHTML = '';
      });
    }
    else {
      element.innerHTML = '';
    }

    return element;
  }
  static $remove(element) {
    if(element.length) {
      element.forEach((el) => {
        el.remove();
      });
    }
    else {
      element.remove();
    }

    return null;
  }
  static $position(element) {
    return { left: element.offsetLeft, top: element.offsetTop };
  }
  static $offset(element) {
    let rect = element.getBoundingClientRect();

    return { top: rect.top + document.body.scrollTop, left: rect.left + document.body.scrollLeft }
  }
  static $trigger(element, eventType) {
    return element.dispatchEvent(new Event(eventType, { 'bubbles': true }));
  }
  static $hasClass(element) {
    return (element === document.activeElement);
  }
  /***** utility methods *********************/
  static __isElement(element) {
    return (element instanceof Element || element instanceof Element || element instanceof HTMLDocument);
  }
  static __camelCase(string) {
    return string.toLowerCase().replace(/-./g, c => c. substring(1).toUpperCase());
  }
  static __insertAdjacent(element, place, object) {
    if(this.__isElement(object)) {
      element.insertAdjacentElement(place, object);
    }
    else {
      element.insertAdjacentHTML(place, object);
    }
  }
  static __buildElementPath(element) {
    let p = element.parentNode;
    
    if(p === document) {
      return element.tagName;
    }
    return this.__buildElementPath(p) + " > :nth-child(" + (Array.prototype.indexOf.call(p.children, element)+1) + ")";
    // original code by: apsillers @ stackoverflow.com
  }
  static __toNodeList(array) {
    return document.querySelectorAll(array.map((el) => this.__buildElementPath(el)).join(","));
    // original code by: apsillers @ stackoverflow.com
  }
  static __FPS = 1000 / 60;
  static __animate = (func) => {
    if(func()) {
      setTimeout(() => {
        __animate(func);
      },
      __FPS);
    }
  }
  static __defaultDisplay(tag) {
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
}



