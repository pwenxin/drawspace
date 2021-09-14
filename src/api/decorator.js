import {app} from "../status/constance";
class Decorator {

    constructor(group, x, y) {
        this.group = group;
        this.x = x;
        this.y = y;
    }

    draw() {
        let cell = document.createElementNS("http://www.w3.org/2000/svg", 'rect');

        cell.setAttribute('x', this.x);
        cell.setAttribute('y', this.y);
        cell.setAttribute('width', app.cell_select_w_h);
        cell.setAttribute('height', app.cell_select_w_h);
        cell.style.fill = this.fill;
        cell.style.strokeWidth = this.stroke_w;
        cell.setAttribute('rx', this.border_r);
        this.group.appendChild(cell);

        //添加事件
        this.addEvent(cell)
        this.object = cell
    }
}