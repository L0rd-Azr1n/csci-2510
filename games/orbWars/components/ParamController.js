class ParamController extends Component {
    parentName
    team
    color
    orbClass
    points = Assets.circle

    start() {
        
        let parentOrb = GameObject.find(this.parentName)
        parentOrb.addComponent(new orbColors())
        let colorPicker = parentOrb.getComponent(orbColors)
        
        if (this.team == "Blue") {
            this.color = colorPicker.cool()
        } else if (this.team == "Red") {
            this.color = colorPicker.warm()
        } else
            this.color = "rgb(255, 0, 255)"

            parentOrb.addComponent(new Polygon(), {fillStyle:this.color, points:this.points})

        this.didStart = true
    }
}