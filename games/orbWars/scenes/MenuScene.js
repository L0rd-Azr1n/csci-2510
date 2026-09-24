class MenuScene extends Scene {
    constructor() {
        super()
        this.instantiate(new TitleTextLabel(), new Vector2(window.innerWidth/2, window.innerHeight/4))
        this.instantiate(new StartInstructionTextLabel(), new Vector2(window.innerWidth/2, window.innerHeight * 0.75))
        this.instantiate(new LevelControllerGameObject())
    }
}