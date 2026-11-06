class OrbMoveController extends Component {
    static standingRange = 250

    update() {
        //check if there is an enemy in range
        // if yes AttackLoop
        // else Find nearest Orb w/ team different to mine
        // Move to standing distance
        // AttackLoop
        let  myTeam = this.gameObject.tags[0]
        let enemyTeam = "Error"
        let targetEnemy
        let myPosition = this.gameObject.transform.position

        if (myTeam == "Red") {
            enemyTeam = GameObject.findGameObjectsWithTag("Blue")
        } else {
            enemyTeam = GameObject.findGameObjectsWithTag("Red")
        }
        if (!enemyTeam) {
            // Idle behavior
        } else {
            let minDistance = enemyTeam[0].transform.position

            for (const enemy of enemyTeam) {
                let enemyPosition = enemy.transform.position
                let distance = myPosition.minus(enemyPosition).magnitude
                if (distance < minDistance) {
                    targetEnemy = enemy
                }
            }
            if (minDistance <= this.gameObject.standingRange) {
                // this.gameObject.attack()
                console.log("In range")
            } else if (minDistance - this.gameObject.standingRange < 0) {
                // move the difference in the direction of targetEnemy
                console.log("Partial move")
            } else {
                //move in the direction of targetEnemy
                console.log("Full Move")
            }
        }
    }
}