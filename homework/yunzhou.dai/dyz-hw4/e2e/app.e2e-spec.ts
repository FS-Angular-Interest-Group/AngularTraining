import { DyzHw4Page } from './app.po';

describe('dyz-hw4 App', () => {
  let page: DyzHw4Page;

  beforeEach(() => {
    page = new DyzHw4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
