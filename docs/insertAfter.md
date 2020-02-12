# insertAfter(selector)
Used to add a new element to the DOM after one (or more via cloning) elements.
Shortcut for element.insertAdjacentElement('afterend')
Similar to [after()](./after.md)

### element.insertAfter(selector)
Inserts a newly created element into the DOM after any elements matching the passed selector.
Returns either the newly created element or a `NodeList` of cloned elements.

```javascript
// Vanilla // docuement.querySelector('#target').insertAdjacentElement('afterend', document.createElement('p'));
// jQuery  // $.add('p').insertAfter('#target');
$q().add('p').insertAfter('#target');
```
