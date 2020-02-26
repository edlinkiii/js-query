# xPixels([int|string])
Used to set or retrieve the width of the selected element.

### element.xPixels()
Retrieves and returns the element's width [int] in pixels.

```javascript
// Vanilla // let targetWidth = docuement.querySelector('#target').offsetWidth;
// jQuery  // let targetWidth = $('#target').width();
let targetWidth = $q('#target').xPixels();
```

### element.xPixels(int)
Sets the element's width and returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').style.width = 123 + 'px';
// jQuery  // $('#target').width(123);
$q('#target').xPixels(123);
```

### element.xPixels(string)
Sets the element's width and returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').style.width = '123px';
// jQuery  // $('#target').width('123px');
$q('#target').xPixels('123px');
```
