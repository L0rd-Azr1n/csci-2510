class EnemyGameObject extends GameObject{
    constructor(){
        super("Enemy")
        this.addComponent(new Polygon(), {fillStlye: "green", points:Assets.star})
        this.addComponent(new EnemyController())
    }
}