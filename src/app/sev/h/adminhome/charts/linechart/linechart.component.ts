import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-linechart",
  templateUrl: "./linechart.component.html",
  styleUrls: ["./linechart.component.css"]
})
export class LinechartComponent implements OnInit {
  chartOptions = {
    responsive: true
  };

  chartData = [
    {
      data: [1000000, 2500000, 5000000, 7000000, 5400000],
      label: "Giá"
    },
    {
      data: [1500000, 3000000, 6000000, 8000000, 10000000],
      label: "Giá"
    }
  ];

  chartLabels = [
    "Jan",
    "Feb",
    "Mars",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Octo",
    "Nove",
    "Dece"
  ];

  onChartClick(event) {
    console.log(event);
  }

  constructor() {}
  ngOnInit() {}
}
