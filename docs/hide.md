# hide()
Used to prevent selected element(s) from being visible.
Shortcut for element.style.display = 'none'

### element.hide()
Sets the element's display property to none. Returns the element.

```javascript
// docuement.querySelector('#hideThis').style.display = 'none'; // --> Vanilla JS
// $('#hideThis').hide(); // --> jQuery
$q('#hideThis').hide();
```

### NodeList.hide()
Sets the display property to none for each of the elements in the NodeList. Returns the NodeList.

```javascript
// docuement.querySelectorAll('.hideThese').forEach((el) => el.style.display = 'none'); // --> Vanilla JS
// $('.hideThese').hide(); // --> jQuery
$qa('.hideThese').hide();
```
