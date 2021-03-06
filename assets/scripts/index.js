$(function(){
    function setHeiHeight() {
        $('#event').css({
            height: $(window).height()
        });
    }
    setHeiHeight();
    $(window).resize( setHeiHeight );

    $('.invite-btn').click( function() {
        $('#invite_form').removeClass('none');
    });

    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
    $(document).foundation('reveal', 'reflow');
});