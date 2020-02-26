# yPixels([int|string])
Used to set or retrieve the height of the selected element.

### element.yPixels()
Retrieves and returns the element's height [int] in pixels.

```javascript
// Vanilla // let targetHeight = docuement.querySelector('#target').offsetHeight;
// jQuery  // let targetHeight = $('#target').height();
let targetHeight = $q('#target').yPixels();
```

### element.yPixels(int)
Sets the element's height and returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').style.height = 123 + 'px';
// jQuery  // $('#target').height(123);
$q('#target').yPixels(123);
```

### element.yPixels(string)
Sets the element's height and returns the element.

```javascript
// Vanilla // docuement.querySelector('#target').style.height = '123px';
// jQuery  // $('#target').height('123px');
$q('#target').yPixels('123px');
```
