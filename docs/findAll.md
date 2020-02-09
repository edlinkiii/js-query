# findAll(selector)
Used for selecting a multiple descendant elements (eg, '.class') from a previously selected element.
Shortcut for el.querySelectorAll()

### element.findAll(selector)
When a valid selector is passed, all matching elements are returned as an `elementList`
If an element is not found matching the selector, `null` is returned.

```javascript
// const $items = $el.querySelectorAll('#list li'); // --> Vanilla JS
// const $items = $el.findAll('#list li'); // --> jQuery
const $items = $el.findAll('#list li');
```
