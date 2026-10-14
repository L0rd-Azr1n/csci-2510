class MultiLineTextLabel extends Component {
    fillStyle = "black"
    text = "[BLANK]"

    font = "10px Arial" //Sizepx Font
    maxWidth = 250

    draw(ctx) {
        
        ctx.save()

        // ctx.translate(this.transform.position.x, this.transform.position.y)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)
        // ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle
        ctx.font = this.font

        // let measurement = ctx.measureText(this.text)
        let fontHeight = ctx.measureText("").fontBoundingBoxAscent + ctx.measureText("").fontBoundingBoxDescent
        let y = 0
        let  safeLine = ""
        let possibleLine = ""

        for (let word of this.text.split(" ")) {
            possibleLine = safeLine + word + " "
            if (ctx.measureText(possibleLine).width > this.maxWidth) {
                ctx.fillText(safeLine, 0, y)
                y += fontHeight
                safeLine = word
            } else {
                safeLine = possibleLine
            }
        }
        ctx.fillText(safeLine, 0, y)

        ctx.restore()


    }
}