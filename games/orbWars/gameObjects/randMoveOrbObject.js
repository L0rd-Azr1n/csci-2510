class RandMoveOrbObject extends GameObject {
   constructor() {
        super("Jitter", ["Blue", "Mage"])
        this.addComponent(new RandMove(), {speed: 100})
        this.addComponent(new ParamController, {team:this.tags[0], orbClass:this.tags[1]})
    }
}