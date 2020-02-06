# filter(selector)
Used for removing unwanted elements from a previously selected elementList.

### elementList.filter(selector)
When a valid selector is passed, only matching elements are returned in a `NodeList`
If no elements are found matching the selector, an empty `NodeList` is returned.

```javascript
// const $blueItems = $items.filter('.blue'); // --> jQuery
const $blueItems = $items.filter('.blue');
```
