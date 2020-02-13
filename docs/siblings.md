# siblings([selector][, bool])
Used to select all the elements with the same parentNode as the selected element as a `NodeList`. (Does not return the selected element in the list.)

### element.siblings([false])
Returns all of the (sibling) elements of the selected element.
If there are no 'sibling' elements, an empty `NodeList` is returned.

```javascript
// const $otherItems = $firstItem.siblings(); // --> jQuery
const $otherItems = $firstItem.siblings();
```

### element.siblings(selector[, false])
Returns all of the (sibling) elements of the selected element that match the passed selector.
If there are no matching 'sibling' elements, an empty `NodeList` is returned.

```javascript
// const $blueItems = $firstItem.siblings('.blue'); // --> jQuery
const $blueItems = $firstItem.siblings('.blue');
```

### element.siblings(true)
Returns all of the (sibling) elements (including the selected element) of the selected element.
If there are no 'sibling' elements, a `NodeList` with the selected element is returned.

### element.siblings(selector, true)
Returns all of the (sibling) elements (including the selected element) of the selected element that match the passed selector.
If there are no matching 'sibling' elements, an empty `NodeList` is returned.
