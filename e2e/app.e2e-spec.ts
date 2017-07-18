import { DotCalFrontendPage } from './app.po';

describe('dot-cal-frontend App', () => {
  let page: DotCalFrontendPage;

  beforeEach(() => {
    page = new DotCalFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
