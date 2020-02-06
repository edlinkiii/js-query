# parents([selector])
Used to select the ancestral elements of the selected element. Elements are arranged in order from closest ([0]) to farthest.

### element.parents()
Returns an `Array` of all elements in which the selected element is nested.

```javascript
// const $ancestors = $paragraph.parents(); // --> jQuery
const $ancestors = $paragraph.parents();
```

### element.parents(selector)
Returns an `Array` of all elements in which the selected element is nested if they match a passed selector.

```javascript
// const $sections = $paragraph.parents('section'); // --> jQuery
const $sections = $paragraph.parents('section');
```
