class Polygon extends Component {

    fillStyle = "magenta"
    points = []

    draw(ctx) {


        //signal to context to draw smth
        ctx.save()

        //declare center, size and tilt
        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.rotate(this.transform.rotation)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)

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