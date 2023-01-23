// Importeer de css
import '../styles/style.css'

// We can use node_modules directely in the browser!
// import * as d3 from 'd3';

// We can use node_modules directely in the browser!
import * as d3 from "d3";

// (api)data importeren
fetch("lol.json")
  .then((response) => response.json())
  .then((dataSet) => {
    procent(dataSet); //functie uitvoeren
  });

// functie maken + de lengte en breedte bepalen
function procent(dataSet) {
  const chartWidth = 260;
  const chartHeight = 105;

  // X-as
  const xScale = d3
    .scaleLinear()
    .domain([0, 100])
    .range([0, chartWidth]);

  // Y-as
  const yScale = d3
    .scaleBand()
    .domain(d3.map(dataSet, (d) => d.Archief))
    .range([0, chartHeight])
    .paddingInner(0.6);

  //maakt de bar aan
  const bars = d3.select("#bars").selectAll("g").data(dataSet).join("g");

  bars
    .append("rect")
    .attr("height", yScale.bandwidth())
    .attr("width", (d) => xScale(d.Percentage))
    .attr("y", (d) => yScale(d.Archief))
    .attr("fill", "#C9005C")
}
