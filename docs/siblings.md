# siblings()
Used to select all the elements with the same parentNode as the selected element as an `Array`. (Does not return the selected element in the array.)

### element.siblings()
Returns all of the (sibling) elements of the selected element.
If there are no 'sibling' elements, and empty `Array` is returned.

```javascript
// const $otherItems = $firstItem.siblings(); // --> jQuery
const $otherItems = $firstItem.siblings();
```

### element.siblings(selector)
Returns all of the (sibling) elements of the selected element that match the passed selector.
If there are no matching 'sibling' elements, and empty `Array` is returned.

```javascript
// const $blueItems = $firstItem.siblings('.blue'); // --> jQuery
const $blueItems = $firstItem.siblings('.blue');
```
