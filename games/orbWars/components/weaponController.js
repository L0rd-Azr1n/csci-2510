class weaponController extends Component {

    swing() {
        this.transform.rotate(-Math.PI/4)
        this.transform.rotate(Math.PI)
        this.transform.rotate(-Math.PI/4)
    }

    update() {
        if (Input.keysDown.includes("KeyF"))
            this.swing()
    }
}