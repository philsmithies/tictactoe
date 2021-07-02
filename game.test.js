const Game = require("./game");
const GameBoard = require("./gameBoard");
const Player = require("./player");

const p1 = Player(false, "P1")
const p2 = Player(true, "P2")
const gb = GameBoard()
const g = Game(p1, p2, gb)

describe("basic gameboard", () => {

  beforeEach(() => {
    g.newGame();
  });

  test("it will start with a score of 0", () => {
    expect(g.score).toEqual(0);
  });

  test('it can start a game with two players and turns loaded', () => {
    expect(g.playerOne.playerName).toBe("P1")
    expect(g.playerTwo.playerName).toBe("P2")
    expect(g.playerOne.isMyTurn).toBe(false)
    expect(g.playerTwo.isMyTurn).toBe(true)
  })

  test('it can toggle turns', () => {
    expect(g.playerOne.isMyTurn).toBe(false)
    expect(g.playerTwo.isMyTurn).toBe(true)
    g.changeTurn()
    expect(g.playerOne.isMyTurn).toBe(true)
    expect(g.playerTwo.isMyTurn).toBe(false)
  })

  test('it can make a move', () => {
    expect(g.gb.board).toEqual(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
    g.move(1, 'X')
    expect(g.gb.board).toEqual(['-', 'X', '-', '-', '-', '-', '-', '-', '-'])
  })

  test(`it can't make a move on a taken space`, () => {
    expect(g.gb.board).toEqual(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
    g.move(1, 'X')
    expect(() => { g.move(1, 'X'); }).toThrow(Error('Space is taken'));
  })

  test('it can reset the board', () => {
    g.newGame()
    expect(g.gb.board).toEqual(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
  })

  test('it can check for a winner on the board horizontally', () => {
    expect(g.winner).toEqual('')
    g.move(3, 'X')
    g.move(4, 'X')
    g.move(5, 'X')
    expect(g.winner).toEqual('X')
  })

  test('it can check for a winner on the board vertically', () => {
    expect(g.winner).toEqual('')
    g.move(0, 'O')
    g.move(3, 'O')
    g.move(6, 'O')
    expect(g.winner).toEqual('O')
  })

  test('it can check for a winner on the board vertically', () => {
    expect(g.winner).toEqual('')
    g.move(0, 'O')
    g.move(3, 'O')
    g.move(6, 'O')
    expect(g.winner).toEqual('O')
  })

  test('it can check for a draw', () => {
    g.move(0, 'X')
    g.move(1, 'O')
    g.move(2, 'X')
    g.move(3, 'O')
    g.move(4, 'O')
    g.move(5, 'X')
    g.move(6, 'O')
    g.move(7, 'X')
    g.move(8, 'O')
    expect(g.winner).toEqual('Draw')
  })

  test(`it doesn't allow illegal characters`, () => {
    expect(() => { g.move(1, 'Not Cool'); }).toThrow(Error('Invalid Character'));
  })
})
