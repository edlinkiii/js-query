# addClass(string)
Used to add a if a specific class to a selected element.
Shortcut for element.classList.add(string)

### element.addClass(string)
Adds a class to the class list of an element via the passed string.
Returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').classList.add('disabled');
// jQuery  // $('#target').addClass('disabled');
$q('#target').addClass('disabled');
```

### NodeList.addClass(string)
Adds a class to the class list of each of the elements in a NodeList via the passed string.
Returns the NodeList.

```javascript
// Vanilla // docuement.querySelector('button').classList.add('disabled');
// jQuery  // $('button').addClass('disabled');
$qa('button').addClass('disabled');
```
