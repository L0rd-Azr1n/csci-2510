class RandMoveOrbObject extends GameObject {
   constructor(name, tags) {
        super(name = "Jitter", tags)
        this.addComponent(new RandMove(), {speed: 100})
        this.addComponent(new ParamController, {parentName:name, team:this.tags[0], orbClass:this.tags[1], })
    }
}