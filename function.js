
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > 100) {
            $("#nav2").css("position", "sticky");
        }
        else {
            $("#nav2.n1").css("position", "relative");
            // $("#nav2.n1").css("top","10px");
        }
        if (scroll < 1150) {
            $(".n2 ul li a").css("color", "white");
            $("#nav2 .n1").css("color", "white");
        }
        else {
            $(".n2 ul li a").css("color", "black");
            $("#nav2 .n1").css("color", "black");
        }
        if (scroll > 2200) {
            $("#mac2 .para2").css("animation", "slide-up 2s");
            $("#mac2 .para3").css("animation", "slide-up 2s");
        }
        else {
            $("#mac2 .para2").css("animation", "none");
            $("#mac2 .para3").css("animation", "none");
        }
        if (scroll > 4700) {
            $(".mac5 img").css("animation", "slide-up 2s");
        }
        else {
            $(".mac5 img").css("animation", "none");
        }
        if (scroll > 6000) {
            $(".mac6 .n1").css("animation", "slide-up 2s");
            $(".mac6 .n2").css("animation", "slide-up 2s");
        }
        else {
            $(".mac6 .n1").css("animation", "none");
            $(".mac6 .n2").css("animation", "none");
        }
        if (scroll > 6100) {
            $(".mac6 .n3").css("animation", "slide-up 2.1s");
            $(".mac6 .n4").css("animation", "slide-up 2.1s");
        }
        else {
            $(".mac6 .n3").css("animation", "none");
            $(".mac6 .n4").css("animation", "none");
        }
        if (scroll > 6200) {
            $(".mac6 .n5").css("animation", "slide-up 2.4s");
            $(".mac6 .n6").css("animation", "slide-up 2.4s");
        }
        else {
            $(".mac6 .n5").css("animation", "none");
            $(".mac6 .n6").css("animation", "none");
        }
        if (scroll > 6300) {
            $(".mac6 .n7").css("animation", "slide-up 2.7s");
            $(".mac6 .n8").css("animation", "slide-up 2.7s");
        }
        else {
            $(".mac6 .n7").css("animation", "none");
            $(".mac6 .n8").css("animation", "none");
        }
        if (scroll > 6400) {
            $(".mac6 .n9").css("animation", "slide-up 3s");
            $(".mac6 .n10").css("animation", "slide-up 3s");
        }
        else {
            $(".mac6 .n9").css("animation", "none");
            $(".mac6 .n10").css("animation", "none");
        }
        if (scroll > 7360) {
            $("#mac7 img").css("animation", "slide-up 2s");
        }
        else {
            $("#mac7 img").css("animation", "none");
        }
        if (scroll > 9125) {
            $(".mac8 img").css("animation", "slide-up 2s");
        }
        else {
            $(".mac8 img").css("animation", "none");
        }
        if (scroll > 10600) {
            $("#mac9 img").css("animation", "slide-up 2s");
        }
        else {
            $("#mac9 img").css("animation", "none");
        }
        if (scroll > 11800) {
            $("#mac10").css("animation", "slide-up 2s");
        }
        else {
            $("#mac10").css("animation", "none");
        }
        if (scroll > 12600) {
            $("#mac11").css("animation", "slide-up 2s");
        }
        else {
            $("#mac11").css("animation", "none");
        }
        if (scroll > 13300) {
            $("#mac12").css("animation", "slide-up 2s");
        }
        else {
            $("#mac12").css("animation", "none");
        } if (scroll > 14425) {
            $("#mac13").css("animation", "slide-up 2s");
        }
        else {
            $("#mac13").css("animation", "none");
        }
        if (scroll > 15250) {
            $("#mac14").css("animation", "slide-up 2s");
        }
        else {
            $("#mac14").css("animation", "none");
        }
    })
})

