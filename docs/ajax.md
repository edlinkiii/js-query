# ajax(object)
Takes in an object of settings, used to make an XMLHttpRequest.

### object defaults
```javascript
const defaults = {
    url: null,
    type: 'GET',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
    },
    data: null,
    json: true,
    callback: (data) => { console.log(data); },
    error: (err) => { console.error(err); }
}
```

#### object.json
If `object.json` is set to `true` any data passed/received are automatically stringified/parsed as JSON.

#### object.callback
I tweaked `callback` so that it's not a typical `success` function. I had problems with getting empty `200` replies getting rejected as errors with jQuery.ajax().
