class LaserController extends Component { 
    update(){
        this.transform.position.y -= Time.deltaTime * 200
    
        if (this.transform.position.y < 50){
            this.gameObject.destroy()
        }

        //Collision Check
        let myPosition = this.transform.position
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")
        
        for (const enemyGameObject of enemyGameObjects){

            let enemyPosition = GameObject.find("Enemy").transform.position
            let distance = myPosition.minus(enemyPosition).magnitude

            if(distance < 20) {
                this.gameObject.destroy()
                //enemyGameObject.destroy()
                let healthComponent = enemyGameObject.getComponent(Health)
                healthComponent -= 1
                //Globals.points ++
                let gameObjects = GameObject.findGameObjectsByType(Transform)
                for (const gameObject of gameObjects) {
                    this.gameObject.braodcastMessage("updatePoints", [1])
                }
            }
        }
        // let totalLasers = GameObject.findGameObjectsWithTag("laser")
        // let laserCount = 0
        // for (const laser of totalLasers) {
        //      laserCount ++
        // }
        // console.log(laserCount)
        // console.log(SceneManager.currentScene.gameObjects)
    }
}