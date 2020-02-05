# next()
Used to select a single element, the (sibling) element in the DOM that comes after selected element.
Shortcut for element.nextElementSibling

### element.next()
Returns the (sibling) element immediately following the selected element.
If there is not a 'next' element, `null` is returned.

```javascript
// const $secondItem = $firstItem.nextElementSibling; // --> Vanilla JS
// const $secondItem = $firstItem.next(); // --> jQuery
const $secondItem = $firstItem.next();
```
