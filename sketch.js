//importação de módulos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variáveis necessárias
var ball, groundObj, leftSide, rightSide;
var world;

//raio
var radius = 40;

function setup() {
	createCanvas(windowWidth, windowHeight);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	/*CRIAR A PROPRIEDADE DA BOLA baseado no pdf do projeto
         fazer isso na linha 24*/
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}




	//corpo da bola
	ball = Bodies.circle(260, 100, radius / 2, ball_options);
	World.add(world, ball);

        //para esses dois próximos passos analisar o pdf do projeto e também a linha 43 e 44
	
	/*criar o groundObj baseado no pdf do projeto
        não esquecer de adicionar no mundo*/
		groundObj = new Ground(width/2,  670, width, 20);
		World(world,groundObj)

	/*criar o leftSide baseado no pdf do projeto
        não esquecer de adicionar no mundo*/
		leftSide = new Ground(1100, 600, 20, 120);
		World(world, leftSide)
	//grade da direita
	rightSide = new Ground(1350, height - 80, 20, 120);
	World(world, rightSide)
	
	

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);

	background("black");

	//descomente para exibir a bola
	ellipse(ball.position.x, ball.position.y, radius, radius);

	/*exiba o groundObj e o leftSide com o método de exibição da classe ground
        (verifique no projeto ou na linha 62 como foi feito com o rightSide)
	faça isso na linha 63 e 64*/
	groundObj.display();
	leftSide.display();
	rightSide.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		//descomente o código correto para aplicar a força:

		Matter.Body.applyForce(ball, ball.position, { x: 85, y: -85 });
		//Matter.Body.Force(ball, ball.position, { x: 85, y: -85 });
		//Matter.Body.apply(ball, ball.position, { x: 85, y: -85 });
	}
}
