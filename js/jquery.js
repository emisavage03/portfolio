// code generated with help from claude; optimizing variables and fixing hover initialization issue
// https://claude.ai/share/739c600c-213f-424d-b398-1b32780e0ff7

jQuery(document).ready(function($) {
    // Define hover pairs
    const hoverPairs = [
        { row: '.zaprow', div: '#zapgraphics' },
        { row: '.strudelwsrow', div: '#strudelws' },
        { row: '.lampshowrow', div: '#lampshowimg' },
        { row: '.heavytrafficrow', div: '#heavytrafficimg' },
        { row: '.mymotherschildrow', div: '#mmcgif' },
        { row: '.springfestrow', div: '#springfestgif' },
        { row: '.diszapsterrow', div: '#diszapsterimg' },
        { row: '.autvisrow', div: '#autvisgif' },
        { row: '.fuguerow', div: '#fuguegif' },
        { row: '.fishmusicrow', div: '#fishmusicimg' },
        { row: '.sheinfluentialrow', div: '#sheinfluentialimg' },
        { row: '.sheddingrow', div: '#sheddingimg' },
        { row: '.pinterestrow', div: '#pinterestartgif' }
    ];
    
    // Initially hide all images
    hoverPairs.forEach(function(pair) {
        $(pair.div).hide().addClass('invisible');
    });
    
    // Attach explicit mouseenter/mouseleave handlers
    hoverPairs.forEach(function(pair) {
        $(pair.row)
            .on('mouseenter', function() {
                $(pair.div).removeClass('invisible').show();
            })
            .on('mouseleave', function() {
                $(pair.div).addClass('invisible').hide();
            });
    });
});