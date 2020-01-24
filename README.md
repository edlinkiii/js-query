# js-query

### A few little cheats for those trying to become _jQuery_-free.

It's not a very extensive replacement for _jQuery_, just a few things my projects have used the most.

I have nothing against _jquery_, I have been putting this together while actually learning _real_ "Vanilla" JavaScript. I will continue to add to it as I find use for additions, but probably not just to add them.

##### Update 23-01-2020
I'm not thrilled about it, but I have prefixed all of my function names with a **$** to keep everything _vanilla_ __and__ avoid colliding with in-built methods and properties, while being able to chain them together.

##### Examples
```javascript
$q('#stuff').$hide();
$q('#place').$html($q('p').$parent().$html()).$find('p').$prepend('stuff & ').$append(' and some junk!').$addClass('bold');
$qa('ul li').$addClass('red');
$q('ul').$append('<li>wft?</li>').$addClass('blue');
$q('#type-it').$click().$focus().$blur().$change();
$q('ul').$on('click', 'li', (e) => e.target.$removeClass('red').$addClass('blue').$toggleClass('bold'));
$q('ul').$off('click', 'li');
```
