import { Day7Page } from './app.po';

describe('day7 App', () => {
  let page: Day7Page;

  beforeEach(() => {
    page = new Day7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
