import { AnasWapPage } from './app.po';

describe('ng-lazyload-starter App', () => {
  let page: AnasWapPage;

  beforeEach(() => {
    page = new AnasWapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
