window.onload = function () {

    var oHeader = document.getElementById("headerbox");
    var oList = document.getElementById("listbox");
    var oBoxul = document.getElementById("boxul");

    var oHeader2 = document.getElementById("headerbox2");
    var oList2 = document.getElementById("listbox2");
    var oBoxul2 = document.getElementById("boxul2");
    
    window.onscroll = function () {
        var h = document.documentElement.scrollTop || document.body.scrollTop;
        if (h >= 130) {
            // oHeader.style.display = 'none'
            // oHeader2.style.display = 'block'
            // oList.style.display = 'none'
            // oList2.style.display = 'block'
            // oBoxul.style.display = 'none'
            // oBoxul2.style.display = 'block'

            $("#headerbox").css("position", "fixed")
            $("#header").css("height", "50px")
            $("#header").find("div").css("height", "50px")
            $("#header").find(".iconfont").css("top", "20%")
            $("#header").find("span").css("top", "20%")
            $("#header").find("#as").css("top", "22%")


            $("#listbox").css("position", "fixed")
            $("#listbox").css("top", "50px")
            $("#listbox").find("#uul").css("height", "30px")
            $("#listbox").find("#uul").find("a").css("height", "30px")
            $("#listbox").find("a").css("fontSize", "14px")
            $("#listbox").find("a").css("lineHeight", "30px")
            $("#listbox").find(".iconfont").css("left", "62%")
            $("#listbox").find("#io1").css("left", "72%")
            $("#listbox").find("#io2").css("left", "72%")
            $("#listbox").find("#io3").css("left", "72%")
            $("#listbox").find(".iconfont").css("bottom", "20%")


            $("#boxul").css("position", "fixed")
            $("#boxul").css("top", "80px")
        } else if (h <= 130) {
            // oHeader.style.display = 'block'
            // oHeader2.style.display = 'none'
            // oList.style.display = 'block'
            // oList2.style.display = 'none'
            // oBoxul.style.display = 'block'
            // oBoxul2.style.display = 'none'
            $("#headerbox").css("position", "relative")
            $("#header").css("height", "80")
            $("#header").find("div").css("height", "80")
            $("#header").find(".iconfont").css("top", "31%")
            $("#header").find("span").css("top", "31%")
            $("#header").find("#as").css("top", "31%")

            $("#listbox").css("position", "relative")
            $("#listbox").css("top", "0px")
            $("#listbox").find("#uul").css("height", "50px")
            $("#listbox").find("a").css("fontSize", "18px")
            $("#listbox").find("a").css("lineHeight", "35px")
            $("#listbox").find(".iconfont").css("left", "45%")
            $("#listbox").find(".iconfont").css("bottom", "-40%")


            $("#boxul").css("position", "relative")
            $("#boxul").css("top", "0px")
        }
    }

    var oTb1 = document.getElementById("tb1")
    var oTb2 = document.getElementById("tb2")
    var oTb3 = document.getElementById("tb3")
    var oTb4 = document.getElementById("tb4")
    var oBr = document.getElementById("brand")
    var oAc1 = document.getElementById("active1");
    var oAc2 = document.getElementById("active2");
    var oAc3 = document.getElementById("active3");
    var oAc4 = document.getElementById("active4");
    var oMore = document.getElementById("more")
    var oMoreimg = document.getElementById("moreimg")
    var oMorea = document.getElementById("morea")

    var oTopra1 = document.getElementById("topra1");
    var oTopla1 = document.getElementById("topla1");
    var oMarkl = document.getElementById("markl");
    var oMarkr = document.getElementById("markr");
    var oTopla1img = document.getElementById("topla1img");
    var oTopra1img = document.getElementById("topra1img");
    var oTopla1a = document.getElementById("topla1a");
    var oTopra1a = document.getElementById("topra1a");

    var oBotra1 = document.getElementById("botra1");
    var oBotla1 = document.getElementById("botla1");
    var oBotca1 = document.getElementById("botca1");
    var oMarklb = document.getElementById("marklb");
    var oMarkrb = document.getElementById("markrb");
    var oMarkcb = document.getElementById("markcb");
    var oBotla1img = document.getElementById("botla1img");
    var oBotra1img = document.getElementById("botra1img");
    var oBotca1img = document.getElementById("botca1img");
    var oBotla1a = document.getElementById("botla1a");
    var oBotra1a = document.getElementById("botra1a");
    var oBotca1a = document.getElementById("botca1a");

    oMarkl.onmouseenter = function () {
        startMove(oMarkl, "opacity", 50)
    }
    oMarkl.onmouseleave = function () {
        startMove(oMarkl, "opacity", 0)
    }
    oMarkr.onmouseenter = function () {
        startMove(oMarkr, "opacity", 50)
    }
    oMarkr.onmouseleave = function () {
        startMove(oMarkr, "opacity", 0)
    }
    oTopra1.onmouseenter = function () {
        startMove(oTopra1img, "left", -40)
        startMove(oTopra1a, "opacity", 0)
    }
    oTopra1.onmouseleave = function () {
        startMove(oTopra1img, "left", -8)
        startMove(oTopra1a, "opacity", 100)
    }
    oTopla1.onmouseenter = function () {
        startMove(oTopla1img, "left", -40)
        startMove(oTopla1a, "opacity", 0)
    }
    oTopla1.onmouseleave = function () {
        startMove(oTopla1img, "left", -8)
        startMove(oTopla1a, "opacity", 100)
    }
    oMore.onmouseenter = function () {
        startMove(oMoreimg, "left", -40)
        startMove(oMorea, "opacity", 0)
    }
    oMore.onmouseleave = function () {
        startMove(oMorea, "opacity", 100)
        startMove(oMoreimg, "left", -8)

    }
    oMarklb.onmouseenter = function () {
        startMove(oMarklb, "opacity", 50)
    }
    oMarklb.onmouseleave = function () {
        startMove(oMarklb, "opacity", 0)
    }
    oMarkrb.onmouseenter = function () {
        startMove(oMarkrb, "opacity", 50)
    }
    oMarkrb.onmouseleave = function () {
        startMove(oMarkrb, "opacity", 0)
    }
    oMarkcb.onmouseenter = function () {
        startMove(oMarkcb, "opacity", 50)
    }
    oMarkcb.onmouseleave = function () {
        startMove(oMarkcb, "opacity", 0)
    }
    oBotra1.onmouseenter = function () {
        startMove(oBotra1img, "left", -40)
        startMove(oBotra1a, "opacity", 0)
    }
    oBotra1.onmouseleave = function () {
        startMove(oBotra1img, "left", -8)
        startMove(oBotra1a, "opacity", 100)
    }
    oBotla1.onmouseenter = function () {
        startMove(oBotla1img, "left", -40)
        startMove(oBotla1a, "opacity", 0)
    }
    oBotla1.onmouseleave = function () {
        startMove(oBotla1img, "left", -8)
        startMove(oBotla1a, "opacity", 100)
    }
    oBotca1.onmouseenter = function () {
        startMove(oBotca1img, "left", -40)
        startMove(oBotca1a, "opacity", 0)
    }
    oBotca1.onmouseleave = function () {
        startMove(oBotca1img, "left", -8)
        startMove(oBotca1a, "opacity", 100)
    }

    oTb1.onmouseenter = function () {
        startMove(oBr, "left", 85)
        startMove(oAc2, "opacity", 0)
        startMove(oAc3, "opacity", 0)
        startMove(oAc4, "opacity", 0)
        startMove(oAc1, "opacity", 100)

        // oAc2.style.display = "none"
        // oAc3.style.display = "none"
        // oAc4.style.display = "none"
        // oAc1.style.display = "block"
    }
    oTb1.onmouseleave = function () {}


    oTb2.onmouseenter = function () {
        startMove(oBr, "left", 350)
        startMove(oAc1, "opacity", 0)
        startMove(oAc3, "opacity", 0)
        startMove(oAc4, "opacity", 0)
        startMove(oAc2, "opacity", 100)

        // oAc1.style.display = "none"
        // oAc3.style.display = "none"
        // oAc4.style.display = "none"
        // oAc2.style.display = "block"
    }
    oTb2.onmouseleave = function () {}

    oTb3.onmouseenter = function () {
        startMove(oBr, "left", 590)
        startMove(oAc1, "opacity", 0)
        startMove(oAc2, "opacity", 0)
        startMove(oAc4, "opacity", 0)
        startMove(oAc3, "opacity", 100)

        // oAc1.style.display = "none"
        // oAc2.style.display = "none"
        // oAc4.style.display = "none"
        // oAc3.style.display = "block"
    }
    oTb3.onmouseleave = function () {

    }
    oTb4.onmouseenter = function () {
        startMove(oBr, "left", 850)
        startMove(oAc1, "opacity", 0)
        startMove(oAc2, "opacity", 0)
        startMove(oAc3, "opacity", 0)
        startMove(oAc4, "opacity", 100)

        // oAc1.style.display = "none"
        // oAc2.style.display = "none"
        // oAc3.style.display = "none"
        // oAc4.style.display = "block"
    }
    oTb4.onmouseleave = function () {

    }


}

function startMove(node, attr, iTarget) {
    clearInterval(node.timer)
    node.timer = setInterval(function () {
        var iCur = null;
        if (attr == "opacity") {
            iCur = parseInt(parseFloat(getStyle(node, attr)) * 100);
        } else {
            iCur = parseInt(getStyle(node, attr));
        }
        var speed = (iTarget - iCur) / 10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (iCur == iTarget) {
            clearInterval(node.timer)
        } else {
            iCur += speed;
            if (attr == "opacity") {
                node.style.opacity = iCur / 100;
                node.style.filter = "alpha(opacity=" + iCur + ")";
            } else {
                node.style[attr] = iCur + 'px';
            }
        }
    }, 30)
}

function getStyle(node, cssStyle) {
    return node.currentStyle ?
        node.currentStyle[cssStyle] :
        getComputedStyle(node)[cssStyle];
}