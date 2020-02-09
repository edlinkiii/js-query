# find(selector)
Used for selecting a single descendant element (eg, '#id') from a previously selected element.
Shortcut for el.querySelector()

### element.find(selector)
When a valid selector is passed, the selected element is returned.
If an element is not found matching the selector, `null` is returned.
If multiple matching elements exist, only the first one is returned.

```javascript
// const $list = $el.querySelector('#list'); // --> Vanilla JS
// const $list = $el.find('#list'); // --> jQuery
const $list = $el.find('#list');
```
