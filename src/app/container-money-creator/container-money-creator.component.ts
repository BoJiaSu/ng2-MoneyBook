import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container-money-creator',
  templateUrl: './container-money-creator.component.html',
  styleUrls: ['./container-money-creator.component.css']
})
export class ContainerMoneyCreatorComponent {
  @Input() categories: Array<string> = [];
  @Output() createRecord = new EventEmitter();
  newRecord = {
    category: '',
    date: Date.now(),
    description: '',
    state: 1,
    price: ''
  }
  fullForm: boolean = false;

  getState(value) {
    this.newRecord.state = value
  }

  onCreateRecord() {
    const { category, date, description, state, price } = this.newRecord;

    if ( description && price ) {
      this.createRecord.next({ category, date, description, state, price });
      this.onReset();
    }
  }

  onReset() {
    this.newRecord = {
      category: '',
      date: Date.now(),
      description: '',
      state: 1,
      price: ''
    }
  }

  toggleFullForm(value: boolean) {
    this.fullForm = value;
  }

  clearForm() {
    this.onReset();
    this.toggleFullForm(false);
  }

  onCategorySelected(category) {
    // console.log(category);
    this.newRecord.category = category;
  }
}
