import { LifeCyclePage } from './app.po';

describe('life-cycle App', () => {
  let page: LifeCyclePage;

  beforeEach(() => {
    page = new LifeCyclePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
