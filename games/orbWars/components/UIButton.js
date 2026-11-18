class UIButton extends RectGameObject {
    constructor() {
        super("UIButton", [], "UI")
        this.addComponent(new Polygon(), {points:Assets.rectangle, fillStyle:"Green", alpha:0.5})
        this.transform.useLetterBoxing = true
    }
}