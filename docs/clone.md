# clone([bool])
Used to create a copy of the selected element.
Shortcut for element.cloneNode(deep)

### element.clone(false)
_default behavior_ Creates and returns a copy of the selected element.

### element.clone(true)
Creates and returns a copy of the selected element and it's subtree.

```javascript
// Vanilla // let newP = document.querySelector('p').cloneNode(false);
// jQuery  // let newP = $('p').clone(false);
let newP = $q('p').clone(false);
```
