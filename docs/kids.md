# kids([selector])
Used to select the direct nested (child) elements of the selected element.

### element.kids()
Returns an `Array` of all elements nested in the selected element.

```javascript
// const $article = $paragraph.parentElement; // --> Vanilla JS
// const $article = $paragraph.parent(); // --> jQuery
const $article = $paragraph.parent();

// const $articleElements = $article.childNodes; // --> Vanilla JS
// const $articleElements = $article.children(); // --> jQuery
const $articleElements = $article.kids();
```

### element.kids(selector)
Returns an `Array` of all nested elements that match the passed selector.

```javascript
// const $paragraphs = $article.children('p'); // --> jQuery
const $paragraphs = $article.kids('p');
```
