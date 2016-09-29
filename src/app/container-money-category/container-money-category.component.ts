import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-container-money-category',
  templateUrl: './container-money-category.component.html',
  styleUrls: ['./container-money-category.component.css']
})
export class ContainerMoneyCategoryComponent{
  @Input() categories: Array<string> = [];
  @Output() categorySelected = new EventEmitter();
  isSelectorVisibile: boolean = false;

  showSelector(value: boolean) {
  	this.isSelectorVisibile = value;
  }

  onSelectCategory(category) {
  	this.categorySelected.next(category);
  	this.showSelector(false);
  }
}
