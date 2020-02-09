# text([string])
Used to set or retrieve the text of the selected element.
Shortcut for element.textContent

### element.text()
Retrieves and returns the element's text.

```javascript
// docuement.querySelector('#target').textContent; // --> Vanilla JS
// $('#target').text(); // --> jQuery
$q('#target').text();
```

### element.text(string)
Sets the element's text and returns the element.

```javascript
// docuement.querySelector('#target').textContent = 'Hello World'; // --> Vanilla JS
// $('#target').text('Hello World'); // --> jQuery
$q('#target').text('Hello World');
```

### NodeList.text(string)
Sets the text of each element in the NodeList. Returns the NodeList.

```javascript
// docuement.querySelectorAll('.hideThese').forEach((el) => el.textContent = 'Hello World'); // --> Vanilla JS
// $('.hideThese').text('Hello World'); // --> jQuery
$qa('.hideThese').text('Hello World');
```
