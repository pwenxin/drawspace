export class Cell {

    fill = '#fff';
    stroke_w = '1'
    border_r = '0';
    object = null;

    constructor(x, y, w, h, fill, stroke_w, border_r) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.stroke_w = stroke_w;
        this.border_r = border_r
    }

    setGroup(group) {
        this.group = group
    }

    draw() {
        let cell = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

        cell.setAttribute('x', this.x);
        cell.setAttribute('y', this.y);
        cell.setAttribute('width', this.w);
        cell.setAttribute('height', this.h);
        cell.style.fill = this.fill;
        cell.style.strokeWidth = this.stroke_w;
        cell.setAttribute('rx', this.border_r);
        this.group.appendChild(cell);

        //添加事件
        this.addEvent(cell)
        this.object = cell
    }

    addEvent(cell) {
        cell.addEventListener('click', (event) => {

        })

        cell.addEventListener('mousemove', (event) => {
            if (event.buttons === 1) {
                this.x += event.movementX;
                this.y += event.movementY;
                this.object.setAttribute('x', this.x);
                this.object.setAttribute('y', this.y);
            }
        })

    }

}