const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(stacks) {
    this.stacks = stacks
  }

  run() {
    console.log(this);
    this.promptMove( () => {
      if(!this.isWon()) this.run();
    });
  }

  promptMove(callback) {
    console.log(this.stacks);
    let startTowerIdx
    let endTowerIdx
    reader.question("Where would you like to take a disc from? ", (answer) => {
      startTowerIdx = parseInt(answer);
      reader.question("Where would you like to place the disc? ", (answer) => {
        console.log("hello");
        endTowerIdx = parseInt(answer);
        let result = [startTowerIdx, endTowerIdx];
        console.log(result);
        if (this.isValidMove(startTowerIdx, endTowerIdx)) this.move(startTowerIdx, endTowerIdx);
        console.log(this.stacks);
        callback();
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    let startTower = this.stacks[startTowerIdx];
    let endTower = this.stacks[endTowerIdx];
    let startDisc = startTower[startTower.length - 1];
    let endDisc = endTower[endTower.length - 1];

    if (!startDisc) {
        return false;
    } else if (!endDisc) {
        return true;
    } else if (startDisc < endDisc) {
        return true;
    } else{
        return false;
    }
  }

  move(startTowerIdx, endTowerIdx) {
    let startTower = this.stacks[startTowerIdx];
    let endTower = this.stacks[endTowerIdx];
    endTower.push(startTower.pop());
  }

  isWon() {
    return (this.stacks[1].length > 2 || this.stacks[2].length > 2)
  }

}

g = new Game([[3, 2, 1], [], []]);
g.run();
