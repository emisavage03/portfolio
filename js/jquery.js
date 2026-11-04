// code with help from claude; optimizing variables and fixing hover initialization issue
// https://claude.ai/share/739c600c-213f-424d-b398-1b32780e0ff7


jQuery(document).ready(function ($) {
    // Define hover pairs
    const hoverPairs = [
        { row: '#zaprow', div: '#zapgraphics' },
        { row: '#strudelwsrow', div: '#strudelws' },
        { row: '#lampshowrow', div: '#lampshowimg' },
        { row: '#heavytrafficrow', div: '#heavytrafficimg' },
        { row: '#mymotherschildrow', div: '#mmcgif' },
        { row: '#springfestrow', div: '#springfestgif' },
        { row: '#diszapsterrow', div: '#diszapsterimg' },
        { row: '#fuguerow', div: '#fuguegif' },
        { row: '#fishmusicrow', div: '#fishmusicimg' },
        { row: '#sheddingrow', div: '#sheddingimg' },
        { row: '#pinterestrow', div: '#pinterestartgif' }
    ];

    // Initially hide all images
    hoverPairs.forEach(function (pair) {
        $(pair.div).hide().addClass('invisible');
    });

    // Attach explicit mouseenter/mouseleave handlers
    hoverPairs.forEach(function (pair) {
        $(pair.row)
            .on('mouseenter', function () {
                $(pair.div).removeClass('invisible').show();
            })
            .on('mouseleave', function () {
                $(pair.div).addClass('invisible').hide();
            });
    });

    const hoverPairs2 = [
        { context: '.context1', content: '.content1' },
        { context: '.context2', content: '.content2' },
        { context: '.context3', content: '.content3' },
        { context: '.context4', content: '.content4' },
    ]

    hoverPairs2.forEach(function (pair) {
        $(pair.content)
            .on('mouseenter', function () {
                $(pair.context).addClass('look');
            })
            .on('mouseleave', function () {
                $(pair.context).removeClass('look');
            })

        $(pair.context)
            .on('mouseenter', function () {
                $(pair.content).addClass('look');
            })
            .on('mouseleave', function () {
                $(pair.content).removeClass('look');
            })

    });

    const hoverPairs3 = [
            { thumbnail: '#thumbnail1', project: '#title1' },
            { thumbnail: '#thumbnail2', project: '#title2' },
            { thumbnail: '#thumbnail3', project: '#title3' },
            { thumbnail: '#thumbnail4', project: '#title4' },
            { thumbnail: '#thumbnail5', project: '#title5' },
            { thumbnail: '#thumbnail6', project: '#title6' },
            { thumbnail: '#thumbnail7', project: '#title7' },
            { thumbnail: '#thumbnail8', project: '#title8' }
        ];

    hoverPairs3.forEach(function (pair) {
        $(pair.thumbnail)
            .on('mouseenter', function () {
                $(pair.project).hide();
            })
            .on('mouseleave', function () {
                $(pair.project).show();
            });




    });
});