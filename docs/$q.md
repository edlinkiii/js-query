# $q([selector])
Used for selecting a single element (eg, '#id').
Shortcut for document.querySelector()

### $q()
When no selector is passed, `document` is returned.

### $q(selector)
When a valid selector is passed, the selected element is returned.
If an element is not found matching the selector, `null` is returned.
If multiple matching elements exist, only the first one is returned.

```javascript
// Vanilla // const $list = document.querySelector('#list');
// jQuery  // const $list = $('#list');
const $list = $q('#list');
```
