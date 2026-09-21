class Polygon extends Component {

    fillStyle = "magenta"
    points = []

    draw(ctx) {

        let position = this.transform.position

        //signal to context to draw smth
        ctx.save()

        //declare center, size and tilt
        ctx.translate(position.x, position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.beginPath()
        for (const point of this.points) {
            ctx.lineTo(point.x, point.y)
        }

        ctx.fillStyle = this.fillStyle
        ctx.fill()

        //signal finished
        ctx.restore()
    }
}