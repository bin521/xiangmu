"use strict";
require(["../js/config.js"], function() {
	require(["jquery"], function(n) {
		n("#floating span").mouseenter(function() {
			n("#floating").animate({
				right: 0
			})
		}), n("#floating").mouseleave(function() {
			n("#floating").animate({
				right: -154
			})
		}), n("#floating .beautiful .backtop").click(function() {
			document.documentElement.scrollTop
		}), n(function() {
			var i = 1;
			n("main .list .goods .much i").click(function() {--i <= 1 ? (i = 1, n("main .list .goods .much input").val(1)) : n("main .list .goods .much input").val(i)
			}), n("main .list .goods .much span").click(function() {
				i++, n("main .list .goods .much input").val(i)
			})
		})
	})
});