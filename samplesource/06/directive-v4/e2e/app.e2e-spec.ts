import { DirectiveV4Page } from './app.po';

describe('directive-v4 App', () => {
  let page: DirectiveV4Page;

  beforeEach(() => {
    page = new DirectiveV4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
