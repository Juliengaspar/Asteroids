import {settings} from "./settings";

export class Asteroid {
private canvas: HTMLCanvasElement;
private ctx: CanvasRenderingContext2D;


    constructor() {
        this.canvas = document.getElementById(settings.canvas.id)as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d");
        this.resizeCavas()
        window.addEventListener('resize', this.resizeCavas.bind(this));
    }

    private resizeCavas() {

        this.canvas.width = Math.min(window.innerWidth, window.innerHeight,);
        this.canvas.height = Math.min(window.innerWidth, window.innerHeight);
    }


}