class Health extends Component {
    maxHealth = 100
    health = 100
    naturalRegen = 0.5

    start() {
        this.gameObject.addComponent(new Polygon(), {points:Assets.rectangle, fillStyle:"Red"})
        let indicator = this.gameObject.addComponent(new Polygon(), {points:Assets.rectangle, fillStyle:"Lime"})
        this.didStart = true
    }

    update() {
        if (this.health < this.maxHealth && this.health > 0) {
            let x = this.maxHealth -= this.health
            if (x <= this.naturalRegen) {
                this.health += x
            } else
                this.health += this.naturalRegen
        } else {
            this.gameObject.destroy()
        }
    }
}