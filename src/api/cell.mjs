export class Cell {

    fill = '#fff';
    stroke_w = '1';
    
    constructor(x, y, w, h, fill, stroke_w) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.stroke_w = stroke_w;
    }

    setGroup(group) {
        this.group = group
    }

    draw() {
        let cell = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
        cell.setAttribute('width', this.h);
        cell.setAttribute('height', this.h);
        cell.style.position = 'absolute';
        cell.style.top = this.y;
        cell.style.left = this.x;
        cell.style.left = this.x;
        cell.style.fill = this.fill;
        cell.style.strokeWidth = this.stroke_w;
        this.group.appendChild(cell);
    }

}