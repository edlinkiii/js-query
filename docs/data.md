# data(string, [string])
Used to get or set the value of a selected element.
Shortcut for element.dataset

### element.data(string)
Used to get the value of a specified data key for the selected element.
Returns the value of the element's data key (via passed string).

```javascript
// Vanilla // let myIndex = docuement.querySelector('#target').dataset['index'];
// jQuery  // let myIndex = $('#target').data('index');
let myIndex = $q('#target').data('index');
```

### element.data(string, string)
Used to set the value of a specified data key for the selected element.
Returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').dataset['index'] = 1;
// jQuery  // $('#target').data('index', 1);
$q('#target').data('index', 1);
```

### NodeList.data(string, string)
Used to set the value of a specified data key for each of the selected element in a NodeList.
Returns the NodeList.

```javascript
// Vanilla // docuement.querySelectorAll('.target').forEach(n => n.dataset['index'] = 1);
// jQuery  // $('.target').data('index', 1);
$qa('.target').data('index', 1);
```
