function setup() {
  createCanvas(400, 400);
  background(68, 218, 220); //changed background to my favorite color
}

function draw() {
  // Draw the hair
  fill(252, 191, 73); // Adjust the hair color
  rect(100, 80, 200, 300, 90); // Adjust the position and size

  //Neck
  fill(255, 204, 153);
  rect(150, 245, 100, 140); //neck position

  // Draw the head
  fill(255, 204, 153); // Adjust the skin color
  ellipse(width / 2, height / 2, 190, 200); // Adjust the size and position

  // Draw the eyes
  fill(255); // eyeballs set to white
  ellipse(width / 2 - 40, height / 2 - 20, 40, 40); //Left eye
  ellipse(width / 2 + 40, height / 2 - 20, 40, 40); //Right eye
  fill(0); //pupils
  ellipse(width / 2 - 40, height / 2 - 20, 20, 30); //left pupil
  ellipse(width / 2 + 40, height / 2 - 20, 20, 30); //right pupil

  // Draw the nose
  fill(255, 102, 102);
  triangle(
    width / 2,
    height / 2 + 10,
    width / 2 - 10,
    height / 2 + 30,
    width / 2 + 10,
    height / 2 + 30
  );

  // Draw the mouth
  // Draw a half-circle for the mouth
  let centerX = width / 2;
  let centerY = height / 1.6;
  let radius = 80;
  let startAngle = 0;
  let endAngle = PI; // Use PI to draw a half-circle (180 degrees)

  fill(255, 255, 255); // mouth color set to white
  stroke(0, 0, 0); // Outline mouth

  // Draw the half-circle using the arc() function
  arc(centerX, centerY, radius, radius, startAngle, endAngle, PIE);

  // Draw a shape with an outline
  let x = width / 2;
  let y = height / 2.75;
  let Radius = 185;
  let StartAngle = PI;
  let EndAngle = TWO_PI;

  fill(252, 191, 73); // Color half-circle for bangs
  stroke(0, 0, 0); // Set the outline color (adjust as needed)
  strokeWeight(5); // Set the outline thickness (adjust as needed)

  // Draw the half-circle other way for bangs
  arc(x, y, Radius, Radius, StartAngle, EndAngle, PIE);

}
