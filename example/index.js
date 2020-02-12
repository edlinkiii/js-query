$q(document).ready(() => {
    $q('#stuff').hide();

    $q('#place').html($q('p').parent().html()).find('p').prepend('stuff & ').append(' and some junk!').addClass('bold');

    $qa('ul li').addClass('red');

    let $secondLi = $qa('ul li')[1];

    let $nextLi = $secondLi.next().addClass('purple');

    let $prevLi = $secondLi.prev().addClass('ital');

    $q('#type-it').val($q('#select-it').val());

    $q('#click-it').addEventListener('click', (e) => alert($q('#type-it').val()));

    $q('ul').append('<li id="wtf">wft?</li>');
    
    $qa('ul li')[4].after('<li>anther one!</li>').addClass('blue');

    // $qa('ul li').hide();

    $q('#stuff').markup('<h6>A new thing!</h6>');

    let el = document.createElement('p');
    el.text('Hi there!');

    $q('ul').css('border', '1px solid yellow').css('border-radius', '5px');
    console.log($q('ul').css('border-bottom-color'));

    $secondLi.siblings().addClass('green');

    console.log($q('#sixth').parents());
    console.log($q('#sixth').parents('ul'));

    console.log($q('#sixth').closest());
    console.log($q('#sixth').closest('body'));

    console.log($q('#junk').kids());
    console.log($q('#junk').firstKid());
    console.log($q('#junk').lastKid());
    console.log($q('ul').kids('.red'));

    console.log($q('li.red').siblings());
    console.log($q('li.red').siblings('.green'));

    $secondLi.remove();

    $q().create('p').text('All new element!').insertAfter('#junk').addClass('my-class');

    $q('#junk').clone().attr('id','moreJunk').appendTo('body').empty();

    $qa('#junk li').filter('.blue').forEach((el) => el.removeClass('blue'));

    // console.log($qa('#junk > li').after('<li>...</li>').css('color','turquoise'));
    console.log($q().create('li').text('...').insertAfter('#junk > li').css('color','turquoise'));
});

$q('ul').on('click', 'li', (e) => e.target.removeClass('red').addClass('blue').toggleClass('bold'));

$q(document).on('click','#type-it',  (e) => console.log('click', e.target.value));
$q(document).on('click','#type-it',  (e) => console.log('click(2)', e.target.value));
$q(document).on('focus','#type-it',  (e) => console.log('focus', e.target.value));
$q(document).on('blur','#type-it',   (e) => console.log('blur', e.target.value));
$q(document).on('change','#type-it', (e) => console.log('change', e.target.value));
$q(document).on('input','#type-it',  (e) => console.log('input', e.target.value));

setTimeout(() => {
    // $qa('ul li').toggle();
    $q('#type-it').click();
    $q('#type-it').focus();
    $q('#type-it').blur();
    $q('#type-it').change();
    $q('ul').off('click', 'li');
}, 5000);

