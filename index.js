document.addEventListener('DOMContentLoaded', () => {
    $q('#stuff').$hide();

    $q('#place').$html($q('p').$parent().$html()).$find('p').$prepend('stuff & ').$append(' and some junk!').$addClass('bold');

    $qa('ul li').$addClass('red');

    let $secondLi = $qa('ul li')[1];

    let $nextLi = $secondLi.$next().$addClass('purple');

    let $prevLi = $secondLi.$prev().$addClass('ital');

    $q('#type-it').$val($q('#select-it').$val());

    $q('#click-it').addEventListener('click', (e) => alert($q('#type-it').$val()));

    $q('ul').$append('<li>wft?</li>');
    
    $qa('ul li')[4].$after('<li>anther one!</li>').$addClass('blue');

    $q('#stuff').$markup('<h6>A new thing!</h6>');

    let el = document.createElement('p');
    el.innerHTML = 'Hi there!';

    $q('ul').$before(el);
});

$q('ul').$on('click', 'li', (e) => e.target.$removeClass('red').$addClass('blue').$toggleClass('bold'));

$q(document).$on('click','#type-it',  (e) => console.log('click', e.target.value));
$q(document).$on('click','#type-it',  (e) => console.log('click(2)', e.target.value));
$q(document).$on('focus','#type-it',  (e) => console.log('focus', e.target.value));
$q(document).$on('blur','#type-it',   (e) => console.log('blur', e.target.value));
$q(document).$on('change','#type-it', (e) => console.log('change', e.target.value));
$q(document).$on('input','#type-it',  (e) => console.log('input', e.target.value));

setTimeout(() => {
    $q('#type-it').$click().$focus().$blur().$change();
    $q('ul').$off('click', 'li');
}, 5000);
