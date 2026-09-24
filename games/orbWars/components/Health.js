class Health extends Component {
    health = 100
    naturalRegen = 0.5

    update() {
        this.health += this.naturalRegen
    }
}