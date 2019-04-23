import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tutorial/list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tutorial/list');
    assert.ok(route);
  });
});
