class SupplyUIObject extends GameObject {
    constructor() {
        super("Supplies")
        this.addComponent(new Polygon(), {fillStyle:"Gray", points:Assets.rectangle})
        this.addComponent(new TextLabel(), {text:"Supplies: "})
    }
}