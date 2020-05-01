# JS Query

### A few little cheats for those trying to become _jQuery_-free.

It's not a very extensive replacement for _jQuery_, just a few things my projects have used the most.

I have nothing against _jQuery_, I have been putting this together while actually learning _real_ "Vanilla" JavaScript. I will continue to add to it as I find use for additions, but probably not just to add them. [Here's an article I wrote about it.](https://dev.to/edlinkiii/refactoring-jquery-2klg)

## Versions
### v1.0
* First 'official' version
### v1.1
* All methods will be called against static methods in a class, rather than having all of the logic as part of the prototype code.
* A new selection method [`$js(selector)`](./docs/$js.md) has been added that actually creates an object (instance of the above mentioned class) with its own methods that are linked to the same static methods. The advantage here is that we are now able to update our selected element(s) before executing a method - which makes it feel even more like _jQuery_.

#### Usage Hints
```javascript
// $('#id').hide(); // jQuery
$q('#id').hide(); // js-query

// let that = $('.this-class:eq(1) .that') // jQuery
let that = $qa('.this-class')[1].find('.that') // js-query

// Chainable and completely interchangeable with Vanilla JavaScript
let el = document.getElementById('abc123');
el.html('Hello World').addClass('red').toggleClass('bold');
```

#### Caveats
Unlike jQuery, document.querySelector is **very** strick about beginning an element's id with a letter.
