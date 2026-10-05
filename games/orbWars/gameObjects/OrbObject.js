class OrbObject extends GameObject {
    constructor() {
        super("Player", [], "Foreground")
        this.addComponent(new ParamController, {parentName:this.name, team:this.tags[0], orbClass:this.tags[1], })
        this.addComponent(new wasdMovementComponent())
    }
}