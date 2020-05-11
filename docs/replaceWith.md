# replaceWith(element)
Replace one element with another. Similar to [replace()](./replace.md)

### oldElement.replaceWith(newElement)
Replaces the element with the passed element. Returns the element.

```javascript
// Vanilla // oldElement.parentNode.replaceChild(newElement, oldElement);
// jQuery // $("#old").replaceWith($("#new"));
$q('#old').replaceWith($q('#new'));
```

##### Added v1.1
