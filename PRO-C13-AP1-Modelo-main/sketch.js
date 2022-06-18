var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  input = createInput(); 
  input.position(5, 60);
 
  heading = createElement('h4', 'Enter any alphabet:'); 
  heading.position(5, 20);

  textAlign(CENTER); 
  textSize(50)
}

function draw() {
  var value = input.value()
  switch (value) {
    case 'a':
      console.log("a");
      break;
       
      case 'e':
        console.log("e");
        break

        case 'i':
      console.log("i");
      break

      case 'o':
      console.log("o");
      break

      case 'u':
        console.log("u");
        break
default:
  console.log("Please enter any character")
}
}