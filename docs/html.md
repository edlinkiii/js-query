# html([string])
Used to set or retrieve the HTML nested within a selected element.
Shortcut for element.innerHTML

### element.html()
Retrieves and returns the HTML nested within an element as a string.

```javascript
// docuement.querySelector('#target').innerHTML; // --> Vanilla JS
// $('#target').html(); // --> jQuery
$q('#target').html();
```

### element.html(string)
Parses the passed string as HTML and nests it inside the selected element. Returns the element.

```javascript
// docuement.querySelector('#target').innerHTML = '<h1>Hello World</h1>'; // --> Vanilla JS
// $('#target').html('<h1>Hello World</h1>'); // --> jQuery
$q('#target').html('<h1>Hello World</h1>');
```

### NodeList.html(string)
Parses the passed string as HTML and nests it inside each of the elements in the NodeList. Returns the NodeList.

```javascript
// docuement.querySelectorAll('.targets').forEach((el) => el.innerHTML = '<h1>Hello World</h1>'); // --> Vanilla JS
// $('.targets').html('<h1>Hello World</h1>'); // --> jQuery
$qa('.targets').html('<h1>Hello World</h1>');
```
