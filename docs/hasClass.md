# hasClass(string)
Used to determine if a selected element has a specific class.
Shortcut for element.classList.contains(string)

### element.hasClass(string)
Tests the selected element to see if it's class list includes the passed string.
Returns a `Boolean`

```javascript
// Vanilla // let isDisabled = docuement.querySelector('#target').classList.contains('disabled');
// jQuery  // let isDisabled = $('#target').hasClass('disabled');
let isDisabled = $q('#target').hasClass('disabled');
```
