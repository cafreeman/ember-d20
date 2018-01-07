(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['d20'],
      'roll': self['d20']['roll'],
      'verboseRoll': self['d20']['verboseRoll'],
      __esModule: false,
    };
  }

  define('d20', [], vendorModule);
})();
