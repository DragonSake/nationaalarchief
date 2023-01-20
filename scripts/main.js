// Importeer de css
import '../styles/style.css'

// We can use node_modules directely in the browser!
// import * as d3 from 'd3';

// fetch("na.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// fetch("lol.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// function kills(dataSet, player = 2) {
//     let pieData = [dataSet[player].Kill, 100 - dataSet[player].Kill];

//     const text = "";
//     const width = 180;
//     const height = 180;
//     const thickness = 20;
//     const radius = Math.min(width, height) / 2;

//     // functie eerste waarde wordt geel, tweede waarde wordt donkerblauw
//     function color(d, i) {
//         if (i === 0) {
//             return "#e7bd3b";
//         } else {
//             return "#131c43";
//         }
//     }

//     // selecteert de div met de class donut
//     const svg = d3
//         .select(".donut")
//         .append("svg")
//         .attr("class", "pie")
//         .attr("width", width)
//         .attr("height", height);

//     const g = svg
//         .append("g")
//         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

//     // cirkel in de donut
//     const arc = d3
//         .arc()
//         .innerRadius(radius - thickness)
//         .outerRadius(radius);

//     const pie = d3
//         .pie()
//         .value(function (d) {
//             return d;
//         })
//         .sort(null);

//     const path = g
//         .selectAll("path")
//         .data(pie(pieData))
//         .enter()
//         .append("g")
//         .append("path")
//         .attr("d", arc)
//         .attr("fill", (d, i) => color(d, i))
//         .each(function (d, i) {
//             this._current = i;
//         });

//     svg
//         .append("svg:text")
//         .attr("dx", "90px")
//         .attr("dy", "100px")
//         .attr("text-anchor", "middle")
//         .attr("font-size", "40")
//         .text(dataSet[player].Kill);
// }

var data = [{
        name: "Faker",
        value: 60
    },
    {
        name: "Others",
        value: 40
    },
];

var text = "";

var width = 180;
var height = 180;
var thickness = 20;

var radius = Math.min(width, height) / 2;
//var color = d3.scaleOrdinal(d3.schemeCategory10);

function color(d) {
    if (d.value === 60) {
        return '#01689b'
    } else {
        return "#fff"
    }
}

var svg = d3.select("#chart")
    .append('svg')
    .attr('class', 'pie')
    .attr('width', width)
    .attr('height', height);

var svg2 = d3.select("#chart2")
    .append('svg')
    .attr('class', 'pie')
    .attr('width', width)
    .attr('height', height);

var g = svg.append('g')
    .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

var arc = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius);

var pie = d3.pie()
    .value(function (d) {
        return d.value;
    })
    .sort(null);

var path = g.selectAll('path')
    .data(pie(data))
    .enter()
    .append("g")
    .append('path')
    .attr('d', arc)
    .attr('fill', d => color(d))
    .each(function (d, i) {
        this._current = i;
    });

g.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '.35em')
    .text(text);

svg.append("svg:text")
    .attr("dy", "110px")
    .attr("dx", "100px")
    .attr("text-anchor", "middle")
    .attr("font-size", "40")
    .text("60%");