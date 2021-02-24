var canvas=new fabric.Canvas ("myCanvas");

function new_image() {
  fabric.image.fromURL("birthday.jpg",function(Img) {
      obj=Img;
      obj.scaleToHeight;
      
      obj.set({
          top:0,
          left:50
      });
      canvas.add(obj);
  }

}