class LevelController extends Component {
    start() {
        SceneManager.loadScene(MenuScene, false)
    }

    update() {
        if (Input.keysDown.includes("Enter"))
            SceneManager.loadScene(TestScene, false)
        //console.log(Input.keysDown)
    }
}