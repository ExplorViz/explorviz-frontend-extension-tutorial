import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | tutorial/edit/tutorial', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:tutorial/edit/tutorial');
    assert.ok(controller);
  });
});
