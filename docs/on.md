# on(event, selector, handler)
Used to create a _delegated_ event listener that is able to listen for events that happen on elements that are dynamically created after the listener.
Also, see [off(event, selector)](./off.md) 

### element.on(event, selector, handler)
Creates a delegated listener on the selected element which listens for the passed event to occur in the element's subtree on a element that matches the passed selector, then runs the passed handler function.

```javascript
// jQuery // $('#target').on('click', 'button', clickHandler);
$q('#target').on('click', 'button', clickHandler);
```

### document.on(event, selector, handler)
Creates a delegated listener on the entire document which listens for the passed event to occur in the DOM on a element that matches the passed selector, then runs the passed handler function.

```javascript
// jQuery // $(document).on('click', 'button', clickHandler);
$q().on('click', 'button', clickHandler);
```
