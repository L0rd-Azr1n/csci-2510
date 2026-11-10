class SelectLevelController extends Component{
    currentLevel = SceneManager.currentScene
    targetLevel
    levelComplete = false
    
    start() {
        console.log(this.currentLevel)
        console.log(this.targetLevel)
    }

    update() {
        if (this.levelComplete)
            SceneManager.loadScene(this.targetLevel, false)
    }
}
