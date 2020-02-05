# elList.filter(selector)
Used for removing unwanted elements from a previously selected elementList.

### elList.filter(selector)
When a valid selector is passed, only matching elements are returned in an `Array`
If no elements are found matching the selector, an empty `Array` is returned.

```javascript
// const $blueItems = $items.filter('.blue'); // --> jQuery
const $blueItems = $items.filter('.blue');
```
