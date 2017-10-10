import { Subject } from './Subject';

describe('Subject', () => {

  it('should subscribe', () => {

    let subject = new Subject<any>();
    let subscription = subject.subscribe(null);

    expect(subscription).toBeDefined();
  });

  it('should publish', () => {

    let
      subject = new Subject<number>(),
      actual = 0,
      expected = 1;

    let subscription = subject.subscribe((value) => {
      actual = value;
    });

    subject.publish(expected);

    expect(actual).toEqual(expected);
  });

  it('should publish async', () => {

    let
      subject = new Subject<number>(),
      actual1 = 0,
      actual2 = 0,
      expected = 1;

    let
      subscription1 = subject.subscribe((value) => {
        actual1 = value;
      }),
      subscription2 = subject.subscribe((value) => {
        actual1 = value;
      });

    subject.publishAsync(expected);

    setTimeout(function () {
      expect(actual1).toEqual(expected);
      expect(actual2).toEqual(expected);
    }, 100);
  });

  it('should unsubscribe', () => {

    let
      subject = new Subject<number>(),
      actual = 0,
      expected = 1;

    let subscription = subject.subscribe((value) => {
      actual = value;
    });

    subject.publish(expected);

    subject.unsubscribe(subscription);

    subject.publish(2);

    expect(actual).toEqual(expected);
  });
});
