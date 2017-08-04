define([
	'jquery'
], function($){
	// variables
	var angle = 0.0;
	var checkpoints = [600, 1200, 1800, 2400, 3000, 100000];
	var newFaceColors = ["#3498db", "#e74c3c", "#2ecc71", "#e67e22"];
	var currentFaceColors = ["#e67e22", "#3498db", "#e74c3c", "#2ecc71"];
	var cubeSide = 10;
	var cubeSpace = 2;

	// listeners
	$(document).scroll(function(){
		scrollCurrentFace();
		scrollNewFace();
		updateNavBar();
	});
	$(document).ready(function(){
		initCheckpoints();
		scrollCurrentFace();
		scrollNewFace();
		updateNavBar();
	});
	$(window).resize(initCheckpoints);
	$(document).on('DOMNodeInserted', '.experience', initCheckpoints);

	// methods
	function initCheckpoints(){
		checkpoints[0] = $("#profile").offset().top;// - $("nav").height();
		checkpoints[1] = $("#experiences").offset().top;// - $("nav").height();
		checkpoints[2] = $("#abilities").offset().top;// - $("nav").height();
		checkpoints[3] = $("#projects").offset().top;// - $("nav").height();
		checkpoints[4] = $("#contact").offset().top;// - $("nav").height();
	}

	function scrollNewFace(){
		$(".new-face").attr("fill", newFaceColors[getCurrentCheckpointIndex() % 4]);
		percentScrolled = (distanceFromPreviousCheckpoint(getCurrentCheckpointIndex()) / getCheckpointLength(getCurrentCheckpointIndex()));
		yA = (3*cubeSide+2.5*cubeSpace)*percentScrolled;
		yB = (2*cubeSide+2.5*cubeSpace)*percentScrolled;
		yC = (2*cubeSide+1.5*cubeSpace)*percentScrolled;
		yD = (1*cubeSide+1.5*cubeSpace)*percentScrolled;
		yE = (1*cubeSide+0.5*cubeSpace)*percentScrolled;
		yF = (0.5*cubeSpace)*percentScrolled;
		$("#newface1").attr("d","M" + (0) + " " + yA + "L" + (0) + " " + yB + "L" + (cubeSide) + " " + yB + " L" + (cubeSide) + " " + yA);
		$("#newface2").attr("d","M" + (0) + " " + yC + "L" + (0) + " " + yD + "L" + (cubeSide) + " " + yD + " L" + (cubeSide) + " " + yC);
		$("#newface3").attr("d","M" + (0) + " " + yE + "L" + (0) + " " + yF + "L" + (cubeSide) + " " + yF + " L" + (cubeSide) + " " + yE);
		$("#newface4").attr("d","M" + (cubeSide+cubeSpace) + " " + yA + "L" + (cubeSide+cubeSpace) + " " + yB + "L" + (cubeSide*2+cubeSpace) + " " + yB + " L" + (cubeSide*2+cubeSpace) + " " + yA);
		$("#newface5").attr("d","M" + (cubeSide+cubeSpace) + " " + yC + "L" + (cubeSide+cubeSpace) + " " + yD + "L" + (cubeSide*2+cubeSpace) + " " + yD + " L" + (cubeSide*2+cubeSpace) + " " + yC);
		$("#newface6").attr("d","M" + (cubeSide+cubeSpace) + " " + yE + "L" + (cubeSide+cubeSpace) + " " + yF + "L" + (cubeSide*2+cubeSpace) + " " + yF + " L" + (cubeSide*2+cubeSpace) + " " + yE);
		$("#newface7").attr("d","M" + (cubeSide*2+cubeSpace*2) + " " + yA + "L" + (cubeSide*2+cubeSpace*2) + " " + yB + "L" + (cubeSide*3+cubeSpace*2) + " " + yB + " L" + (cubeSide*3+cubeSpace*2) + " " + yA);
		$("#newface8").attr("d","M" + (cubeSide*2+cubeSpace*2) + " " + yC + "L" + (cubeSide*2+cubeSpace*2) + " " + yD + "L" + (cubeSide*3+cubeSpace*2) + " " + yD + " L" + (cubeSide*3+cubeSpace*2) + " " + yC);
		$("#newface9").attr("d","M" + (cubeSide*2+cubeSpace*2) + " " + yE + "L" + (cubeSide*2+cubeSpace*2) + " " + yF + "L" + (cubeSide*3+cubeSpace*2) + " " + yF + " L" + (cubeSide*3+cubeSpace*2) + " " + yE);
	}

	function scrollCurrentFace(){
		$(".current-face").attr("fill", currentFaceColors[getCurrentCheckpointIndex() % 4]);
		percentScrolled = 1-(distanceFromPreviousCheckpoint(getCurrentCheckpointIndex()) / getCheckpointLength(getCurrentCheckpointIndex()));
		yA = (3*cubeSide+3*cubeSpace)-(0.5*cubeSpace)*percentScrolled;
		yB = (3*cubeSide+3*cubeSpace)-(1*cubeSide+0.5*cubeSpace)*percentScrolled;
		yC = (3*cubeSide+3*cubeSpace)-(1*cubeSide+1.5*cubeSpace)*percentScrolled;
		yD = (3*cubeSide+3*cubeSpace)-(2*cubeSide+1.5*cubeSpace)*percentScrolled;
		yE = (3*cubeSide+3*cubeSpace)-(2*cubeSide+2.5*cubeSpace)*percentScrolled;
		yF = (3*cubeSide+3*cubeSpace)-(3*cubeSide+2.5*cubeSpace)*percentScrolled;
		$("#currentface1").attr("d","M" + (0) + " " + yA + "L" + (0) + " " + yB + "L" + (cubeSide) + " " + yB + " L" + (cubeSide) + " " + yA);
		$("#currentface2").attr("d","M" + (0) + " " + yC + "L" + (0) + " " + yD + "L" + (cubeSide) + " " + yD + " L" + (cubeSide) + " " + yC);
		$("#currentface3").attr("d","M" + (0) + " " + yE + "L" + (0) + " " + yF + "L" + (cubeSide) + " " + yF + " L" + (cubeSide) + " " + yE);
		$("#currentface4").attr("d","M" + (cubeSide+cubeSpace) + " " + yA + "L" + (cubeSide+cubeSpace) + " " + yB + "L" + (cubeSide*2+cubeSpace) + " " + yB + " L" + (cubeSide*2+cubeSpace) + " " + yA);
		$("#currentface5").attr("d","M" + (cubeSide+cubeSpace) + " " + yC + "L" + (cubeSide+cubeSpace) + " " + yD + "L" + (cubeSide*2+cubeSpace) + " " + yD + " L" + (cubeSide*2+cubeSpace) + " " + yC);
		$("#currentface6").attr("d","M" + (cubeSide+cubeSpace) + " " + yE + "L" + (cubeSide+cubeSpace) + " " + yF + "L" + (cubeSide*2+cubeSpace) + " " + yF + " L" + (cubeSide*2+cubeSpace) + " " + yE);
		$("#currentface7").attr("d","M" + (cubeSide*2+cubeSpace*2) + " " + yA + "L" + (cubeSide*2+cubeSpace*2) + " " + yB + "L" + (cubeSide*3+cubeSpace*2) + " " + yB + " L" + (cubeSide*3+cubeSpace*2) + " " + yA);
		$("#currentface8").attr("d","M" + (cubeSide*2+cubeSpace*2) + " " + yC + "L" + (cubeSide*2+cubeSpace*2) + " " + yD + "L" + (cubeSide*3+cubeSpace*2) + " " + yD + " L" + (cubeSide*3+cubeSpace*2) + " " + yC);
		$("#currentface9").attr("d","M" + (cubeSide*2+cubeSpace*2) + " " + yE + "L" + (cubeSide*2+cubeSpace*2) + " " + yF + "L" + (cubeSide*3+cubeSpace*2) + " " + yF + " L" + (cubeSide*3+cubeSpace*2) + " " + yE);
	}

	function getCurrentCheckpointIndex(){
		for(var cnt = 0; cnt < checkpoints.length; cnt++){
			if(scrollY + 1 < checkpoints[cnt]){
				return cnt;
			}
		}
		console.log("Current checkpoint index not found");
		return -1;
	}

	function getCheckpointLength(ptIndex){
		if(ptIndex === 0){
			return checkpoints[ptIndex];
		} else if (ptIndex > 0){
			return checkpoints[ptIndex] - checkpoints[ptIndex-1];	
		} else {
			console.log("Checkpoint length not found");
			return -1;	
		}
	}

	function distanceFromPreviousCheckpoint(ptIndex){
		if(ptIndex === 0){
			return scrollY;
		} else if (ptIndex > 0){
			return scrollY - checkpoints[ptIndex-1];	
		} else {
			console.log("Distance from previous checkpoint not found");
			return -1;	
		}
	}

	function updateNavBar(){
		$("#navbar-options li").removeClass("active");
		if(getCurrentCheckpointIndex() > 0){
			var activeNavbar = $("#navbar-options").children()[getCurrentCheckpointIndex() - 1]
			if(activeNavbar){
				activeNavbar.className = "active";
			}
		}
	}
})