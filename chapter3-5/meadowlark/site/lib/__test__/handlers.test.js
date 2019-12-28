const handlers = require('../handlers')

test('home page render', () => {
    const res = {
        render: jest.fn()
    }
    const req = {}

    handlers.home(req, res)

    expect(res.render.mock.calls.length).toBe(1);
    expect(res.render.mock.calls[0][0]).toBe('home');
})