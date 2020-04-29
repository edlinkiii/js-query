class JS {
  selector = null;
  element = null;
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
}
