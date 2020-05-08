# isDescendant(element)
Used to determine if an element is contained by another element.

As of v.1.1.1 isDescendant returns `false` if the element **is** the passed element.

### element.isDescendant(ancestorEl)
Returns `true` if the element lives within the ancestor, `false` otherwise;

```javascript
// Vanilla // ancestor.contains(element);
$q('#target').isDescendant($q('#container'));
```

##### Added v1.1
