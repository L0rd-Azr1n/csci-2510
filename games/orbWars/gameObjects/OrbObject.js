class OrbObject extends GameObject {
    constructor(name, tags) {
        super(name, tags, "Foreground")
        this.addComponent(new ParamController, {parentName:this.name, team:this.tags[0], orbClass:this.tags[1], })
        this.addComponent(new wasdMovementComponent())
    }
}