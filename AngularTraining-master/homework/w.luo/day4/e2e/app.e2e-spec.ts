import { D4Page } from './app.po';

describe('d4 App', () => {
  let page: D4Page;

  beforeEach(() => {
    page = new D4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
