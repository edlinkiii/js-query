# prepend(string|element)
Used to add text or an element as the last child of the selected element or each of the elements of a NodeList.
Shortcut for element.insertAdjacentHTML('beforeend') || element.insertAdjacentElement('beforeend')
Similar to [prependTo()](./prependTo.md)

### element.prepend(string)
Parses the string as HTML and adds it as the last child of the selected element.
Returns either the newly created element (if available) or the initially selected element.

```javascript
// Vanilla // docuement.querySelector('p#one').insertAdjacentHTML('beforeend', '<p id="zero">Hello World</p>');
// jQuery  // $('p#one').prepend('<p id="zero">Hello World</p>');
$q('p#one').prepend('<p id="zero">Hello World</p>');
```

### NodeList.prepend(string)
Parses the string as HTML and adds it as the last child of each element in the NodeList.
Returns a NodeList of either the newly created elements (if available) or the initially selected elements.

```javascript
// Vanilla // docuement.querySelectorAll('p.first').forEach((el) => el.insertAdjacentHTML('beforeend', '<p class="preface">Hello World</p>'));
// jQuery  // $('p.first').prepend('<p class="preface">Hello World</p>');
$qa('p.first').prepend('<p class="preface">Hello World</p>');
```

### element.prepend(element)
Adds the passed element as the last child of the selected element.
Returns the newly added (passed) element.

```javascript
// Vanilla // docuement.querySelector('p#one').insertAdjacentElement('beforeend', '<p id="zero">Hello World</p>');
$q('p#one').prepend('<p id="zero">Hello World</p>');
```

### NodeList.prepend(element)
Adds the passed element as the last child of the each of the selected elements in the NodeList.
Returns a NodeList of newly added (passed) elements.

```javascript
// Vanilla // docuement.querySelectorAll('p.first').forEach((el) => el.insertAdjacentElement('beforeend', element));
$qa('p.first').prepend(element);
```
