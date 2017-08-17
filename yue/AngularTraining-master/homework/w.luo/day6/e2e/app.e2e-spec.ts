import { Day6Page } from './app.po';

describe('day6 App', () => {
  let page: Day6Page;

  beforeEach(() => {
    page = new Day6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
