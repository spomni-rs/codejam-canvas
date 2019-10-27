let elementResizeEvent = require('element-resize-event');

module.exports = class Viewport {

  constructor(node, imageName){
    this.node = node;
    this.ctx = this.node.getContext('2d');

    this._disableSmoothing();

    this._currentImage = null
    this.images = {
      '4x4': require('../../assets/canvas-data/4x4.json'),
      '32x32': require('../../assets/canvas-data/32x32.json')
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

  _calculateScale(imageWidth, imageHeight){
    return [
      this.node.width / imageWidth,
      this.node.height / imageHeight
    ];
  }

  _draw4x4(){

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

    console.log('ctx.getImageData(0) = ', ctx.getImageData(0, 0, 32, 32));
  }

  _draw32x32(){
    const {ctx} = this;

    let arrToUintc8 = this.images['32x32'].reduce((res, row) => {
      return res.concat(row.reduce((res, color) => {
        return res.concat(color);
      }));
    }, [])

    let uintc8 = new Uint8ClampedArray(arrToUintc8)
    let imageData = new ImageData(uintc8, 32, 32);

    ctx.resetTransform();
    ctx.scale(...this._calculateScale(32, 32));

    ctx.putImageData(imageData, 0, 0);

    let imageObject = new Image();
    imageObject.onload = () => {
      ctx.clearRect(0, 0, this.node.width, this.node.height);
      ctx.drawImage(imageObject, 0, 0);
    };
    imageObject.src = this.node.toDataURL();
  }

  _disableSmoothing(){
    this.ctx.mozImageSmoothingEnabled = false;
    this.ctx.webkitImageSmoothingEnabled = false;
    this.ctx.msImageSmoothingEnabled = false;
    this.ctx.imageSmoothingEnabled = false;
  }
}