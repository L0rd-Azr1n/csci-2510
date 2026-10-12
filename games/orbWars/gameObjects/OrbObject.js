class OrbObject extends GameObject {
    constructor(name, tags) {
        super(name, tags, "Foreground")
        this.addComponent(new ParamController, {team:this.tags[0], orbClass:this.tags[1], })
        this.addComponent(new wasdMovementComponent())
    }
}