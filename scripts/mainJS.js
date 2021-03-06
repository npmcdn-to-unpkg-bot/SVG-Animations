$(document).ready(function () {

  $(window).resize(function () {
    ResizeSVG();
  });
  ResizeSVG();
  InitializeComponents();
});

function ResizeSVG() {
  $('#svg').css('transform', 'scale(' + Math.min((0.8 * $(window).height() / 600), (0.9 * $(window).width() / 800)) + ')');
}

function InitializeComponents() {
  var svg = d3.select('svg');

  var topLeft = svg.append('g').append('path')
  .attr('d', 'M0,40 Q40,115 80,40 Q40,-35 0,40 M80,40 Q130,110 70,170 Q90,90 55,70Z')
  .attr('fill','lime')
  .attr('stroke', 'lime')
  .attr('stroke-width', '5');

  var topRight = svg.append('g').append('path')
  .attr('d', 'M0,40 Q40,115 80,40 Q40,-35 0,40 M80,40 Q130,110 70,170 Q90,90 55,70Z')
  .attr('fill', 'lime')
  .attr('stroke', 'lime')
  .attr('stroke-width', '5')
  .attr('transform', 'translate(695,0)');

  d3.selectAll('g')
  .transition()
        .duration(2000)
        .attr('transform','translate(260,340)')
        .attrTween("transform", function () {
          var i = d3.interpolate(0, 270);
          return function (t) {
            return 'rotate(' + i(t) + ',' + '250,350)';
          }
          
  })
   
}