# toggle()
Used to make hidden selected element(s) visible.
Shortcut for element.style.display = 'block'

Used to make visible selected element(s) hidden.
Shortcut for element.style.display = 'none'

### element.toggle()
Sets the element's display property to it's default type (eg, block) if it is none, otherwise it is set to none. Returns the element.

```javascript
// docuement.querySelector('#toggleThis').style.display = (docuement.querySelector('#toggleThis').style.display !== 'none') ? 'none' : 'block'; // --> Vanilla JS
// $('#toggleThis').toggle(); // --> jQuery
$q('#toggleThis').toggle();
```

### NodeList.toggle()
Sets the element's display property to it's default type (eg, block) if it is none, otherwise it is set to none, for each of the elements in the NodeList. Returns the NodeList.

```javascript
// docuement.querySelectorAll('.toggleThese').forEach((el) => el.style.display = (el.style.display !== 'none') ? 'none' : 'block'); // --> Vanilla JS
// $('.toggleThese').toggle(); // --> jQuery
$qa('.toggleThese').toggle();
```
