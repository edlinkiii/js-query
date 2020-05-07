# JS Query
### A few little cheats for those trying to become _jQuery_-free.
It's not a very extensive replacement for _jQuery_, just a few things my projects have used the most.

I have nothing against _jQuery_, I have been putting this together while actually learning _real_ "Vanilla" JavaScript. I will continue to add to it as I find use for additions, but probably not just to add them. [Here's an article I wrote about it.](https://dev.to/edlinkiii/refactoring-jquery-2klg)

## Versions
### v1.0
* First 'official' version
* Write-up: [My First Release: JS Query](https://dev.to/edlinkiii/my-first-release-1p67)
### v1.0.1
* Added .trigger(eventType)
### v1.1
* Added .hasFocus()
* Added .isDescendant(element)
* Added .isDirectDescendant(element)
* Added .isChild(element)
* Added .isParent(element)
* Added .replace(element)
* Added .replaceWith(element)

## Usage
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
