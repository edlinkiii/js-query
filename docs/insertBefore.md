# insertBefore(selector)
Used to add a new element to the DOM before one (or more via cloning) elements.
Shortcut for element.insertAdjacentElement('beforebegin')
Similar to [before()](./before.md)

### element.insertBefore(selector)
Inserts a newly created element into the DOM before any elements matching the passed selector.
Returns either the newly created element or a `NodeList` of cloned elements.

```javascript
// Vanilla // docuement.querySelector('#target').insertAdjacentElement('beforebegin', document.createElement('p'));
// jQuery  // $.add('p').insertBefore('#target');
$q().add('p').insertBefore('#target');
```
