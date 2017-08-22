import { Axercise04Page } from './app.po';

describe('axercise04 App', () => {
  let page: Axercise04Page;

  beforeEach(() => {
    page = new Axercise04Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
