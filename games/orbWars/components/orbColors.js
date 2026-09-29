class orbColors extends Component {
    red = 0
    green = 0
    blue = 0
    
    warm() {
        this.red = Math.floor(Math.random() * 128) + 128
        this.green = Math.floor(Math.random() * 128) + 1
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")"
    }

    cool() {
        this.green = Math.floor(Math.random() * 128) + 1
        this.blue = Math.floor(Math.random() * 128) + 128
        return "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")"
    }
}