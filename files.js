



function InitWidget(){

    const widget = new ListWidget()
    widget.backgroundColor = Color.green()

    const one = widget.addStack()
    one.addText("one")

    const two = widget.addStack()
    two.addText("two")

    return widget
}

module.exports.initwg = InitWidget