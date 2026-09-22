class SupplyUIObject extends GameObject {
    constructor() {
        super("Supplies")
        this.addComponent(new Polygon(), {fillStyle:"Gray", point:Assets.rectangle})
        this.transform.scale = new Vector2(2, 2)

        this.addComponent(new TextLabel(), {text:"Supplies: "})
    }
}