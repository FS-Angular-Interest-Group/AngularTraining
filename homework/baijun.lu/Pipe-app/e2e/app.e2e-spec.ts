import { PipeAppPage } from './app.po';

describe('pipe-app App', () => {
  let page: PipeAppPage;

  beforeEach(() => {
    page = new PipeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
