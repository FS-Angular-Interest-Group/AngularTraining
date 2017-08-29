import { DyzHw7Page } from './app.po';

describe('dyz-hw7 App', () => {
  let page: DyzHw7Page;

  beforeEach(() => {
    page = new DyzHw7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
