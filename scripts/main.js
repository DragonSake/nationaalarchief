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

// https://codepen.io/Rraidas/pen/dyXGoea
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});
prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});