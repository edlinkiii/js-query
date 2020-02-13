# after(string|element)
Used to add text or an element after the selected element or each of the elements of a NodeList.
Shortcut for element.insertAdjacentHTML('afterend') || element.insertAdjacentElement('afterend')
Similar to [insertAfter()](./insertAfter.md)

### element.after(string)
Parses the string as HTML and adds it after the selected element as a sibling.
Returns either the newly created element (if available) or the initially selected element.

```javascript
// Vanilla // docuement.querySelector('p#one').insertAdjacentHTML('afterend', '<p id="two">Hello World</p>');
// jQuery  // $('p#one').after('<p id="two">Hello World</p>');
$q('p#one').after('<p id="two">Hello World</p>');
```

### NodeList.after(string)
Parses the string as HTML and adds it after each element in the NodeList as a sibling.
Returns a NodeList of either the newly created elements (if available) or the initially selected elements.

```javascript
// Vanilla // docuement.querySelectorAll('p.first').forEach((el) => el.insertAdjacentHTML('afterend', '<p class="postscript">Hello World</p>'));
// jQuery  // $('p.first').after('<p class="postscript">Hello World</p>');
$qa('p.first').after('<p class="postscript">Hello World</p>');
```

### element.after(element)
Adds the passed element after the selected element as a sibling.
Returns the newly added (passed) element.

```javascript
// Vanilla // docuement.querySelector('p#one').insertAdjacentElement('afterend', '<p id="two">Hello World</p>');
$q('p#one').after('<p id="two">Hello World</p>');
```

### NodeList.after(element)
Adds the passed element after the each of the selected elements in the NodeList as a sibling.
Returns a NodeList of newly added (passed) elements.

```javascript
// Vanilla // docuement.querySelectorAll('p.first').forEach((el) => el.insertAdjacentElement('afterend', element));
$qa('p.first').after(element);
```
