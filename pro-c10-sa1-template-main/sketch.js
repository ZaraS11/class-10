var weight = [30,43,52,19,29]
var avg = 0
function average()
{
avg = weight[0]+weight[1]+weight[2]+weight[3]+weight[4]/weight.length
console.log (avg)
}

function setup() 
{
  createCanvas(400,400);
  average()
}

function draw() 
{
background(51);

}

