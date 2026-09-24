class PressStartCommponent extends Component {
    update() {
        if (Input.keysDown.includes("KeyEnter"))
            SceneManager.nextScene = TestScene
    }
}