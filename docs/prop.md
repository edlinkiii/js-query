# prop(string, [string])
Used to get or set the value of the specified property of a selected element.

### element.prop(string)
Used to get the value of a specified property for the selected element.
Returns the value of the element's property (via passed string).

```javascript
// Vanilla // let myType = docuement.querySelector('#target')['type'];
// jQuery  // let myType = $('#target').prop('type');
let myType = $q('#target').prop('type');
```

### element.prop(string, string)
Used to set the value of a specified property for the selected element.
Returns the element.

```javascript
// Vanilla // docuement.querySelector('#target')['type'] = 'text';
// jQuery  // $('#target').prop('type', 'text');
$q('#target').prop('type', 'text');
```

### NodeList.prop(string, string)
Used to set the value of a specified property for each of the selected element in a NodeList.
Returns the NodeList.

```javascript
// Vanilla // docuement.querySelectorAll('.target').forEach(n => n['type'] = 'text');
// jQuery  // $('.target').prop('type', 'text');
$qa('.target').prop('type', 'text');
```
