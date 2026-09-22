class WeaponObject extends GameObject {
    
    constructor() {
        super("Weapon")
        this.addComponent(new Polygon(), {fillStyle:"silver", points:Assets.sword,})
        this.transform.rotation = Math.PI/4
        this.transform.scale = new Vector2(2.5, 2.5)
        this.addComponent(new weaponController())
    }
} 