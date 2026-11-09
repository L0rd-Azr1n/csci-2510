class LevelController extends Component {
    targetLevel
    
    start() {
        SceneManager.loadScene(MenuScene, false)
    }

    update() {
        if (SceneManager.currentScene == MenuScene && Input.keysDown.includes("Enter"))
            SceneManager.loadScene(LevelSelect, false)
    }
}