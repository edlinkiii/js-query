# is(element)
Used to determine if one element **_is_** another element.

### element.isDescendant(otherElement)
Returns `true` if the element is the passed element, `false` otherwise;

```javascript
// Vanilla // (event.target === document.querySelector('#container'))
event.target.is($q('#container'));
```

##### Added v1.1.1
