jQuery(document).ready(function($) {

        $('#heavytrafficimg').hide();
        $('#heavytraffic').hover(function() {
            $('#heavytrafficimg').removeClass("invisible").fadeToggle(200);
            $('#heavytrafficdesc').toggleClass("green");
    });

        $('#mmcgif').hide();
        $('#mymotherschild').hover(function() {
            $('#mmcgif').removeClass("invisible").fadeToggle(200);
            $('#mymotherschilddesc').toggleClass("green");
    });

        $('#springfestgif').hide();
        $('#springfest').hover(function() {
            $('#springfestgif').removeClass("invisible").fadeToggle(200);
            $('#springfestdesc').toggleClass("green");
    });

        $('#diszapsterimg').hide();
        $('#diszapster').hover(function () {
            $('#diszapsterimg').removeClass("invisible").fadeToggle(200);
            $('#diszapsterdesc').toggleClass("green");
     });

        $('#autvisgif').hide();
        $('#autvis').hover(function() {
            $('#autvisgif').removeClass("invisible").fadeToggle(200);
            $('#autvisdesc').toggleClass("green");
    });

        $('#fuguegif').hide();
        $('#fugue').hover(function() {
            $('#fuguegif').removeClass("invisible").fadeToggle(200);
            $('#fuguedesc').toggleClass("green");
    });

        $('#fishmusicimg').hide();
        $('#fishmusic').hover(function() {
            $('#fishmusicimg').removeClass("invisible").fadeToggle(200);
            $('#fishmusicdesc').toggleClass("green");
    });

        $('#sheinfluentialimg').hide();
        $('#sheinfluential').hover(function() {
            $('#sheinfluentialimg').removeClass("invisible").fadeToggle(200);
            $('#sheinfluentialdesc').toggleClass("green");
    });

        $('#sheddingimg').hide();
        $('#shedding').hover(function() {
            $('#sheddingimg').removeClass("invisible").fadeToggle(100);
            $('#sheddingdesc').toggleClass("green");
    });

        $('#pinterestartgif').hide();
        $('#pinterestart').hover(function() {
            $('#pinterestartgif').removeClass("invisible").fadeToggle(100);
            $('#pinterestdesc').toggleClass("green");
    });
        });