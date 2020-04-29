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
  getElement(selector) {
    return (selector === document || selector === 'document' || !selector) ? document : document.querySelectorAll(selector);
  }
  static $hasClass(element, thisClass) {
    return element.classList.contains(thisClass);
  }
  hasClass(thisClass) {
    if(this.selector) {
      this.element = this.getElement(this.selector);
    }
    if(this.element.length) {
      return this.constructor.$hasClass(this.element[0], thisClass);
    }
    else {
      return this.constructor.$hasClass(this.element, thisClass);
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
  addClass(thisClass) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$addClass(this.element, thisClass)

    return this;
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
  removeClass(thisClass) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$removeClass(this.element, thisClass)

    return this;
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
  toggleClass(thisClass) {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$toggleClass(this.element, thisClass)

    return this;
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
  hide() {
    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.displayType = getComputedStyle(this.element[0])['display'];

    this.constructor.$hide(this.element);

    return this;
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
  show(displayType) {
    if(displayType) {
      this.displayType = displayType;
    }

    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$show(this.element, this.displayType);

    return this;
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
  toggle(displayType) {
    if(displayType) {
      this.displayType = displayType;
    }

    this.element = (this.selector) ? this.getElement(this.selector) : this.element;

    this.constructor.$toggle(this.element, this.displayType);

    return this;
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






