import {app} from "../status/constance.js";

export class Decorator {

    constructor( cell) {
        this.cell = cell;
        this.draw()
    }

    draw() {
        let r_left_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        let r_right_top = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        let r_left_down = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        let r_right_down = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        let corners = [r_left_top, r_right_top, r_left_down, r_right_down]
        this.init(corners)
    }

    /**
     * x
     * 0(0) 1(2)
     * 0(1) 1(3)
     * y
     * 0(0) 0(2)
     * 1(1) 1(3)
     */
    init(corners) {
        for (let i = 0; i < corners.length; i++) {
            corners[i].setAttribute('x', this.cell.x + i / 2 * this.cell.w);
            corners[i].setAttribute('y', this.cell.y + i % 2 * this.cell.h);
            corners[i].setAttribute('r', app.cell_select_r);
            corners[i].style.fill = app.cell_select_fill;
            this.cell.appendChild(corners[i]);
        }

    }
}