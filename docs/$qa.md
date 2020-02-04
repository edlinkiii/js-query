# $qa(selector)
Used for selecting a single element (eg, '#id').
Shortcut for document.querySelector()

### $qa(selector)
When a valid selector is passed, all matching elements are returned as an `elementList`

```javascript
// const $items = document.querySelectorAll('#list li'); // --> Vanilla JS
// const $items = $('#list li'); // --> jQuery
const $items = $qa('#list li');
```
