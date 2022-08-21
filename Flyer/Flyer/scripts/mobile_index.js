/* VARIÁVEIS PARA O HEADER */
let $btnShow = document.getElementById('btn-show');
let $btnClose = document.getElementById('btn-close');
let $btnMap = document.getElementById('btn-map');
let $btnList = document.getElementById('btn-list');
let $btnHome = document.getElementById('btn-home');
let $btnFav = document.getElementById('btn-fav');
let $btnPromo = document.getElementById('btn-promo');
let $btnConfig = document.getElementById('btn-config');
let $btnGps = document.getElementById('btn-gps');
let $btnSearch = document.getElementById('btn-search');
let $btnAll = document.querySelectorAll('button');

/* VARIÁVEIS PARA OS FILTROS */

let $filtersMenu = document.getElementById("filters-menu");
let $filters = document.getElementsByClassName('filters');
let $subFilters = document.getElementsByClassName('sub-filters');
var index = document.querySelectorAll(".filters"); 
var subIndex = document.querySelectorAll(".sub-filters li");


/* FUNÇÕES PARA OS BOTÕES DO HEADER */

/* $btnAll.forEach(function ($btn) {
    $btn.addEventListener("click", caller);
    function caller() {
        for (var i_btn = 6; i_btn < $btnAll.length; i_btn++) {
            if (Array.from($btnAll).indexOf($btn) > 5) {
                if ($btnAll[i_btn].style.color = "silver") {
                    $btnAll[Array.from($btnAll).indexOf($btn)].style.color = "cornflowerblue";
                }
            }
        }
    }
}); */

function menuExpand() {
    if ($filtersMenu.style.display == "block"){
        $filtersMenu.style.display = "none";
        $btnShow.style.display = "block";
        $btnClose.style.display = "none";
    }
    else {
        $filtersMenu.style.display = "block";
        $btnShow.style.display = "none";
        $btnClose.style.display = "block";
    }
}
$btnShow.onclick = menuExpand;
$btnClose.onclick = menuExpand;

function btnMapSelected(){
    if (document.getElementsById('main-map').style.display == "block"){
        document.getElementsById('main-map').style.display = "none";
    }
    else {
        document.getElementsById('list').style.display = "block";
    }
}
$btnMap.onclick = btnMapSelected;

function btnListSelected(){
    if (document.getElementsById('list').style.display == "block"){
        document.getElementsById('main-map').style.display = "none";
    }
    else {
        document.getElementsById('list').style.display = "block";
    }
}
$btnList.onclick = btnListSelected;

function btnGpsSelected(){
    if ($btnGps.style.color == "cornflowerblue"){
        $btnGps.style.color = "silver";
        document.getElementById('details').innerHTML = "GPS DESABILITADO";
    }
    else {
        $btnGps.style.color = "cornflowerblue";
        document.getElementById('details').innerHTML = "GPS HABILITADO";
    }
 }
$btnGps.onclick = btnGpsSelected;

/* FUNÇÕES PARA OS FILTROS E SUB-FILTROS */

function subFiltersExpand(event){
    for ( j = 0; j < $filters.length; j++ ){
        if($subFilters[Array.from(index).indexOf(event.target)].style.display == "block"){
            for ( i = 0; i < $filters.length; i++ ){
                $subFilters[i].style.display = "none";
            }            
        }
        else {
            $subFilters[Array.from(index).indexOf(event.target)].style.display = "block";            
        }
    }
}

index.forEach(function (filterSelect) {
    filterSelect.addEventListener("click", subFiltersExpand);
});

/* subIndex.forEach(function (subFilterSelect) {
    subFilterSelect.addEventListener("click", subFilterItem);
}); */
