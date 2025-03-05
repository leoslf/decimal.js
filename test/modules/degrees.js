if (typeof T === 'undefined') require('../setup');

T('degrees', function () {
  Decimal.config({
    precision: Decimal.MAX_DIGITS,
    rounding: Decimal.ROUND_HALF_UP,
  });

  var t = function (expected, radians) {
    T.assertEqualDecimal(new Decimal(expected), new Decimal(radians).degrees());
  }

  t(0, 0);
  t(90, Decimal.pi(0.5));
  t(180, Decimal.pi(1));
  t(270, Decimal.pi(1.5));
  t(360, Decimal.pi(2));
});
