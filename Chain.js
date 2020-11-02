class Chain {
    constructor(bodyA,bodyB){
       var Option = {
       bodyA: bodyA,
       bodyB: bodyB,
       length: 10,
       stiffness: 0.04
       }
       this.chain = Constraint.create(Option);
       World.add(world, this.chain);
    }
 display(){
 var qaw = this.chain.bodyA.position;
 var qaw2 = this.chain.bodyB.position;
 line(qaw.x, qaw.y,qaw2.x ,qaw2.y);
 }
}