class OrbObject extends GameObject {
    constructor(name, tags) {
        super(name = "Player", tags)
        this.addComponent(new wasdMovementComponent())
        this.addComponent(new ParamController, {parentName:name, team:this.tags[0], orbClass:this.tags[1], })
    }
}