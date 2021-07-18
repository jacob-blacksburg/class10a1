var weights = [35,38,40,45];
function total(){
  var sum = weights[0]+weights[1]+weights[2]+weights[3];
  console.log(sum);
  var avg = sum/weights.length;
  console.log(avg);
}
function setup() 
{
  createCanvas(400,400);
  total()
}

function draw() 
{
background(51);

}

