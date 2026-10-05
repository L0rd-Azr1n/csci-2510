class LevelSelectTitleObject extends GameObject {
    constructor() {
        super("SelectTitle", [], "UI")
        this.addComponent(new TextLabel(), {fillStyle:"Teal", text:"SELECT YOUR BATTLEGROUND", font:"14px Stencil Sirin"})
    }
}