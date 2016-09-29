import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-main',
  templateUrl: './container-main.component.html',
  styleUrls: ['./container-main.component.css']
})
export class ContainerMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories: Array<string> = ["食", "衣", "住", "行", "育", "樂", "其他"];

  records = [
    { category: "食", date: "2016-09-23", description: "晚餐", price: 240, state: 1 },
    { category: "衣", date: "2016-09-23", description: "襯衫", price: 580, state: 1 },
    { category: "行", date: "2016-09-23", description: "交通費", price: 53, state: 1 },
    { category: "食", date: "2016-09-23", description: "午餐", price: 80, state: 1 },
    { category: "收", date: "2016-09-23", description: "發薪日", price: 42500, state: 0 },
    { category: "食", date: "2016-09-22", description: "晚餐", price: 120, state: 1 }
  ]

  onMoneyRecordRemoved(record, i) {
    this.records.splice(i, 1);
  }

  onCreateRecord(record) {
    console.log(record);
    this.records.push(record);
  }
}
