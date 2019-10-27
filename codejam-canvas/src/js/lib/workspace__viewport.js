let elementResizeEvent = require('element-resize-event');

module.exports = class Viewport {

  constructor(node, imageName){
    this.node = node;
    this.ctx = this.node.getContext('2d');
    this._currentImage = null
    this.images = {
      '4x4': require('../../assets/canvas-data/4x4.json')
    }

    this.draw(imageName)

    elementResizeEvent(this.node, () => {
      this[`_draw${this._currentImage}`]();
    })
  }

  draw(imageName){
    if (!this.images[imageName]){
      throw new Error(`Unknow image identifier "${imageName}"`);
    }

    this._currentImage = imageName;
    this[`_draw${imageName}`]();
  }

  _draw4x4(){
    console.log('draw4x4');
    const {ctx} = this;
    const imageData = this.images['4x4'];

    ctx.resetTransform();
    ctx.scale(...this._calculateScale(4, 4));

    imageData.forEach((row, y) => {
      row.forEach((color, x) => {

        ctx.fillStyle = `#${color}`;
        ctx.fillRect(x, y, 1, 1);
      });
    });
  }

  _calculateScale(imageWidth, imageHeight){
    return [
      this.node.width / imageWidth,
      this.node.height / imageHeight
    ];
  }
}