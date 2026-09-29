class StaticCirle extends GameObject {
    constructor(name, tags) {
        super("Static", tags)
        this.addComponent(new ParamController, {parentName:name, team:this.tags[0], orbClass:this.tags[1], })
        this.transform.scale = new Vector2(2, 2)
    }
}