class Input {
    static keysDown = []

    static keydown(event) {
        if (!Input.keysDown.includes(event.code))
            Input.keysDown.push(event.code)
        console.log(this.keysdown)
    }

    static keyup(event) {
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index, 1)

    }
}