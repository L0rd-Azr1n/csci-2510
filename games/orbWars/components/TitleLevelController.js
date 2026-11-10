class TitleLevelController extends Component {
    currentLevel = SceneManager.currentScene
    targetLevel
    levelComplete = false
    
    start() {
        console.log(this.currentLevel)
        console.log(this.targetLevel)
    }

    update() {
        if (Input.keysDown.includes("Enter"))
            SceneManager.loadScene(this.targetLevel, false)
    }
}