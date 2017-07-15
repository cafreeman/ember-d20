/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-d20',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/d20.js');
    this.import('vendor/shims/d20.js');
  },

  treeForVendor(vendorTree) {
    const d20Tree = new Funnel(path.dirname(require.resolve('d20')), {
      files: ['d20.js']
    });

    return new MergeTrees([vendorTree, d20Tree]);
  }
};
