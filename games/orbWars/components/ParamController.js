class ParamController extends Component {
    team
    color
    orbClass
    points = Assets.circle

    start() {
        if (this.team == "Blue") {
            this.color = "rgb(0, 255, 255)"
        } else {
            this.color = "rgb(255, 0, 0)"
        }

        let parentOrb = GameObject.find("Player")
        
        parentOrb.addComponent(new Polygon(), {fillStyle:this.color, points:this.points})

        this.didStart = true
    }
}