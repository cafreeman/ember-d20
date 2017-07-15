(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['d20'],
      __esModule: true,
    };
  }

  define('d20', [], vendorModule);
})();
