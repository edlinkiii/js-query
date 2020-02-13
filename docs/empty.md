# empty()
Used to remove all child nodes of a selected element.
Shortcut for element.innerHTML = ''

### element.empty()
Removes the contents (eg, subtree) from the selected element.
Returns the selected element.

```javascript
// Vanilla // document.querySelector('#target').innerHTML = '';
// jQuery  // $('#target').empty();
$q('#target').empty();
```

### NodeList.empty()
Removes the contents (eg, subtree) from each of the selected elements of a NodeList.
Returns the NodeList.

```javascript
// Vanilla // document.querySelector('.target').forEach(n => n.innerHTML = '');
// jQuery  // $('.target').empty();
$qa('.target').empty();
```
