class OrbMoveController extends Component {
    speed = this.gameObject.orbClass[2]

    fixedUpdate() {
        //check if there is an enemy in range
        // if yes AttackLoop
        // else Find nearest Orb w/ team different to mine
        // Move to standing distance
        // AttackLoop
        let  myTeam = this.gameObject.tags[0]
        let enemyTeam
        let targetEnemy
        let myPosition = this.gameObject.transform.position

        if (myTeam == "Red") {
            enemyTeam = GameObject.findGameObjectsWithTag("Blue")
        } else {
            enemyTeam = GameObject.findGameObjectsWithTag("Red")
        }

        if (enemyTeam) {
            let minDistance = Number.MAX_VALUE
            let distance
            let enemyPosition

            for (const enemy of enemyTeam) {
                enemyPosition = enemy.transform.position
                distance = enemyPosition.minus(myPosition).magnitude
                if (distance < minDistance) {
                    this.targetEnemy = enemy
                }
            }

            if (minDistance <= this.gameObject.standingRange) {
                // this.gameObject.attack()
                console.log("In range")
            } else {
                //move in the direction of targetEnemy
                console.log("Move")
                let moveAngle = Math.atan2(y, x)
                let moveX = Math.cos(moveAngle) 
                let moveY = Math.sin(moveAngle)
                
                myPosition.x += moveX * Time.deltaTime * this.speed
                myPosition.y += moveY * Time.deltaTime * this.speed
                
            }
        }
        
    }
}