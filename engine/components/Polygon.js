class Polygon extends Component {

    fillStyle = "magenta"
    points = []
    alpha = 1

    draw(ctx) {


        //signal to context to draw smth
        ctx.save()

        ctx.globalAlpha = this.alpha

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