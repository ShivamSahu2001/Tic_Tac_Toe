var cells=document.querySelectorAll(".cell");
var turn=0;

var grid_values =[null,null,null,null,null,null,null,null,null,];
for(var i=0;i<cells.length ;i++){
    let x=cells[i];
    let y=i;
    x.addEventListener('click',()=>{
        if(turn===0){
            x.style.backgroundColor="red";
        }
        else
        x.style.backgroundColor="blue";

        turn =1-turn;

        grid_values[y] =turn;
        checkForWin(x);
        console.log(grid_values);
    })
}

isGameOver = () => {
    location.reload();
}
fu

function checkForWin(x) {
  // check row:1
  if (grid_values[0] === grid_values[1] && grid_values[1] === grid_values[2] && grid_values[0] !== null) {
    alert(`Congratulations !! Player ${grid_values[0] === 0 ? "blue" : "red"} wins!`);
    gameOver = true;
  }
  // check row:2
  if (grid_values[3] === grid_values[4] && grid_values[4] === grid_values[5] && grid_values[3] !== null) {
    alert(`Congratulations !! Player ${grid_values[3] === 0 ? "blue" : "red"} wins!`);
    gameOver = true;
  }
  // check row:3
  if (grid_values[6] === grid_values[7] && grid_values[7] === grid_values[8] && grid_values[6] !== null) {
    alert(`Congratulations !! Player ${grid_values[6] === 0 ? "blue" : "red"} wins!`);
    gameOver = true;
  }
  //check column:1
  if (grid_values[0] === grid_values[3] && grid_values[3] === grid_values[6] && grid_values[0] !== null) {
    alert(`Congratulations !! Player ${grid_values[0] === 0 ? "blue" : "red"} wins!`);
    gameOver = true;
  } 
  //check column:2
  if (grid_values[1] === grid_values[4] && grid_values[4] === grid_values[7] && grid_values[1] !== null) {
    alert(`Congratulations !! Player ${grid_values[1] === 0 ? "blue" : "red"} wins!`);
    gameOver = true;
  }
  //check column:3 
  if (grid_values[2] === grid_values[5] && grid_values[5] === grid_values[8] && grid_values[2] !== null) {
    alert(`Congratulations !! Player ${grid_values[2] === 0 ? "blue" : "red"} wins!`);
    gameOver = true;
  }
  //check principal diagonal
  if (grid_values[0] === grid_values[4] && grid_values[4] === grid_values[8] && grid_values[0] !== null) {
    alert(`Congratulations !! Player ${grid_values[0] === 0 ? "blue" : "red"} wins!`);
    gameOver = true;
  } 
  //check non-principal diagonal
  if (grid_values[2] === grid_values[4] && grid_values[4] === grid_values[6] && grid_values[2] !== null) {
    alert(`Congratulations !! Player ${grid_values[2] === 0 ? "blue" : "red"} wins!`);
    gameOver = true;
  }
  }