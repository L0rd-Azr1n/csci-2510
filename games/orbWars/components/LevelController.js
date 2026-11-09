class LevelController extends Component {
    currentLevel
    targetLevel
    levelComplete = false
    
    start() {
        SceneManager.loadScene(this.currentLevel, false)
        this.didStart = true

        console.log(this.currentLevel)
        console.log(this.targetLevel)
    }

    update() {
        if (this.levelComplete)
            SceneManager.loadScene(this.targetLevel, false)
    }
}