/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { KeyRegistry } from './reflective_key';
import { suite, beforeEach } from 'razmin';
import { expect } from 'chai';

suite(describe => {
  describe('key', it => {
    let registry: KeyRegistry;

    beforeEach(() => registry = new KeyRegistry());

    it('should be equal to another key if type is the same', function() {
      expect(registry.get('car')).to.eq(registry.get('car'));
    });

    it('should not be equal to another key if types are different', function() {
      expect(registry.get('car')).not.to.eq(registry.get('porsche'));
    });

    it('should return the passed in key', function() {
      expect(registry.get(registry.get('car'))).to.eq(registry.get('car'));
    });
  });
});