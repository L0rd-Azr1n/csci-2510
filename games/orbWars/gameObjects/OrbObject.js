class OrbObject extends GameObject {
    constructor() {
        super("Player")
        this.addComponent(new wasdMovementComponent())
        this.addComponent(new ParamController, {team:"Red", orbClass:"Warrior", })
    }
}