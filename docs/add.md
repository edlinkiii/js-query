# add(tagName)
Used to create a new element.
Shortcut for document.createElement
Alias for [create(tagName)](./create.md)

### element.add(tagName)
Creates and returns a new element of the type of the passed tagName.

```javascript
// Vanilla // let newP = document.createElement('p');
// jQuery  // let newP = $.add('p');
let newP = $q().add('p');
```
