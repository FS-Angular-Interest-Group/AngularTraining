import { Day8Page } from './app.po';

describe('day8 App', () => {
  let page: Day8Page;

  beforeEach(() => {
    page = new Day8Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
