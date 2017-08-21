import { TimerPage } from './app.po';

describe('timer App', () => {
  let page: TimerPage;

  beforeEach(() => {
    page = new TimerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
