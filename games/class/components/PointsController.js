class PointsController extends Component {
    update() {
        this.GameObject.getComponenet(TextLabel).text = Globals.points + " points"
    }
}