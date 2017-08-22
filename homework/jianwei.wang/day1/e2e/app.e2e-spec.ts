import { MyApp2Page } from './app.po';

describe('my-app2 App', () => {
  let page: MyApp2Page;

  beforeEach(() => {
    page = new MyApp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
