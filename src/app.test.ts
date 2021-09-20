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

describe('User API Tests', function () {
  before(async function () {
    try {
      const req = await request(app).del('/test/drop-db').send()
      assert.equal(req.status, 200)
      console.log('    DB dropped, ready for tests.\n')
    } catch (error) {
      console.log(error)
    }
  })

  describe('POST /api/users/sign-up', function () {
    it('userSignup working', async function () {
      const data = {
        userName: 'Pepito Test',
        email: 'pepito@gmail.com',
        password: '123456',
      }
      const resp = await request(app)
        .post('/api/users/sign-up')
        .set('Content-type', 'application/json')
        .send(data)

      assert.equal(resp.status, 201)
      assert.ok(resp.body)
    })
  })
  describe('POST /api/users/sign-up', function () {
    it('userSignup working', async function () {
      const data = {
        userName: 'Pepito Test',
        email: 'pepito2@gmail.com',
        password: '123456',
      }
      const resp = await request(app)
        .post('/api/users/sign-up')
        .set('Content-type', 'application/json')
        .send(data)

      assert.equal(resp.status, 201)
      assert.ok(resp.body)
    })
  })
  describe('POST /api/users/sign-up', function () {
    it('userSignup working', async function () {
      const data = {
        userName: 'Pepito Test',
        email: 'pepito2@gmail.com',
        password: '123456',
      }
      const resp = await request(app)
        .post('/api/users/sign-up')
        .set('Content-type', 'application/json')
        .send(data)

      assert.equal(resp.status, 400)
      assert.equal(
        resp.body.message,
        'User validation failed: email: pepito2@gmail.com already exists'
      )
      assert.ok(resp.body)
    })
  })

  describe('POST /api/users/sign-in', function () {
    it('userSignin working', async function () {
      const resp = await request(app).post('/api/users/sign-in').send()
      assert.equal(resp.status, 200)
      assert.equal(resp.text, 'userSignin')
    })
  })
})
