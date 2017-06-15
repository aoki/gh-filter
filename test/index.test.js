import test from 'ava';
import Index from '../pages/index';

test('Rener Index', t => {
  const a = Index.render();
  t.deepEqual(a, <h1>Hello</h1>);
});
