$(function() {
    // ------------------------------------------------------- //
    // Navbar Sticky
    // ------------------------------------------------------ //
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > $(".top-bar").outerHeight()) {
            $("header.nav-holder.make-sticky").addClass("sticky");
            $("body").css("padding-top", "" + $("#navbar").outerHeight() + "px");
        } else {
            $("header.nav-holder.make-sticky").removeClass("sticky");
            $("body").css("padding-top", "0");
        }
    });

    // ------------------------------------------------------- //
    // Multi-level dropdown
    // ------------------------------------------------------ //

    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        $(this)
            .siblings()
            .toggleClass("show");

        if (!$(this)
            .next()
            .hasClass("show")
        ) {
            $(this)
                .parents(".dropdown-menu")
                .first()
                .find(".show")
                .removeClass("show");
        }
        $(this)
            .parents("li.nav-item.dropdown.show")
            .on("hidden.bs.dropdown", function(e) {
                $(".dropdown-submenu .show").removeClass("show");
            });
    });

    // ------------------------------------------------------- //
    // Scroll To
    // ------------------------------------------------------ //
    $(".scroll-to").on("click", function(e) {
        e.preventDefault();
        var full_url = this.href;
        var parts = full_url.split("#");
        var target = parts[1];

        if ($("header.nav-holder").hasClass("sticky")) {
            var offset = -80;
        } else {
            var offset = -180;
        }

        var offset = $("header.nav-holder").outerHeight();

        $("body").scrollTo($("#" + target), 800, {
            offset: -offset
        });
    });

    // ------------------------------------------------------- //
    // Tooltip Initialization
    // ------------------------------------------------------ //
    $('[data-toggle="tooltip"]').tooltip();

    // ------------------------------------------------------- //
    // Product Gallery Slider
    // ------------------------------------------------------ //
    function productDetailGallery() {
        $("a.thumb").on("click", function(e) {
            e.preventDefault();
            source = $(this).attr("href");
            $("#mainImage")
                .find("img")
                .attr("src", source);
        });

        for (i = 0; i < 3; i++) {
            setTimeout(function() {
                $("a.thumb")
                    .eq(i)
                    .trigger("click");
            }, 300);
        }
    }

    productDetailGallery();

    // ------------------------------------------------------- //
    // Customers Slider
    // ------------------------------------------------------ //
    $(".customers").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    // ------------------------------------------------------- //
    // Testimonials Slider
    // ------------------------------------------------------ //
    $(".testimonials").owlCarousel({
        items: 4,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    // ------------------------------------------------------- //
    // Homepage Slider
    // ------------------------------------------------------ //
    $(".homepage").owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        addClassActive: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
                loop: true
            }
        }
    });

    // ------------------------------------------------------- //
    // Adding fade effect to dropdowns
    // ------------------------------------------------------ //
    $(".dropdown").on("show.bs.dropdown", function() {
        $(this)
            .find(".dropdown-menu")
            .first()
            .stop(true, true)
            .fadeIn(100);
    });
    $(".dropdown").on("hide.bs.dropdown", function() {
        $(this)
            .find(".dropdown-menu")
            .first()
            .stop(true, true)
            .fadeOut(100);
    });

    // ------------------------------------------------------- //
    // Project Caroudel
    // ------------------------------------------------------ //
    $(".project").owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        addClassActive: true,
        lazyload: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1,
                loop: true
            }
        }
    });

    // ------------------------------------------------------- //
    // jQuery Counter Up
    // ------------------------------------------------------ //
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });

    // ------------------------------------------------------- //
    // click on the box activates the radio
    // ------------------------------------------------------ //
    $("#checkout").on(
        "click",
        ".box.shipping-method, .box.payment-method",
        function(e) {
            var radio = $(this).find(":radio");
            radio.prop("checked", true);
        }
    );

    // ------------------------------------------------------- //
    //  Bootstrap Select
    // ------------------------------------------------------ //
    $(".bs-select").selectpicker({
        style: "btn-light",
        size: 4
    });

    // ------------------------------------------------------- //
    //  Shop Detail Carousel
    // ------------------------------------------------------ //
    $(".shop-detail-carousel").owlCarousel({
        items: 1,
        thumbs: true,
        nav: false,
        dots: false,
        autoplay: true,
        thumbsPrerendered: true
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $("link#theme-stylesheet");
    $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
    var alternateColour = $("link#new-stylesheet");

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function() {
        if ($(this).val() !== "") {
            var theme_csspath = "css/style." + $(this).val() + ".css";

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, {
                expires: 365,
                path: document.URL.substr(0, document.URL.lastIndexOf("/"))
            });
        }

        return false;
    });

    if ($.cookie("theme_layout")) {
        $("body").addClass($.cookie("theme_layout"));
    }

    $("#layout").change(function() {
        if ($(this).val() !== "") {
            var theme_layout = $(this).val();

            $("body").removeClass("wide");
            $("body").removeClass("boxed");

            $("body").addClass(theme_layout);

            $.cookie("theme_layout", theme_layout, {
                expires: 365,
                path: document.URL.substr(0, document.URL.lastIndexOf("/"))
            });
        }
    });
});

function myOne() {
    document.getElementById("genone1").value = "";

    var numRan = Math.floor(Math.random() * 25);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genone1").appendVal(numRan);
}

function myThree() {
    document.getElementById("genthreeOne").value = "";

    document.getElementById("genthree2").value = "";

    document.getElementById("genthree3").value = "";

    var numRan = Math.floor(Math.random() * 9);
    var numRand = Math.floor(Math.random() * 9);
    var numRando = Math.floor(Math.random() * 9);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genthreeOne").appendVal(numRan);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genthree2").appendVal(numRand);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genthree3").appendVal(numRando);
}

function myFour() {
    document.getElementById("genfour1").value = "";

    document.getElementById("genfour2").value = "";

    document.getElementById("genfour3").value = "";

    document.getElementById("genfour4").value = "";

    var numRan = Math.floor(Math.random() * 9);
    var numRand = Math.floor(Math.random() * 9);
    var numRando = Math.floor(Math.random() * 9);
    var numDmm = Math.floor(Math.random() * 9);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfour1").appendVal(numRan);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfour2").appendVal(numRand);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfour3").appendVal(numRando);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfour4").appendVal(numDmm);
}

function myFive() {
    document.getElementById("genfive1").value = "";

    document.getElementById("genfive2").value = "";

    document.getElementById("genfive3").value = "";

    document.getElementById("genfive4").value = "";

    document.getElementById("genfive5").value = "";

    var numRan = Math.floor(Math.random() * 35);
    var numRand = Math.floor(Math.random() * 35);
    var numRando = Math.floor(Math.random() * 35);
    var numDmm = Math.floor(Math.random() * 35);
    var numRnn = Math.floor(Math.random() * 35);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfive1").appendVal(numRan);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfive2").appendVal(numRand);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfive3").appendVal(numRando);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfive4").appendVal(numDmm);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genfive5").appendVal(numRnn);
}

function mySix() {
    document.getElementById("gensix1").value = "";

    document.getElementById("gensix2").value = "";

    document.getElementById("gensix3").value = "";

    document.getElementById("gensix4").value = "";

    document.getElementById("gensix5").value = "";

    var numRan = Math.floor(Math.random() * 52);
    var numRand = Math.floor(Math.random() * 52);
    var numRando = Math.floor(Math.random() * 52);
    var numDmm = Math.floor(Math.random() * 52);
    var numRnn = Math.floor(Math.random() * 52);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#gensix1").appendVal(numRan);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#gensix2").appendVal(numRand);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#gensix3").appendVal(numRando);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#gensix4").appendVal(numDmm);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#gensix5").appendVal(numRnn);
}

function mySeven() {
    document.getElementById("genseven1").value = "";

    document.getElementById("genseven2").value = "";

    document.getElementById("genseven3").value = "";

    document.getElementById("genseven4").value = "";

    document.getElementById("genseven5").value = "";

    var numRan = Math.floor(Math.random() * 69);
    var numRand = Math.floor(Math.random() * 69);
    var numRando = Math.floor(Math.random() * 69);
    var numDmm = Math.floor(Math.random() * 69);
    var numRnn = Math.floor(Math.random() * 69);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genseven1").appendVal(numRan);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genseven2").appendVal(numRand);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genseven3").appendVal(numRando);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genseven4").appendVal(numDmm);

    $.fn.appendVal = function(TextToAppend) {
        return $(this).val($(this).val() + TextToAppend);
    };
    $("#genseven5").appendVal(numRnn);
}

var n = localStorage.getItem("on_load_counter");

if (n === null) {
    n = 0;
}

n++;

localStorage.setItem("on_load_counter", n);

document.getElementById("CounterVisitor").innerHTML = n;