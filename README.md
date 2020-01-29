# js-query

### A few little cheats for those trying to become _jQuery_-free.

It's not a very extensive replacement for _jQuery_, just a few things my projects have used the most.

I have nothing against _jquery_, I have been putting this together while actually learning _real_ "Vanilla" JavaScript. I will continue to add to it as I find use for additions, but probably not just to add them.

#### Usage Hints
```javascript
// $('#id').hide(); // jQuery
$q('#id').hide(); // js-query

// let that = $('.this-class:eq(1) .that') // jQuery
let that = $qa('.this-class')[1].find('.that') // js-query
```

#### Caveats
Unlike jQuery, document.querySelector is very strick about beginning an element's id with a letter.