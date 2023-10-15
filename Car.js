/*AFRAME.registerComponent("car", {
    schema: {
        moveX: {type: "number", default: 1}
    },

    tick: function() {
        this.data.moveX = this.data.moveX + 0.01
        var pos = this.el.getAttribute("position")
        pos.x = this.data.moveX
        this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
    }
})*/

AFRAME.registerComponent("car", {
    schema: {
        modelRef: {type: "string", default: "./cartoon_car/scene.gltf"}
    },

    init: function() {
        this.el.setAttribute("gltf-model", this.data.modelRef)
        const position = { x: 10, y: 7, z: 70 }
        const rotation = { x: 0, y: -40, z: 0 }
        const scale = { x: 3, y: 3, z: 3}
        this.el.setAttribute("position", position)
        this.el.setAttribute("rotation", rotation)
        this.el.setAttribute("scale", scale)
    }
})