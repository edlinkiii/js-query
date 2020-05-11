# isSelf(element)
Used to determine if one element **_is_** another element.

### element.isSelf(otherElement)
Returns `true` if the element is the passed element, `false` otherwise.

```javascript
// Vanilla // (event.target === document.querySelector('#container'))
event.target.isSelf($q('#container'));
```

##### Added v1.1.1
