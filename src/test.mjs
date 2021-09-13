import {Cell} from "./api/cell.mjs";

let cell = new Cell(10,10,100,100);
let root = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
root.setAttribute('width', 800);
root.setAttribute('height', 800);
document.body.appendChild(root)
cell.setGroup(root)
cell.draw()

console.log(1231)
