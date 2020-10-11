window.addEventListener('load', function() {
    console.log('All assets are loaded');
});

$("#icon-menu").click(function(){
    $("#navbar").toggle(500);
});

$("#close-navbar").click(function(){
    $("#navbar").toggle(500);
});

$("body").on("click",".question",function(){
    const resposeId = $(this).attr("data-target");
    $(`#${resposeId}`).toggle(500);
    $(this).find('i').toggleClass("icon-Hartman-icons_arrow-up-bold");
})
