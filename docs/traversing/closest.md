# closest([selector])
Used to select a single ancestral element of the selected element.

### element.closest()
Returns the element in which the selected element is nested.

```javascript
// const $article = $paragraph.parentElement; // --> Vanilla JS
// const $article = $paragraph.closest(); // --> jQuery
const $article = $paragraph.closest();
```

### element.closest(selector)
Returns the first element in which the selected element is nested that matches the passed selector.

```javascript
// const $section = $paragraph.closest('section'); // --> jQuery
const $section = $paragraph.closest('section');
```
