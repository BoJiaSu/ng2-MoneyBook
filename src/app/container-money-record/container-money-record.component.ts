import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-container-money-record]',
  templateUrl: './container-money-record.component.html',
  styleUrls: ['./container-money-record.component.css']
})
export class ContainerMoneyRecordComponent implements OnInit {
  @Input() record = {};
  @Output() removeRecord = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onRemoveRecord() {
  	this.removeRecord.next(this.record);
  }
}
