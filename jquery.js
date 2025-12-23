// code generated with help from claude; optimizing variables and fixing hover initialization issue
// https://claude.ai/share/739c600c-213f-424d-b398-1b32780e0ff7

jQuery(document).ready(function($) {
    // Define hover pairs
    const hoverPairs = [
        { row: '.heavytrafficrow', img: '#heavytrafficimg' },
        { row: '.mymotherschildrow', img: '#mmcgif' },
        { row: '.springfestrow', img: '#springfestgif' },
        { row: '.diszapsterrow', img: '#diszapsterimg' },
        { row: '.autvisrow', img: '#autvisgif' },
        { row: '.fuguerow', img: '#fuguegif' },
        { row: '.fishmusicrow', img: '#fishmusicimg' },
        { row: '.sheinfluentialrow', img: '#sheinfluentialimg' },
        { row: '.sheddingrow', img: '#sheddingimg' },
        { row: '.pinterestrow', img: '#pinterestartgif' }
    ];
    
    // Initially hide all images
    hoverPairs.forEach(function(pair) {
        $(pair.img).hide().addClass('invisible');
    });
    
    // Attach explicit mouseenter/mouseleave handlers
    hoverPairs.forEach(function(pair) {
        $(pair.row)
            .on('mouseenter', function() {
                $(pair.img).removeClass('invisible').show();
            })
            .on('mouseleave', function() {
                $(pair.img).addClass('invisible').hide();
            });
    });
});