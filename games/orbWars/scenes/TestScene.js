class TestScene extends Scene {
    constructor(){
    super()
    this.instantiate(new SupplyUIObject(), new Vector2(10, 20))

    this.instantiate(new OrbObject("Player", ["Blue", "Warrior"]), new Vector2(600,200))

    //test object
    this.instantiate(new StaticCirle(), new Vector2(400, 400))

    this.instantiate(new ChaserObject("Chaser", ["Red, Rager"]), new Vector2(500, 500))

    this.instantiate(new RandMoveOrbObject("Jitter", ["Red", "Mage"]), new Vector2(250, 700))

    this.instantiate(new WeaponObject(), new Vector2(500, 600))

    }
}