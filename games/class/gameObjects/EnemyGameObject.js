class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy", ["Enemy"], "ships")
        this.addComponent(new Polygon(), {fillStlye: "green", points:Assets.star})
        this.addComponent(new EnemyController())
        this.addComponent(new Health(), {health:2})
        this.addComponent(new Collider())
    }
}