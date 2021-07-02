const Game = require("./game");
const GameBoard = require("./gameBoard");
const Player = require("./player");

const p1 = Player(false, "P1")
const p2 = Player(true, "P2")
const gb = GameBoard()
const g = Game(p1, p2, gb)

describe("basic gameboard", () => {

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
    expect(g.gb.board).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
    expect(g.move(1, 'X'))
    expect(g.gb.board).toEqual(['1', 'X', '3', '4', '5', '6', '7', '8', '9'])
  })

  test('it can reset the board', () => {
    g.newGame()
    expect(g.gb.board).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
  })
})
