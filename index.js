document.addEventListener('DOMContentLoaded', () => {
    $q('#stuff').hide();

    $q('#place').html($q('p').parent().html()).find('p').prepend('stuff & ').append(' and some junk!').addClass('bold');

    $qa('ul li').addClass('red');

    $q('#type-it').val($q('#select-it').val());

    $q('#click-it').addEventListener('click', (e) => alert($q('#type-it').val()));
});

$q('ul').on('click', 'li', (e) => e.target.removeClass('red').addClass('blue').toggleClass('bold'));

setTimeout(() => {
    $q('ul').off('click', 'li');
}, 10000);
