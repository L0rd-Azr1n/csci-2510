class CoinGameObject extends GameObject{
    constructor(){
        super("CoinGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: 'orange', points: Assets.square})
        this.addComponent(new Collider(), {isTrigger: true})
        //this.addComponent(new RigidBody())
        //this.addComponent(new CoinController)
        this.transform.scale = new Vector2(10,10)
    }
}
