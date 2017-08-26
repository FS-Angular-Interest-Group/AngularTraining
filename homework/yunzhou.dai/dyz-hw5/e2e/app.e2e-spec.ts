import { DyzHw5Page } from './app.po';

describe('dyz-hw5 App', () => {
  let page: DyzHw5Page;

  beforeEach(() => {
    page = new DyzHw5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
