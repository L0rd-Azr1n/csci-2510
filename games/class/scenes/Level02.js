class Level02 extends Scene {
    constructor() {
        super()
        // this.instantiate(new MainGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2))
        this.instantiate(new EnemyGameObject(), new Vector2(25, 150), Math.PI)
        this.instantiate(new EnemyGameObject(), new Vector2(200, 200), Math.PI)
        // this.instantiate(new PointsGameObject(), new Vector2(0, 20))
        this.instantiate(new LevelControllerGameObject())

    }
}