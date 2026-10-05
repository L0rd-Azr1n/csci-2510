class StaticCirle extends GameObject {
    constructor() {
        super("Static", [], "Foreground")
        this.addComponent(new ParamController, {team:this.tags[0], orbClass:this.tags[1], })
        this.transform.scale = new Vector2(2, 2)
    }
}