import { assert } from 'chai'
import request from 'supertest'
import app from './app'

describe('GET /', function () {
  it('Server Working', async function () {
    const resp = await request(app).get('/').send()
    assert.equal(resp.text, 'It is working')
  })
})
