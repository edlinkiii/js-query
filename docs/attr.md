# attr(string, [string])
Used to get or set the value of a specified attribute for the selected element.
Shortcut for element.getAttribute && element.setAttribute

### element.attr(string)
Used to get the value of a specified attribute for the selected element.
Returns the value of the element's data key (via passed string).

```javascript
// Vanilla // let myId = docuement.querySelector('#target').getAttribute('id');
// jQuery  // let myId = $('#target').attr('id');
let myId = $q('#target').attr('id');
```

### element.attr(string, string)
Used to set the value of a specified attribute for the selected element.
Returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').setAttribute('id', 'junk');
// jQuery  // $('#target').attr('id', 'junk');
$q('#target').attr('id', 'junk');
```

### NodeList.attr(string, string)
Used to set the value of a specified attribute for each of the selected elements in a NodeList.
Returns the NodeList.

```javascript
// Vanilla // docuement.querySelectorAll('.target').forEach(n => n.setAttribute('id', 'junk');
// jQuery  // $('.target').attr('id', 'junk');
$qa('.target').attr('id', 'junk');
```
