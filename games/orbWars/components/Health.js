class Health extends Component {
    maxHealth = 100
    health = 100
    naturalRegen = 0.5

    update() {
        if (this.health < this.maxHealth) {
            let x = this.maxHealth -= this.health
            if (x <= this.naturalRegen) {
                this.health += x
            } else
                this.health += this.naturalRegen
        }
    }
}