class LevelController extends Component {
    start() {
        SceneManager.loadScene(MenuScene, false)
    }

    update() {
        if (Input.keysDown.includes("Enter"))
            SceneManager.loadScene(LevelSelect, false)
        //console.log(Input.keysDown)
    }
}