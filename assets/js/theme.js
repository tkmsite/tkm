// Custom theme code
    $(document).ready(function(){
        window.setTimeout(function(){if($("#modal-1")){
        $("#modal-1").modal('show');}},5000)
    });
function clicktocopy(e){
    var mynum = e.id;
    navigator.clipboard.writeText(mynum);
}


if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}
