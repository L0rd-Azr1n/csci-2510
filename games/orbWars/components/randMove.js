class randMove extends Component {
    speed = 1
    direction = 0
    turnLength = 30

    start() {
        this.timeSinceTurn = 0
    }

    update() {

        this.timeSinceTurn += 1

        if (this.timeSinceTurn >= this.turnLength) {
            this.direction = Math.floor(Math.random() * 8)
            this.timeSinceTurn = 0
        }

        switch (this.direction) {
            case 0:
                //North
                this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
                break;
            case 1:
                //NW
                this.transform.position.x += Time.deltaTime * this.speed
                this.transform.position.y -= Time.deltaTime * this.speed
                break;
            case 2:
                //East
                this.transform.position.x += Time.deltaTime * this.speed    
                break;
            case 3:
                //SE
                this.transform.position.x += Time.deltaTime * this.speed
                this.transform.position.y += Time.deltaTime * this.speed
                break;
            case 4:
                //South
                this.transform.position.y += Time.deltaTime * this.speed
                break;
            case 5:
                //SW
                this.transform.position.x -= Time.deltaTime * this.speed
                this.transform.position.y += Time.deltaTime * this.speed
                break;
            case 6:
                //West
                this.transform.position.x -= Time.deltaTime * this.speed
                break;
            case 7:
                //NW
                this.transform.position.x -= Time.deltaTime * this.speed
                this.transform.position.y -= Time.deltaTime * this.speed
                break;
        }
    }
}