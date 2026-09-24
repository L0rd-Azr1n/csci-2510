class LocatePlayerComponent extends Component {
    speed = 100
    
    update() {

        let chaserPosition = this.transform.position
        let playerPosition = GameObject.find("Player").transform.position

        if (chaserPosition.x > playerPosition.x) {
            this.transform.position.x -= Time.deltaTime * this.speed
        }else {
            this.transform.position.x += Time.deltaTime * this.speed
        }

        if (chaserPosition.y > playerPosition.y) {
            this.transform.position.y -= Time.deltaTime * this.speed
        }else {
            this.transform.position.y += Time.deltaTime * this.speed
        }
    }
}