import generateMenuItems from "./generateMenuItems";

describe('generateMenuItems', () => {
  let actual, expected
  beforeEach(() => {
    actual = generateMenuItems({numberOfItems: 7})
  })

  it('should return an array with 7 menu items and ids', () => {
    expect(actual[0].text).toEqual('Menu 1')
    expect(actual[1].text).toEqual('Menu 2')
    expect(actual[2].text).toEqual('Menu 3')
    expect(actual[3].text).toEqual('Menu 4')
    expect(actual[4].text).toEqual('Menu 5')
    expect(actual[5].text).toEqual('Menu 6')
    expect(actual[6].text).toEqual('Menu 7')
    expect(actual[0].id).toBeTruthy()
    expect(actual[1].id).toBeTruthy()
    expect(actual[2].id).toBeTruthy()
    expect(actual[3].id).toBeTruthy()
    expect(actual[4].id).toBeTruthy()
    expect(actual[5].id).toBeTruthy()
    expect(actual[6].id).toBeTruthy()
  });
});