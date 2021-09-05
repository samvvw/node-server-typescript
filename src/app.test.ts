import { assert } from 'chai'
import request from 'supertest'
import app from './app'

describe('GET /', function () {
  it('Server Working', async function () {
    const resp = await request(app).get('/').send()
    assert.equal(resp.text, 'It is working')
  })
})
describe('GET /api/', function () {
  it('Api working', async function () {
    const resp = await request(app).get('/api/').send()
    assert.equal(resp.text, 'Api working')
  })
})
describe('POST /api/users/sign-in', function () {
  it('userSignin working', async function () {
    const resp = await request(app).post('/api/users/sign-in').send()
    assert.equal(resp.text, 'userSignin')
  })
})
describe('POST /api/users/sign-up', function () {
  it('userSignup working', async function () {
    const resp = await request(app).post('/api/users/sign-up').send()
    assert.equal(resp.text, 'userSignup')
  })
})
