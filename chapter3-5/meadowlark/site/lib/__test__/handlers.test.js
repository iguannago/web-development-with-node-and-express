const handlers = require('../handlers')
let req, res

beforeEach(() => {
    res = {
        render: jest.fn()
    }
    req = {}
})

test('home page render', () => {
    handlers.home(req, res)

    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('about page render', () => {
    handlers.about(req, res)

    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1]).toEqual(expect.objectContaining({
        fortune: expect.any(String)
    }))
})

test("404 page render and status", () => {
    res = {
        status: jest.fn(),
        render: jest.fn()
    }
    handlers.notFound(req, res)

    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')

    expect(res.status.mock.calls.length).toBe(1)
    expect(res.status.mock.calls[0][0]).toBe(404)
})