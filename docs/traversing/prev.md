# prev()
Used to select a single element, the (sibling) element in the DOM that comes after selected element.
Shortcut for element.nextElementSibling

### element.prev()
Returns the (sibling) element immediately prior to the selected element.
If there is not a 'previous' element, `null` is returned.

```javascript
// const $firstItem = $secondItem.previousElementSibling; // --> Vanilla JS
// const $firstItem = $secondItem.prev(); // --> jQuery
const $firstItem = $secondItem.prev();
```
