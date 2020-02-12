# append(string|element)
Used to add text or an element as the first child of the selected element or each of the elements of a NodeList.
Shortcut for element.insertAdjacentHTML('afterbegin') || element.insertAdjacentElement('afterbegin')

### element.append(string)
Parses the string as HTML and adds it as the first child of the selected element.
Returns either the newly created element (if available) or the initially selected element.

```javascript
// Vanilla // docuement.querySelector('p#one').insertAdjacentHTML('afterbegin', '<p id="zero">Hello World</p>');
// jQuery  // $('p#one').append('<p id="zero">Hello World</p>');
$q('p#one').append('<p id="zero">Hello World</p>');
```

### NodeList.append(string)
Parses the string as HTML and adds it as the first child of each element in the NodeList.
Returns a NodeList of either the newly created elements (if available) or the initially selected elements.

```javascript
// Vanilla // docuement.querySelectorAll('p.first').forEach((el) => el.insertAdjacentHTML('afterbegin', '<p class="preface">Hello World</p>'));
// jQuery  // $('p.first').append('<p class="preface">Hello World</p>');
$qa('p.first').append('<p class="preface">Hello World</p>');
```

### element.append(element)
Adds the passed element as the first child of the selected element.
Returns the newly added (passed) element.

```javascript
// Vanilla // docuement.querySelector('p#one').insertAdjacentElement('afterbegin', '<p id="zero">Hello World</p>');
$q('p#one').append('<p id="zero">Hello World</p>');
```

### NodeList.append(element)
Adds the passed element as the first child of the each of the selected elements in the NodeList.
Returns a NodeList of newly added (passed) elements.

```javascript
// Vanilla // docuement.querySelectorAll('p.first').forEach((el) => el.insertAdjacentElement('afterbegin', element));
$qa('p.first').append(element);
```
