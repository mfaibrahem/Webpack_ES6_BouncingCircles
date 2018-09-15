
import './../style/index.scss';
import {c, Circle} from './circle';
console.log(c);
console.log(Circle);
const circleArray = [];
for (let i=0; i<80; i++) {
  let r = Math.random()*10 + 8;
  let x = Math.random()*(window.innerWidth-r*2) + r;
  let y = Math.random()*(window.innerHeight-r*2) + r;
  let dx = (Math.random()-.5) * 4;
  let dy = (Math.random()-.5) * 2;
  circleArray.push(new Circle(x, y, r, dx, dy));
}
console.log(circleArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  circleArray.forEach(circle => {
    circle.update;
  });
}
animate();

