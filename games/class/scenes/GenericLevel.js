class GenericLevel extends Scene {
    constructor() {
        super()
        this.instantiate(new MainGameObject(), new Vector2(0, 0))
        this.instantiate(new PointsGameObject(), new Vector2(0, 20))
        Camera.main.backgroundColor = "cyan"

    }
}