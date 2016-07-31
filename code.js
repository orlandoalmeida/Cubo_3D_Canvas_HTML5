void setup(){ 
  size(500, 500); 
 }
var backgroundColour = color(255, 255, 255);
// (0, 0, 0) == Preto // (255, 255, 255) == Branco
var nodeColour = color(0, 0, 0); // Cor do No (vertice) 
var edgeColour = color(0, 0, 0); // Cor da Linha (aresta) 
var nodeSize = 8;
// Distancia entre os nós do cubo 
var node0 = [-100, -100, -100];
var node1 = [-100, -100,  100];
var node2 = [-100,  100, -100];
var node3 = [-100,  100,  100];
var node4 = [ 100, -100, -100];
var node5 = [ 100, -100,  100];
var node6 = [ 100,  100, -100];
var node7 = [ 100,  100,  100];
var nodes = [node0, node1, node2, node3, node4, node5, node6, node7];
// Lingando um nó no outro  
var edge0  = [0, 1];
var edge1  = [1, 3];
var edge2  = [3, 2];
var edge3  = [2, 0];
var edge4  = [4, 5];
var edge5  = [5, 7];
var edge6  = [7, 6];
var edge7  = [6, 4];
var edge8  = [0, 4];
var edge9  = [1, 5];
var edge10 = [2, 6];
var edge11 = [3, 7];
var edges = [edge0, edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11];
// Instruções para interagir com o cubo  
println("Use o navegador Firefox para visualizar o cubo");
println("TECLA 'A' ROTACIONA O CUBO 30º NO EIXO 'X'.");
println("TECLA 'S' ROTACIONA O CUBO 30º NO EIXO 'Y'.");
println("TECLA 'D' ROTACIONA O CUBO 30º NO EIXO 'Z'.");
println("USE AS SETAS DO DIRECIONAL PARA MOVIMENTAR O CUBO.");
println("USE A TECLA '+' PARA AUMENTAR O TAMANHO CUBO.");
println("USE A TECLA - PARA DIMINUIR O TAMANHO DO CUBO.");
println("");
println("INSTRUÇÕES ROLE A BARRA OU AMPLIE A JANELA !");
// 	Definindo as funções de rotação do cubo
// Rotaciona o Cubo em torno do eixo Z 
var rotateZ3D = function(theta) {
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var y = node[1];
        node[0] = x * cos_t - y * sin_t;
        node[1] = y * cos_t + x * sin_t;
    }
};
// Rotaciona o Cubo em torno do eixo Y
var rotateY3D = function(theta) {
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var x = node[0];
        var z = node[2];
        node[0] = x * cos_t - z * sin_t;
        node[2] = z * cos_t + x * sin_t;
    }
};
// Rotaciona o Cubo em torno do eixo X
var rotateX3D = function(theta) {
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        var y = node[1];
        var z = node[2];
        node[1] = y * cos_t - z * sin_t;
        node[2] = z * cos_t + y * sin_t;
    }
};

// Desenhando o cubo
void draw () {
    background(backgroundColour);
    
    // Desenhando as arestas / Draw edges
    stroke(edgeColour);
    for (var e=0; e<edges.length; e++) {
        var n0 = edges[e][0];
        var n1 = edges[e][1];
        var node0 = nodes[n0];
        var node1 = nodes[n1];
        line(node0[0]+200, node0[1]+200, node1[0]+200, node1[1]+200);
    }

    // Desenhando os nós / Draw nodes
    fill(nodeColour);
    noStroke();
    for (var n=0; n<nodes.length; n++) {
        var node = nodes[n];
        ellipse(node[0]+200, node[1]+200, nodeSize, nodeSize);
    }
};

void keyPressed() {
	//console.log(keyCode);  // descobrir qual o numero de cada tecla 
	switch(keyCode) {
	case 173: // escalando para menos 
		 scale(0.5, 0.5, 0.5);
		 translate(200, 200, 0);
	break;
	case 61: // escalando para mais
		 scale(1.5, 1.5, 1.5);
		 translate(-55, -55, 0);
	 break;
	case 39: // transladando em X para a direita
 		translate(10,0,0);
	break;
	case 37: // transladando em X para a esquerda
 		translate(-10,0,0);
	break;
	case 38: // transladando em Y para a cima
 		translate(0,-10,0);
	break;
	case 40: // transladando em Y para a baixo
 		translate(0,10,0);
	break;
	case 68: // Rotacao em Z tecla D
 		rotateZ3D(45);
	break;
	case 65: // Rotacao em X  tecla A
 		rotateX3D(45);
	break;
	case 83: // Rotacao em Y tecla S
 		rotateY3D(45);
	break;
	
	}
		
}


