# ready(function)
Used to prevent JavaScript code from running before the DOM is loaded and ready.

### ready(function)
A function is passed that is executed as soon as it is safe.

```javascript
// jQuery // $(document).ready(func);
// jQuery // $(document).ready(function() { /* your code here... */ });
$q().ready(func);
$q().ready(() => { /* your code here... */ });
```
