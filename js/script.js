$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 200});
   $('.tap-target').tapTarget('open');
    $(".button-collapse").sideNav();
   $('.button-collapse').sideNav({
menuWidth: 300, // Default is 300
edge: 'right', // Choose the horizontal origin
closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
draggable: true // Choose whether you can drag to open on touch screens
}
);

});