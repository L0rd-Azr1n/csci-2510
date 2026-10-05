class StartInstructionTextLabel extends GameObject {
    constructor() {
        super("MenuInstructions", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle:"Teal", text:"Press ENTER to begin"})
        this.transform.scale = new Vector2(1.5,1.5)
    }
}