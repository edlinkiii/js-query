# $js(selector)
Used for selecting elements (eg, '#id' or '.class').
Shortcut for document.querySelectorAll()

### $js(selector)
When a valid selector is passed, all matching elements are returned as an `elementList`.

The key difference between `$js` and `$qa` (or `$q`) is that the `elementList` will be updated (against the passed selector) before executing any methods. This is handy, for example, if you add an element that matches your selector.

 Errors caused by passing an invalid selector to `$q` are also eliminated with `$js`.
 
```javascript
// const $items = document.querySelectorAll('#list li'); // --> Vanilla JS
// const $items = $('#list li'); // --> jQuery
const $items = $js('#list li');
```
