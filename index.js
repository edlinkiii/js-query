const clickHandler = ({target}) => {
    if(target.matches('li')) {
        target.removeClass('red').addClass('blue').toggleClass('bold');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    $q('#stuff').hide();

    $q('#place').html($q('p').parent().html()).find('p').prepend('stuff & ').append(' and some junk!').addClass('bold');

    $qa('ul li').addClass('red');

    $q('#type-it').val($q('#select-it').val());

    $q('#click-it').addEventListener('click', (e) => alert($q('#type-it').val()));

    $q('ul').on('click', clickHandler);

    setTimeout(() => { // remove listener after 10 seconds to prove it works...
        $q('ul').off('click', clickHandler);
    }, (10 * 1000));
});
