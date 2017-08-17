'use strict'; // necessary for es6 output in node

import { } from 'jasmine';
import { browser, element, by } from 'protractor';

describe('Component Communication Cookbook Tests', function () {
  beforeAll(function () {
    browser.get('?e2e');
  });

  // Can't run timer tests in protractor because
  // interaction w/ zones causes all tests to freeze & timeout.
  xdescribe('Parent calls child via local var', function () {
    countDownTimerTests('countdown-parent-lv');
  });

  xdescribe('Parent calls ViewChild', function () {
    countDownTimerTests('countdown-parent-vc');
  });

  function countDownTimerTests(parentTag: string) {
    it('timer and parent seconds should match', function () {
      let parent = element(by.tagName(parentTag));
      let message = parent.element(by.tagName('countdown-timer')).getText();
      browser.sleep(10); // give `seconds` a chance to catchup with `message`
      let seconds = parent.element(by.className('seconds')).getText();
      expect(message).toContain(seconds);
    });

    it('should stop the countdown', function () {
      let parent = element(by.tagName(parentTag));
      let stopButton = parent.all(by.tagName('button')).get(1);

      stopButton.click().then(function () {
        let message = parent.element(by.tagName('countdown-timer')).getText();
        expect(message).toContain('Holding');
      });
    });
  }
});