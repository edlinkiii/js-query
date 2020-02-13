# create(tagName)
Used to create a new element.
Shortcut for document.createElement
Alias for [add(tagName)](./add.md)

### element.create(tagName)
Creates and returns a new element of the type of the passed tagName.

```javascript
// Vanilla // let newP = document.createElement('p');
// jQuery  // let newP = $.add('p');
let newP = $q().create('p');
```
