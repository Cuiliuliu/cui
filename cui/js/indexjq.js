$(function () {
    // $("#li1").on("mouseenter", function () {
    //     $("#ul").css("display", "block")
    // }).on("mouseleave", function () {
    //     $(".hideul1").on("mouseenter", function () {
    //         $(".hideul2").on("mouseleave", function () {
    //             $("#ul").css("display", "none")
    //         })
    //     })
    // })
    // $("#listbox").on("mouseleave", function () {
    //     $("#ul").css("display", "none")
    // })

    $("#listbox")
        .find("#li1")
        .mouseenter(function () {
            $("#ul1").fadeIn(200);
            $("#ul2,#ul3").slideUp(300, function () {
                $("#ul1").slideDown(100);
            });
            $("#ul2")
                .find("#ulbox2")
                .slideUp(300, function () {
                    $("#ul1").find("#ulbox1").slideDown(300);
                });
            $("#ul3")
                .find("#ulbox3")
                .slideUp(300, function () {
                    $("#ul1").find("#ulbox1").slideDown(300);
                });
        })
        .mouseleave(function () {
            $("#ul1")
                .find("#ulbox1")
                .mouseleave(function () {
                    $("#ul1").fadeOut(200);
                });
        });

    $("#listbox")
        .find("#li2")
        .mouseenter(function () {
            $("#ul2").fadeIn(200);
            $("#ul1,#ul3").slideUp(300, function () {
                $("#ul2").slideDown(100);
            });
            $("#ul1")
                .find("#ulbox1")
                .slideUp(300, function () {
                    $("#ul2").find("#ulbox2").slideDown(300);
                });
            $("#ul3")
                .find("#ulbox3")
                .slideUp(300, function () {
                    $("#ul2").find("#ulbox2").slideDown(300);
                });
        })
        .mouseleave(function () {
            $("#ul2")
                .find("#ulbox2")
                .mouseleave(function () {
                    $("#ul2").fadeOut(200);
                });
        });

    $("#listbox")
        .find("#li3")
        .mouseenter(function () {
            $("#ul3").fadeIn(200);
            $("#ul1,#ul2").slideUp(300, function () {
                $("#ul3").slideDown(100);
            });
            $("#ul1")
                .find("#ulbox1")
                .slideUp(300, function () {
                    $("#ul3").find("#ulbox3").slideDown(300);
                });
            $("#ul2")
                .find("#ulbox2")
                .slideUp(300, function () {
                    $("#ul3").find("#ulbox3").slideDown(300);
                });
        })
        .mouseleave(function () {
            $("#ul3")
                .find("#ulbox3")
                .mouseleave(function () {
                    $("#ul3").fadeOut(200);
                });
        });

    $("#headerbox").mouseenter(function () {
        $("#ul1").fadeOut(200);
        $("#ul2").fadeOut(200);
        $("#ul3").fadeOut(200);
        $("#boxul").find("#bg").fadeOut(300);
    });

    // $("#ulbox1").mouseenter(function () {
    //     leave = false
    //     alert(leave)
    // })
    // $("#ulbox2").mouseenter(function () {
    //     leave = false
    // })
    // $("#ulbox3").mouseenter(function () {
    //     leave = false
    // })

    //透明背景动画
    $("#listbox")
        .find("#li1")
        .mouseenter(function () {
            $("#boxul").fadeIn(300, function () {
                $("#boxul").find("#bg").fadeIn(300);
            });
        })
        .mouseleave(function () {
            $("#ul1")
                .find("#ulbox1")
                .mouseenter(function () {
                    $("#li1,#li2,#li3").mouseenter(function () {
                        // $("#boxul").stop()
                        $("#boxul").find("#bg").stop();
                        // $("#boxul").css("display", "block")
                    });
                })
                .mouseleave(function () {
                    $("#boxul").find("#bg").fadeOut(200);
                    $("#boxul").slideUp(200);
                });
            $("#headerbox").mouseleave(function () {
                $("#li1,#li2,#li3").mouseenter(function () {
                    $("#boxul").fadeIn(200);
                });
            });
        });

    $("#listbox")
        .find("#li2")
        .mouseenter(function () {
            $("#boxul").fadeIn(300, function () {
                $("#boxul").find("#bg").fadeIn(300);
            });
        })
        .mouseleave(function () {
            $("#ul2")
                .find("#ulbox2")
                .mouseenter(function () {
                    $("#li1,#li2，#li3").mouseenter(function () {
                        // $("#boxul").stop()
                        $("#boxul").find("#bg").stop();
                        // $("#boxul").css("display", "block")
                    });
                })
                .mouseleave(function () {
                    $("#boxul").find("#bg").fadeOut(200);
                    $("#boxul").slideUp(200);
                });
            $("#headerbox").mouseleave(function () {
                $("#li1,#li2,#li3").mouseenter(function () {
                    $("#boxul").fadeIn(200);
                });
            });
        });

    $("#listbox")
        .find("#li3")
        .mouseenter(function () {
            $("#boxul").fadeIn(300, function () {
                $("#boxul").find("#bg").fadeIn(300);
            });
        })
        .mouseleave(function () {
            $("#ul3")
                .find("#ulbox3")
                .mouseenter(function () {
                    $("#li3,#li2,#li1").mouseenter(function () {
                        // $("#boxul").stop()
                        $("#boxul").find("#bg").stop();
                        // $("#boxul").css("display", "block")
                    });
                })
                .mouseleave(function () {
                    $("#boxul").find("#bg").fadeOut(200);
                    $("#boxul").slideUp(200);
                });
            $("#headerbox").mouseleave(function () {
                $("#li1,#li2,#li3").mouseenter(function () {
                    $("#boxul").fadeIn(200);
                });
            });
        });
    var oUl = $(".play").find("ul");
    var oLi = $(".play").find("ul li");
    var oBtns = $("ol li");
    var iNow = 0;
    var timer = null;
    oBtns.mouseenter(function () {
        clearInterval(timer);
        iNow = $(this).index();
        updown();
    }).mouseleave(function () {
        timer = setInterval(function () {
            iNow++;
            updown();
        }, 2000);
    });

    oUl.mouseenter(function () {
        clearInterval(timer);
    });
    oUl.mouseleave(function () {
        timer = setInterval(function () {
            iNow++;
            updown();
        }, 2000);
    });

    timer = setInterval(function () {
        iNow++;
        updown();
    }, 2000);

    function updown() {
        oBtns.removeClass("active").eq(iNow).addClass("active");

        if (iNow == oBtns.size()) {
            oBtns.eq(0).addClass("active");
        }

        oUl.animate({
                left: iNow * -1519.2,
            },
            500,
            function () {
                if (iNow == oBtns.size()) {
                    iNow = 0;
                    oUl.css("top", 0);
                }
            }
        );
    }
});