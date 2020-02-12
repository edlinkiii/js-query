# val([string])
Used to get or set the value of a selected element.
Shortcut for element.value

### element.val()
Used to get the value of the selected element.
Returns the element's value.

```javascript
// Vanilla // let myVal = docuement.querySelector('#target').value;
// jQuery  // let myVal = $('#target').val();
let myVal = $q('#target').val();
```

### element.val(string)
Used to set the value of the selected element to the passed string.
Returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').value = 'Hello World!';
// jQuery  // $('#target').val('Hello World!');
$q('#target').val('Hello World!');
```

### NodeList.val(string)
Used to set the value of each of the selected elements in a NodeList to the passed string.
Returns the NodeList.

```javascript
// Vanilla // docuement.querySelectorAll('.target').forEach(n => n.value = 'Hello World!');
// jQuery  // $('.target').val('Hello World!');
$qa('.target').val('Hello World!');
```
