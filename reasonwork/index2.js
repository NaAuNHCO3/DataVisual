// 示例数据
var data = data2
var svg = d3.select('svg')
.attr('width',1000)
.attr('height',550)
// 创建比例尺
var xScale = d3.scaleTime()
.domain([new Date(2000), new Date(2023)])
.range([0, 700]);
var x = d3.scaleTime()
.domain([new Date('2000'), new Date('2023')])
.range([0, 700]);
var yScale = d3.scaleLinear()
.domain([0, 50000]) // 根据你的数据范围设置
.range([400, 0]);

var xAxis = d3.axisBottom(x)
.tickFormat(d3.timeFormat("%Y")); // 设置刻度格式为年份
var yAxis = d3.axisLeft(yScale);
// 创建堆叠数据
var stack = d3.stack()
.keys(["学术不端", "错误", "其他"])
.order(d3.stackOrderNone)
.offset(d3.stackOffsetNone);

var stackedData = stack(data);
// 创建路径
var area = d3.area()
.x(d => xScale(new Date(d.data.year)))
.y0(d => yScale(d[0]))
.y1(d => yScale(d[1]));


// 绘制河流图
d3.select("svg")
.selectAll("path")
.data(stackedData)
.enter()
.append("path")
.attr("d", area)
.attr("fill", (d, i) => d3.schemeCategory10[i])
.attr("transform",`translate(50,50)`)

// 添加g(axis)
d3.select("svg")
.append("g")
.attr("transform", "translate(50,450)") // 将 X 轴移动到底部
.call(xAxis);

d3.select("svg")
.append("g")
.attr("transform", "translate(50,50)") // 将 Y 轴移动到左侧
.call(yAxis);


//
svg.append('text')
   .attr('class', 'x-axis-label') // 添加一个类名，方便样式设置
   .attr('x', 760) // 设置x轴轴名的x坐标
   .attr('y', 470) // 设置x轴轴名的y坐标
   .style('text-anchor', 'middle') // 设置文本居中对齐
   .text("年份"); // 设置x轴轴名的文本
svg.append('text')
   .attr('class', 'y-axis-label') // 添加一个类名，方便样式设置
   .attr('x', 30) // 设置x轴轴名的x坐标
   .attr('y', 30) // 设置x轴轴名的y坐标
   .style('text-anchor', 'middle') // 设置文本居中对齐
   .text("撤稿数"); // 设置x轴轴名的文本
// 添加动画效果
d3.selectAll("path")
.attr("opacity", 0)
.transition()
.duration(1000)
.attr("opacity", 1);

//y-average-line

var yaveline1 = function(d) {
  return yScale(9529);
}
var xaveline1 = function(d) {
  return yScale(0);
}
var line = svg.append("line")
  .attr("x1", 0)
  .attr("x2", xScale(new Date(2010)))
  .attr("y1", yaveline1)
  .attr("y2", yaveline1)
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "3,3")
  .attr("transform","translate(50,50)");

var line = svg.append("line")
  .attr("x1", xScale(new Date(2011)))
  .attr("x2", xScale(new Date(2011)))
  .attr("y1", yScale(10681))
  .attr("y2", 400)
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "3,3")
  .attr("transform","translate(50,50)");

var line = svg.append("line")
  .attr("x1", 0)
  .attr("x2", xScale(new Date(2011)))
  .attr("y1", yScale(10681))
  .attr("y2", yScale(10681))
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "3,3")
  .attr("transform","translate(50,50)");

var line = svg.append("line")
  .attr("x1", xScale(new Date(2010)))
  .attr("x2", xScale(new Date(2010)))
  .attr("y1", yaveline1)
  .attr("y2", 400)
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "3,3")
  .attr("transform","translate(50,50)");
var line = svg.append("line")
  .attr("x1", xScale(new Date(2020)))
  .attr("x2", xScale(new Date(2020)))
  .attr("y1", yScale(9548))
  .attr("y2", 400)
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "3,3")
  .attr("transform","translate(50,50)");

var line = svg.append("line")
  .attr("x1", 0)
  .attr("x2", xScale(new Date(2020)))
  .attr("y1", yScale(9548))
  .attr("y2", yScale(9548))
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "3,3")
  .attr("transform","translate(50,50)");

var line = svg.append("line")
  .attr("x1", 0)
  .attr("x2", xScale(new Date(2023)))
  .attr("y1", yScale(39984))
  .attr("y2", yScale(39984))
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "3,3")
  .attr("transform","translate(50,50)");

var line = svg.append("line")
  .attr("x1", xScale(new Date(2023)))
  .attr("x2", xScale(new Date(2023)))
  .attr("y1", yScale(39984))
  .attr("y2", 400)
  .attr("stroke-width", 1)
  .attr("stroke", "black")
  .attr("stroke-dasharray", "3,3")
  .attr("transform","translate(50,50)");
var color1 = d3.schemeCategory10[0]
var color2 = d3.schemeCategory10[1]
var color3 = d3.schemeCategory10[2]

// 绘制图例的颜色块
svg.append('rect')
  .attr('class','bar')
  .attr('x', 780)
  .attr('y', 40) // 设置图例颜色块的横坐标位置
  .attr('width', 25) // 设置图例颜色块的宽度
  .attr('height', 25) // 设置图例颜色块的高度
  .attr('fill', color3);

  svg.append('rect')
  .attr('class','bar')
  .attr('x', 780)
  .attr('y', 80) // 设置图例颜色块的横坐标位置
  .attr('width', 25) // 设置图例颜色块的宽度
  .attr('height', 25) // 设置图例颜色块的高度
  .attr('fill', color2);

  svg.append('rect')
  .attr('class','bar')
  .attr('x', 780)
  .attr('y', 120) // 设置图例颜色块的横坐标位置
  .attr('width', 25) // 设置图例颜色块的宽度
  .attr('height', 25) // 设置图例颜色块的高度
  .attr('fill', color1);
// 添加文本标签
svg.append('text')
  .attr('x', 820) // 设置文本标签的横坐标位置
  .attr('y', 50) // 设置文本标签的纵坐标位置
  .attr('dy', '.35em')
  .style('text-anchor', 'start')
  .text('其他');
svg.append('text')
  .attr('x', 820) // 设置文本标签的横坐标位置
  .attr('y', 90) // 设置文本标签的纵坐标位置
  .attr('dy', '.35em')
  .style('text-anchor', 'start')
  .text('错误');
svg.append('text')
  .attr('x', 820) // 设置文本标签的横坐标位置
  .attr('y', 130) // 设置文本标签的纵坐标位置
  .attr('dy', '.35em')
  .style('text-anchor', 'start')
  .text('学术不端');