import { LennybookAngularPage } from './app.po';

describe('lennybook-angular App', () => {
  let page: LennybookAngularPage;

  beforeEach(() => {
    page = new LennybookAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
