class LevelSelect extends Scene {
    constructor() {
        super()
        this.instantiate(new LevelSelectTitleObject(), new Vector2(0, -(Engine.canvas.innerHeight-30)))
        //Camera.main.backgroundColor = "Beige"
    }
}