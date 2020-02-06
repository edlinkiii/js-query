# show()
Used to make selected element(s) visible.
Shortcut for element.style.display = 'block'

### element.show()
Sets the element's display property to it's default type (eg, block). Returns the element.

```javascript
// docuement.querySelector('#showThis').style.display = 'none'; // --> Vanilla JS
// $('#showThis').show(); // --> jQuery
$q('#showThis').show();
```

### NodeList.show()
Sets the display property to the default type for each of the elements in the NodeList. Returns the NodeList.

```javascript
// docuement.querySelectorAll('.showThese').forEach((el) => el.style.display = 'block'); // --> Vanilla JS
// $('.showThese').show(); // --> jQuery
$qa('.showThese').show();
```
