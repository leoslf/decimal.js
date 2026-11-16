if (typeof T === 'undefined') require('../setup');

T('equals', function () {

  function t(a, b, expected) {
    T.assertEqual(expected, Decimal.equals(a, b));
    T.assertEqual(expected, new Decimal(a).equals(b));
  }

  t(1, 1, true);
  t(0, -0, true);
  t('1.25', 1.25, true);
  t(1.25, -75, false);
  t(1, 2, false);
  t(-1, 1, false);
  t(NaN, NaN, false);
  t(Infinity, Infinity, true);
  t(Infinity, -Infinity, false);

  // a clone's static compares by its own constructor
  T.assertEqual(true, Decimal.clone({ precision: 34 }).equals('0.1', 0.1));
});
