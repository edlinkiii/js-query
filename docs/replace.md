# replace(element)
Replace one element with another. Similar to [replaceWith()](./replaceWith.md)

### newElement.replace(oldElement)
Uses the element to replace the passed element. Returns the element.

```javascript
// Vanilla // oldElement.parentNode.replaceChild(newElement, oldElement);
$q('#new').replace($q('#old'));
```

##### Added v1.1
