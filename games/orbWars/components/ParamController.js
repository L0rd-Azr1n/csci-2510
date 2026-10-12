class ParamController extends Component {
    team
    color
    orbClass
    points = Assets.circle

    start() {
        let thisColor = new orbColors()
        this.gameObject.addComponent(thisColor)
       
        
        if (this.team == "Blue") {
            this.color = thisColor.cool()
        } else if (this.team == "Red") {
            this.color = thisColor.warm()
        } else
            this.color = "rgb(255, 0, 255)"

        this.gameObject.addComponent(new Polygon(), {fillStyle:this.color, points:this.points})

        this.didStart = true
    }
}