class block{

    constructor(x, y, w, h){
      
       let option_block = {
            isStatic : true
        };


        this.Body.rectangle(x, y, w, h, option_block);
        this.w = w;
        this.h = h;
        
        World.add(world, this.Body);
    }

    display() {
        let pos = this.body.position;
    
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
      }

}
