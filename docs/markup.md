# markup([string])
Used to set or retrieve the HTML of the selected element and the HTML nested inside it.
Shortcut for element.outerHTML

### element.markup()
Retrieves and returns an element's HTML and the HTML nested in it as a string.

```javascript
// docuement.querySelector('#target').outerHTML; // --> Vanilla JS
$q('#target').markup();
```

### element.markup(string)
Parses the passed string as HTML which replaces the selected element. Returns the element.

```javascript
// docuement.querySelector('#target').outerHTML = '<h1>Hello World</h1>'; // --> Vanilla JS
$q('#target').markup('<h1>Hello World</h1>');
```

### NodeList.markup(string)
Parses the passed string as HTML which replaces each of the the selected elements. Returns the NodeList.

```javascript
// docuement.querySelectorAll('.targets').forEach((el) => el.outerHTML = '<h1>Hello World</h1>'); // --> Vanilla JS
$qa('.targets').markup('<h1>Hello World</h1>');
```
