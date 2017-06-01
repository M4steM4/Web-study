<style>
   circle {
     stroke: black;
     stroke-width: 1.5px;
     fill: steelblue;
   }

   text {
     stroke: white;
     text-anchor: middle;
   }

   path {
     stroke: darkgrey;
     stroke-width: 2px;
     fill: none;
   }
 </style>
 <script>
    var width = 500;
    var height = 300;
    var points = [[50, 140], [200, 40], [400, 230]];
    var textVal = ["가", "나", "다"];

    var x = d3.scale.linear().range([0, width]),
        y = d3.scale.linear().range([height, 0]);

    var chart = d3.select("svg.d3")
      .attr("width", width)
      .attr("height", height)

    var g = chart.selectAll("g")
      .data(points)
      .enter();

    var line = d3.svg.line()
      .interpolate("monotone");

    var path = chart.append("path")
      .attr("class", "line")
      .attr("d", line(points));

    var group = g.append("g")
      .attr("transform", function(d, i) {
        return "translate(" + d[0] + ", " + d[1] + ")";
      });

    var circle = group.append("circle").attr("r", 30);

    var text = group.append("text")
      .attr("dy", ".35em")
      .text(function(d, i) { return textVal[i]; });

 </script>
