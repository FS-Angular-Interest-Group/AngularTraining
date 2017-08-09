import { Day5Page } from './app.po';

describe('day5 App', () => {
  let page: Day5Page;

  beforeEach(() => {
    page = new Day5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
