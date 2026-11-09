class Health extends Component {
    maxHealth = this.gameObject.orbClass[0]
    currentHealth = this.maxHealth
    naturalRegen = this.gameObject.orbClass[5]

    start() {
        this.gameObject.addComponent(new Polygon(), {points:Assets.rectangle, fillStyle:"Red"})
        let indicator = this.gameObject.addComponent(new Polygon(), {points:Assets.rectangle, fillStyle:"Lime"})
        this.didStart = true
    }

    update() {
        if (this.currentHealth < this.maxHealth && this.currentHealth > 0) {
            let x = this.maxHealth -= this.currentHealth
            if (x <= this.naturalRegen) {
                this.currentHealth += x
            } else
                this.currentHealth += this.naturalRegen
        } else {
            this.gameObject.destroy()
        }
    }
}