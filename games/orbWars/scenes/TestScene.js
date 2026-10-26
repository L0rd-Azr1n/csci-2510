class TestScene extends Scene {
    constructor(){
    super()
    this.instantiate(new SupplyUIObject(), new Vector2(10, 20))

    let player = this.instantiate(new OrbObject("Player", ["Blue", "Warrior"]), new Vector2(0,0))
    player.addComponent(new wasdMovementComponent())
    player.addComponent(new OrbMoveController())

    let testEnemy = this.instantiate(new OrbObject("Enemy", ["Red", "Warrior"]), new Vector2(50, 50))
    testEnemy.addComponent(new OrbMoveController())

    //test object
    this.instantiate(new StaticCirle(), new Vector2(-200, -200))

    //this.instantiate(new ChaserObject("Chaser", ["Red, Rager"]), new Vector2(500, 500))

    //this.instantiate(new RandMoveOrbObject("Jitter", ["Red", "Mage"]), new Vector2(250, 700))

    this.instantiate(new WeaponObject(), new Vector2(-20, 0))

    }
}