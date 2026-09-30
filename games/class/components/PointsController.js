class PointsController extends Component {
    update() {
        this.gameObject.getComponenet(TextLabel).text = Globals.points + " points"
    }

    updatePoints(delta) {
        Globals.points += delta
    }
}