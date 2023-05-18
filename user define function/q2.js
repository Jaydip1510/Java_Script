function RectangleArea(length, width) {
    return length * width;
  }
  
 
  function TriangleArea(base, height) {
    return (base * height) / 2;
  }
  
  function CircleArea(radius) {
    return Math.PI * radius * radius;
  }
  
  let rectangleArea = RectangleArea(4, 6);
  document.write("Rectangle area:-"+ rectangleArea+"<br>");
  
  let triangleArea = TriangleArea(5, 8);
  document.write("Triangle area:-"+ triangleArea+"<br>");
  
  let circleArea = CircleArea(3);
  document.write("Circle area:-"+ circleArea);