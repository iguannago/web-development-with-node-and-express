const headers = require('../hearders')

describe('headers route', () => {
  test('return headers from the req object', () => {
    const req = {
      headers: {
        language: 'Spanish'
      }
    }
    const res = {
      send: jest.fn(),
      type: jest.fn()
    }
    headers.showHeaders(req, res)

    expect(res.send.mock.calls.length).toBe(1)
    expect(res.send.mock.calls[0][0]).toBe("language: Spanish")
    expect(res.type.mock.calls[0][0]).toBe("text/plain")
  })
})
