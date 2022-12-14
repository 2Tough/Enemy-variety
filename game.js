document.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 800


class Game {
    constructor() {
        this.enemies = []
    }
    update(){
        
    }
    draw(){
    
    }
    #addNewEnemy(){

    }

}


class Enemy {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 200
    }
    update(){
        this.x++;
    }
    draw(){

    }
}

class Ghost extends Enemy {
    constructor(){
        super();
        this.image = './images/ghost.png';
    }
}

const enemy1 = new Ghost()
enemy1.update();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
}
})