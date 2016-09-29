import { NgMoneymoneyPage } from './app.po';

describe('ng-moneymoney App', function() {
  let page: NgMoneymoneyPage;

  beforeEach(() => {
    page = new NgMoneymoneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
