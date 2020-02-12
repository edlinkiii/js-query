# appendTo(selector)
Used to add a new element to the DOM as the first child of one (or more via cloning) element(s).
Shortcut for element.insertAdjacentElement('afterbegin')
Similar to [append()](./append.md)

### element.appendTo(selector)
Inserts a newly created element into the DOM as the first child of any elements matching the passed selector.
Returns either the newly created element or a `NodeList` of cloned elements.

```javascript
// Vanilla // docuement.querySelector('#target').insertAdjacentElement('afterbegin', document.createElement('p'));
// jQuery  // $.add('p').appendTo('#target');
$q().add('p').appendTo('#target');
```
