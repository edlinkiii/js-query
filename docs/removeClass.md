# removeClass(string)
Used to remove a if a specific class to a selected element.
Shortcut for element.classList.remove(string)

### element.removeClass(string)
Removes a class from the class list of an element via the passed string.
Returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').classList.remove('disabled');
// jQuery  // $('#target').removeClass('disabled');
$q('#target').removeClass('disabled');
```

### NodeList.removeClass(string)
Removes a class from the class list of each of the elements in a NodeList via the passed string.
Returns the NodeList.

```javascript
// Vanilla // docuement.querySelector('button').classList.remove('disabled');
// jQuery  // $('button').removeClass('disabled');
$qa('button').removeClass('disabled');
```
