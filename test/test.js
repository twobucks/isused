import test from 'ava'
import main from '../'

test('search for the properties in demo folder', async t => {
  const res = await main.search('test.json', 'demo')
  t.is(res[2], 'deep.nope')
})

test('traversing of folder', async t => {
  const res = await main.traverseFolders('demo')
  t.is(res.length, 4)
})
