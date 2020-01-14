document.addEventListener('DOMContentLoaded', () => {

    $q('#stuff').hide();

    $q('#place').html($q('p').parent().html()).find('p').prepend('stuff & ').append(' and some junk!').addClass('bold');

    $qa('ul li').addClass('red');

    $q('#type-it').val($q('#select-it').val());

    $qa('ul li').forEach((li) => li.addEventListener('click', ({target}) => target.removeClass('red').addClass('blue').toggleClass('bold')));

    $q('#click-it').addEventListener('click', (e) => alert($q('#type-it').val()));

});
