if (typeof T === 'undefined') require('../setup');

T('degrees', function () {

  Decimal.config({
    precision: 40,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -9e15,
    maxE: 9e15
  });

  var t = function (expected, radians) {
    T.assertEqualDecimal(new Decimal(expected), new Decimal(radians).degrees());
  }

  t(0, 0);
  t("90.00000000000000000000000000000000000002", Decimal.PI.div(2));
  t(180, Decimal.PI.div(1));
  t(270, Decimal.PI.mul(3).div(2));
  t(360, Decimal.PI.mul(2));
});
