class MenuScene extends Scene {
    constructor() {
        super("Beige")
        this.instantiate(new TitleTextLabel(), new Vector2(Engine.canvas.width / 2, Engine.canvas.height / 2))
        this.instantiate(new StartInstructionTextLabel(), new Vector2(Engine.canvas.width / 2, Engine.canvas.height * 3/ 4))
        let pressStart = this.instantiate(new LevelControllerGameObject())
        pressStart.addComponent(new LevelController(), {currentLevel:MenuScene, targetNextLevel:LevelSelect})
    }
}