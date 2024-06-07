// 示例数据
var data=data1
var svg = d3.select('svg')
.attr('width',900)
.attr('height',500)
// 创建比例尺
const xScale = d3.scaleTime()
.domain([new Date(1979), new Date(2023)])
.range([0, 700]);
const x = d3.scaleTime()
.domain([new Date('1979'), new Date('2023')])
.range([0, 700]);
const yScale = d3.scaleLinear()
.domain([0, 1]) // 根据你的数据范围设置
.range([400, 0]);

const xAxis = d3.axisBottom(x)
.tickFormat(d3.timeFormat("%Y")); // 设置刻度格式为年份
const yAxis = d3.axisLeft(yScale);
// 创建堆叠数据
const stack = d3.stack()
.keys(["学术不端", "错误", "其他"])
.order(d3.stackOrderNone)
.offset(d3.stackOffsetNone);

const stackedData = stack(data);
// 创建路径
const area = d3.area()
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

// 添加动画效果
d3.selectAll("path")
.attr("opacity", 0)
.transition()
.duration(1000)
.attr("opacity", 1);

var color1 = d3.schemeCategory10[0]
var color2 = d3.schemeCategory10[1]
var color3 = d3.schemeCategory10[2]

console.log(color1)
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
