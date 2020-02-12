# toggleClass(string)
Used to add a if a specific class to a selected element if it doesn't already have it, or remove it if it does.

### element.toggleClass(string)
Adds the specified class to the class list of an element via the passed string if it isn't already there, otherwise remove it.
Returns the element.

```javascript
// jQuery  // $('#target').toggleClass('disabled');
$q('#target').toggleClass('disabled');
```

### NodeList.toggleClass(string)
Adds the specified class to the class list of each element of a NodeList via the passed string if it isn't already there, otherwise remove it.
Returns the NodeList.

```javascript
// jQuery  // $('button').toggleClass('disabled');
$qa('button').toggleClass('disabled');
```
