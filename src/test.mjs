import {Cell} from "./api/cell.mjs";

let cell = new Cell(30,10,300,300, '#254a75',2,'24px');
let root = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
root.setAttribute('width', 800);
root.setAttribute('height', 800);
document.body.appendChild(root)
cell.setGroup(root)
cell.draw()

