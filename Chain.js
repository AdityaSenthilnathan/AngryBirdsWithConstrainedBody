class Chain {
    constructor(A, B){
        var options = {
            length: 20,
            stiffness: 0.4,
            bodyA: A,
            bodyB: B

        }
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);

    }


}