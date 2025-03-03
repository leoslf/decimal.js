if (typeof T === 'undefined') require('../setup');

T('radians', function () {

  // Decimal.config({
  //   precision: 40,
  //   rounding: 4,
  //   toExpNeg: -7,
  //   toExpPos: 21,
  //   minE: -9e15,
  //   maxE: 9e15
  // });

  var t = function (expected, degrees) {
    T.assertEqualDecimal(new Decimal(expected), new Decimal(degrees).radians());
  }

  t(0, 0);
  t(Decimal.PI.div(2), 90);
  t(Decimal.PI.div(1), 180);
  t(Decimal.PI.mul(1.5), 270);
  t(Decimal.PI.mul(2), 360);
});
