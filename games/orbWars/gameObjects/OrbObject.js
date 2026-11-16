class OrbObject extends GameObject {
    constructor() {
        super("Orb", [], "Foreground")
        this.addComponent(new ParamController, {team:this.tags[0], orbClass:this.tags[1], })
        this.addComponent(new Collider())
        this.addComponent(new RigidBody())

        this.addComponent(new OrbMoveController())
        this.addComponent(new Health())
        this.addComponent(new Damage())
    }
}