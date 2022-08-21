/* PARA OS BOTÕES DE OPÇÃO DE BUSCA MUDAREM AO CLICAR */
$('.map-btn').click(function(){
    $('.map-btn').toggleClass('clicked');
});
$('.list-btn').click(function(){
    $('.list-btn').toggleClass('clicked');
});
$('.local-btn').click(function(){
    $('.local-btn').toggleClass('clicked');
});
$('.home-btn').click(function(){
    $('.home-btn').toggleClass('clicked');

    $('.fav-btn').removeClass('clicked');
    $('.notif-btn').removeClass('clicked');
    $('.settings-btn').removeClass('clicked');
});
$('.fav-btn').click(function(){
    $('.fav-btn').toggleClass('clicked');

    $('.home-btn').removeClass('clicked');
    $('.notif-btn').removeClass('clicked');
    $('.settings-btn').removeClass('clicked');
});
$('.notif-btn').click(function(){
    $('.notif-btn').toggleClass('clicked');

    $('.fav-btn').removeClass('clicked');
    $('.home-btn').removeClass('clicked');
    $('.settings-btn').removeClass('clicked');
});
$('.settings-btn').click(function(){
    $('.settings-btn').toggleClass('clicked');

    $('.fav-btn').removeClass('clicked');
    $('.notif-btn').removeClass('clicked');
    $('.home-btn').removeClass('clicked');
});

/* EXPANDIR FILTROS */ 
$('.btn-show').click(function(){
    $('#filters-menu').toggleClass('expand');
});
$('.btn-close').click(function(){
    $('#filters-menu').toggleClass('expand');
});

/* EXPANDIR SUB-FILTROS */ 
$('.filter-item1').click(function(){
    $('#filters-menu ul .sub-filter-item1').toggleClass('expand');
    $('#filters-menu ul li a .list1').toggleClass('turn');

    $('#filters-menu ul .sub-filter-item2').removeClass('expand');
    $('#filters-menu ul .sub-filter-item3').removeClass('expand');
    $('#filters-menu ul .sub-filter-item4').removeClass('expand');
    $('#filters-menu ul .sub-filter-item5').removeClass('expand');
    $('#filters-menu ul .sub-filter-item6').removeClass('expand');
    $('#filters-menu ul .sub-filter-item7').removeClass('expand');
});
$('.filter-item2').click(function(){
    $('#filters-menu ul .sub-filter-item2').toggleClass('expand');
    $('#filters-menu ul li a .list2').toggleClass('turn');

    $('#filters-menu ul .sub-filter-item1').removeClass('expand');
    $('#filters-menu ul .sub-filter-item3').removeClass('expand');
    $('#filters-menu ul .sub-filter-item4').removeClass('expand');
    $('#filters-menu ul .sub-filter-item5').removeClass('expand');
    $('#filters-menu ul .sub-filter-item6').removeClass('expand');
    $('#filters-menu ul .sub-filter-item7').removeClass('expand');
});
$('.filter-item3').click(function(){
    $('#filters-menu ul .sub-filter-item3').toggleClass('expand');
    $('#filters-menu ul li a .list3').toggleClass('turn');

    $('#filters-menu ul .sub-filter-item1').removeClass('expand');
    $('#filters-menu ul .sub-filter-item2').removeClass('expand');
    $('#filters-menu ul .sub-filter-item4').removeClass('expand');
    $('#filters-menu ul .sub-filter-item5').removeClass('expand');
    $('#filters-menu ul .sub-filter-item6').removeClass('expand');
    $('#filters-menu ul .sub-filter-item7').removeClass('expand');
});
$('.filter-item4').click(function(){
    $('#filters-menu ul .sub-filter-item4').toggleClass('expand');
    $('#filters-menu ul li a .list4').toggleClass('turn');

    $('#filters-menu ul .sub-filter-item1').removeClass('expand');
    $('#filters-menu ul .sub-filter-item2').removeClass('expand');
    $('#filters-menu ul .sub-filter-item3').removeClass('expand');
    $('#filters-menu ul .sub-filter-item5').removeClass('expand');
    $('#filters-menu ul .sub-filter-item6').removeClass('expand');
    $('#filters-menu ul .sub-filter-item7').removeClass('expand');
});
$('.filter-item5').click(function(){
    $('#filters-menu ul .sub-filter-item5').toggleClass('expand');
    $('#filters-menu ul li a .list5').toggleClass('turn');

    $('#filters-menu ul .sub-filter-item1').removeClass('expand');
    $('#filters-menu ul .sub-filter-item2').removeClass('expand');
    $('#filters-menu ul .sub-filter-item3').removeClass('expand');
    $('#filters-menu ul .sub-filter-item4').removeClass('expand');
    $('#filters-menu ul .sub-filter-item6').removeClass('expand');
    $('#filters-menu ul .sub-filter-item7').removeClass('expand');
});
$('.filter-item6').click(function(){
    $('#filters-menu ul .sub-filter-item6').toggleClass('expand');
    $('#filters-menu ul li a .list6').toggleClass('turn');
    
    $('#filters-menu ul .sub-filter-item1').removeClass('expand');
    $('#filters-menu ul .sub-filter-item2').removeClass('expand');
    $('#filters-menu ul .sub-filter-item3').removeClass('expand');
    $('#filters-menu ul .sub-filter-item4').removeClass('expand');
    $('#filters-menu ul .sub-filter-item5').removeClass('expand');
    $('#filters-menu ul .sub-filter-item7').removeClass('expand');
});
$('.filter-item7').click(function(){
    $('#filters-menu ul .sub-filter-item7').toggleClass('expand');
    $('#filters-menu ul li a .list7').toggleClass('turn');

    $('#filters-menu ul .sub-filter-item1').removeClass('expand');
    $('#filters-menu ul .sub-filter-item2').removeClass('expand');
    $('#filters-menu ul .sub-filter-item3').removeClass('expand');
    $('#filters-menu ul .sub-filter-item4').removeClass('expand');
    $('#filters-menu ul .sub-filter-item5').removeClass('expand');
    $('#filters-menu ul .sub-filter-item6').removeClass('expand');
});

/* PARA ESCONDER MENU SE CLICAR FORA DELE */
const $filtersMenu = $('#filters-menu');
$(document).mouseup(e => {
    if(!$filtersMenu.is(e.target)
    && $filtersMenu.has(e.target).length === 0)
    {
        $filtersMenu.removeClass('expand');
    }
});