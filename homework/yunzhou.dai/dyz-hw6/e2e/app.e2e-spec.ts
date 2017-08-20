import { DyzHw6Page } from './app.po';

describe('dyz-hw6 App', () => {
  let page: DyzHw6Page;

  beforeEach(() => {
    page = new DyzHw6Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
