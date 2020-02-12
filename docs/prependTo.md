# prependTo(selector)
Used to add a new element to the DOM as the last child of one (or more via cloning) element(s).
Shortcut for element.insertAdjacentElement('beforeend')
Similar to [prepend()](./prepend.md)

### element.prependTo(selector)
Inserts a newly created element into the DOM as the last child of any elements matching the passed selector.
Returns either the newly created element or a `NodeList` of cloned elements.

```javascript
// Vanilla // docuement.querySelector('#target').insertAdjacentElement('beforeend', document.createElement('p'));
// jQuery  // $.add('p').prependTo('#target');
$q().create('p').prependTo('#target');
```
