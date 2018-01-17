var hammy = $("#hammy");
var bub1 = $("#bubble1");
var bub2 = $("#bubble2");
var bub3 = $("#bubble3");
var bub4 = $("#bubble4");
var spun = false;
$('#cont').click(function() {
			if (spun == false) {
						spin();
			} else {
						unspin();
			}
});

$('#cont').focus(function() {
			if (spun == false) {
						spin();
			} else {
						unspin();
			}
});

var spin = function() {
			spun = true;
			$(hammy).removeClass("unspin").addClass("spin");
			bubblesout();
			makecross();
			setTimeout(function() {
						$(hammy).removeClass("spin");
			}, 500);

}
var unspin = function() {
			spun = false;
			$(hammy).removeClass("spin").addClass("unspin");
			bubblesin();
			destroycross();
			setTimeout(function() {
						$(hammy).removeClass("unspin");
			}, 500);
}

var bubblesout = function() {
			var i = 1;
			$(".bubble").each(function() {
						$(this).addClass("out" + i);
						i++;
			});
}
var bubblesin = function() {
			var i = 1;
			$(".bubble").each(function() {
						$(this).removeClass("out" + i);
						i++;
			});
}

var makecross = function() {
			var i = 1;
			$(".line").each(function() {
						$(this).addClass("cross" + i);
						i++;
			});
}
var destroycross = function() {
			var i = 1;
			$(".line").each(function() {
						$(this).removeClass("cross" + i);
						i++;
			})
}