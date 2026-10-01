class LevelController extends Component {
    start() {
        SceneManager.loadScene(GenericLevel, true)
    }

    update() {
        let enemyGameObjects = GameObject.findGameObjectsWithTag("Enemy")

        if(!enemyGameObjects) {
            SceneManager.loadScene(Level02)
        }
    }
}