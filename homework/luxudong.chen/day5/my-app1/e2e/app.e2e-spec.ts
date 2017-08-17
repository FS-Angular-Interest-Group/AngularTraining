import { MyApp1Page } from './app.po';

describe('my-app1 App', () => {
  let page: MyApp1Page;

  beforeEach(() => {
    page = new MyApp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
