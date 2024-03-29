sc=document.createElement('script');
sc.setAttribute('src', 'http://www.nihilogic.dk/labs/canvas2image/canvas2image.js');
sc.setAttribute('type', 'text/javascript');
document.head.appendChild(sc);
sc1	=document.createElement('script');
sc1.setAttribute('src', 'http://www.nihilogic.dk/labs/canvas2image/base64.js');
sc1.setAttribute('type', 'text/javascript');
document.head.appendChild(sc1);

N0 = {label:"Node 0", children:[], contents: {L:41, M:59}, classifier: "Mesan-C1", pos: []};
N1 = {label:"Node 1", children:[], classifier: "Mesan-C3", contents: {L:20, M:58}, pos: []};
N2 = {label:"Node 2", children:[], classifier: "GCW-C1", contents: {L:10, M:53}, pos: []};
N3 = {label:"Node 3", contents: {L:6, M:52}, pos: []};
N4 = {label:"Node 4", contents: {L:4, M:1}, pos: []};
N5 = {label:"Node 5", contents: {L:10, M:5}, pos: []};
N6 = {label:"Node 6", contents: {L:21, M:1}, pos: []};
N0.children = [N1, N6];
N1.children = [N2, N5];
N2.children = [N3, N4];

S = [N0, N1, N2, N3, N4, N5, N6];
var setpos = function (N, po) {
    N.pos = po;
	if (N.hasOwnProperty("children")) {
	    setpos(N.children[0], [po[0] - 110, po[1] + 275]);
	    setpos(N.children[1], [po[0] + 110, po[1] + 275]);
	} 
}
setpos(N0, [345, 5]);	

var canvas = document.createElement("canvas");
canvas.height = 1040;
canvas.width = 670;
//canvas.style = 'background-color:white;';
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 670, 1040);

for (var ind in S) {
    ctx.fillStyle = "#DDDDDD";
	if (!S[ind].hasOwnProperty("children"))
	    if (S[ind].contents.L > S[ind].contents.M) {
	        ctx.fillRect(S[ind].pos[0] + 10, S[ind].pos[1] + 65, 180, 20);
	    } else {
    	    ctx.fillRect(S[ind].pos[0] + 10, S[ind].pos[1] + 85, 180, 20);
	    }
    ctx.fillStyle = "#000000";
    ctx.strokeRect(S[ind].pos[0], S[ind].pos[1], 200, 200);
	ctx.beginPath();
	ctx.moveTo(S[ind].pos[0] + 10, S[ind].pos[1] + 60);
	ctx.lineTo(S[ind].pos[0] + 190, S[ind].pos[1] + 60);
	ctx.moveTo(S[ind].pos[0] + 10, S[ind].pos[1] + 110);
	ctx.lineTo(S[ind].pos[0] + 190, S[ind].pos[1] + 110);
	ctx.stroke();
	ctx.closePath();
	ctx.font = '18px san-serif';
	ctx.textAlign = 'center';
	ctx.fillText(S[ind].label, S[ind].pos[0] + 100, S[ind].pos[1] + 18);
	ctx.textAlign = "left";
	ctx.fillText("Category          n", S[ind].pos[0] + 50 , S[ind].pos[1] + 50);
	ctx.fillText("MLN", S[ind].pos[0] + 50, S[ind].pos[1] + 81);
	ctx.fillText("PMN", S[ind].pos[0] + 50, S[ind].pos[1] + 102);
	ctx.fillText("Total", S[ind].pos[0] + 50, S[ind].pos[1] + 128);	
	ctx.textAlign = "right";
	ctx.fillText(S[ind].contents.L, S[ind].pos[0] + 173, S[ind].pos[1] + 81);
	ctx.fillText(S[ind].contents.M, S[ind].pos[0] + 173, S[ind].pos[1] + 102);	
	ctx.fillText(S[ind].contents.L + S[ind].contents.M, S[ind].pos[0] + 173, S[ind].pos[1] + 128);	
	ctx.fillStyle = "#00AAAA";
	ctx.fillRect(S[ind].pos[0] + 23, S[ind].pos[1] + 70, 10, 10);
	for (var i=0;i<S[ind].contents.L;++i) {
		xpos = i % 10;
		ypos = parseInt(i/10);
		ctx.fillRect(S[ind].pos[0] + 5 + 9*xpos, S[ind].pos[1] + 137 + 9*ypos, 7, 7);
	}
	ctx.fillStyle = "#AA0000";
	for (var i=0;i<S[ind].contents.M;++i) {
		xpos = i % 10;
		ypos = parseInt(i/10);
		ctx.fillRect(S[ind].pos[0] + 105 + 9*xpos, S[ind].pos[1] + 137 + 9*ypos, 7, 7);
	}	
	ctx.fillRect(S[ind].pos[0] + 23, S[ind].pos[1] + 91, 10, 10);
	
	if (S[ind].hasOwnProperty("children")) {
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		ctx.moveTo(S[ind].pos[0] + 100, S[ind].pos[1] + 200);
		ctx.lineTo(S[ind].pos[0] + 100, S[ind].pos[1] + 210);
		ctx.moveTo(S[ind].pos[0] + 100, S[ind].pos[1] + 230);
		ctx.lineTo(S[ind].pos[0] + 100, S[ind].pos[1] + 250);
		ctx.moveTo(S[ind].children[0].pos[0] + 100, S[ind].children[0].pos[1]);
		ctx.lineTo(S[ind].children[0].pos[0] + 100, S[ind].children[0].pos[1] -25);
		ctx.moveTo(S[ind].children[1].pos[0] + 100, S[ind].children[1].pos[1]);
		ctx.lineTo(S[ind].children[1].pos[0] + 100, S[ind].children[1].pos[1] -25);
		ctx.moveTo(S[ind].children[1].pos[0] + 100, S[ind].children[1].pos[1] -25);
		ctx.lineTo(S[ind].children[0].pos[0] + 100, S[ind].children[1].pos[1] -25);
		ctx.closePath();
		ctx.stroke();
		ctx.font = '18px san-serif';
		ctx.textAlign = 'center';
		ctx.fillText(S[ind].classifier, S[ind].pos[0] + 100, S[ind].pos[1] + 225);
		ctx.fillText("= 0", S[ind].children[0].pos[0] + 100, S[ind].children[0].pos[1] - 28);
		ctx.fillText("> 0", S[ind].children[1].pos[0] + 100, S[ind].children[1].pos[1] - 28);
	}
}

Canvas2Image.saveAsPNG(canvas, true);



