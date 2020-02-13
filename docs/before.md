# before(string|element)
Used to add text or an element before the selected element or each of the elements of a NodeList.
Shortcut for element.insertAdjacentHTML('beforebegin') || element.insertAdjacentElement('beforebegin')
Similar to [insertBefore()](./insertBefore.md)

### element.before(string)
Parses the string as HTML and adds it before the selected element as a sibling.
Returns either the newly created element (if available) or the initially selected element.

```javascript
// Vanilla // docuement.querySelector('p#one').insertAdjacentHTML('beforebegin', '<p id="zero">Hello World</p>');
// jQuery  // $('p#one').before('<p id="zero">Hello World</p>');
$q('p#one').before('<p id="zero">Hello World</p>');
```

### NodeList.before(string)
Parses the string as HTML and adds it before each element in the NodeList as a sibling.
Returns a NodeList of either the newly created elements (if available) or the initially selected elements.

```javascript
// Vanilla // docuement.querySelectorAll('p.first').forEach((el) => el.insertAdjacentHTML('beforebegin', '<p class="preface">Hello World</p>'));
// jQuery  // $('p.first').before('<p class="preface">Hello World</p>');
$qa('p.first').before('<p class="preface">Hello World</p>');
```

### element.before(element)
Adds the passed element before the selected element as a sibling.
Returns the newly added (passed) element.

```javascript
// Vanilla // docuement.querySelector('p#one').insertAdjacentElement('beforebegin', '<p id="zero">Hello World</p>');
$q('p#one').before('<p id="zero">Hello World</p>');
```

### NodeList.before(element)
Adds the passed element before the each of the selected elements in the NodeList as a sibling.
Returns a NodeList of newly added (passed) elements.

```javascript
// Vanilla // docuement.querySelectorAll('p.first').forEach((el) => el.insertAdjacentElement('beforebegin', element));
$qa('p.first').before(element);
```
