# css(string[, string])
Used to get or set the a specific value of the selected element.
Shortcut for element.style

### element.css(string)
Used to get the computed CSS value of a specified property for the selected element.
Returns the requested value (via passed string).

```javascript
// Vanilla // let color = getComputedStyle(docuement.querySelector('#target'))['color'];
// jQuery  // let color = $('#target').css('color');
let color = $q('#target').css('color');
```

### element.css(string, string)
Used to set a specific CSS value of the selected element.
Returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').style['boderColor'] = 'red';
// jQuery  // $('#target').css('border-color', 'red');
$q('#target').css('border-color', 'red');
```

### NodeList.css(string, string)
Used to set a specific CSS value of each of the selected elements in a NodeList.
Returns the NodeList.

```javascript
// Vanilla // docuement.querySelectorAll('.target').forEach(n => n.style['boderColor'] = 'red');
// jQuery  // $('.target').css('border-color', 'red');
$qa('.target').css('border-color', 'red');
```
