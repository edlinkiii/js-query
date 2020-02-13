# off(event, selector)
Used to remove matching _delegated_ event listeners.
Also, see [on(event, selector, handler)](./on.md) 

### element.off(event, selector)
Removes matching delegated listeners from the selected element.

```javascript
// jQuery // $('#target').off('click', 'button');
$q('#target').off('click', 'button');
```

### document.off(event, selector)
Removes matching delegated listeners from the document.

```javascript
// jQuery // $(document).off('click', 'button');
$q().off('click', 'button');
```
