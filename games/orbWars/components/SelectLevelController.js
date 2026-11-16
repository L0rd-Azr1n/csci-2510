class SelectLevelController extends Component{
    targetLevel
    levelComplete = false
    
    start() {
        console.log(SceneManager.currentScene)
        console.log(this.targetLevel)
    }

    update() {
        if (this.levelComplete)
            SceneManager.loadScene(this.targetLevel, false)
    }

    onMouseOver() {
        console.log("Mouse over" + this.gameObject)
        if (Input.mouseButtonsDown.includes("Mouse1")) {
            this.levelComplete = true
        }
    }
}
