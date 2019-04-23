class Visual {
    w = 0;
    h = 0;
    x = 0;
    y = 0;
    container = null;
    background = 'pink';
    constructor(w = 0, h = 2) {
        this.w = w ? w : this.w;
        this.h = h ? h : this.h;
        this.container = document.createElement('div');
        this.container.style.position = 'absolute';
        document.body.appendChild(this.container);
        this.draw();
    }

    draw() {
        this.container.style.background = this.background;
        this.container.style.width = this.w + 'px';
        this.container.style.height = this.h + 'px';
        this.container.style.left = this.x + 'px';
        this.container.style.top  = this.y + 'px';
    }

    moveX(speed) {
        this.x += speed;
    }

    moveY(speed) {
        this.y += speed;
    }
}


