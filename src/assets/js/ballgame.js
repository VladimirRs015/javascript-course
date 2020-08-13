const ballPositionState = {
  y: 0,
  x: 0,
};
export default function (e, boardClass, ballClass) {
  const $ball = document.querySelector(`.${ballClass}`);
  const $board = document.querySelector(`.${boardClass}`);

  const ballExactPositionInfo = $ball.getBoundingClientRect();
  const limits = $board.getBoundingClientRect();
  // limitRight =
  switch (e.keyCode) {
    case 37:
      if (limits.left < ballExactPositionInfo.left) {
        ballPositionState.x--;
      }

      break;
    case 38:
        if (limits.top <ballExactPositionInfo.top) {
            ballPositionState.y--;
        }
      break;
    case 39:
        if (limits.right > ballExactPositionInfo.right) {

            ballPositionState.x++;
        }
      break;
    case 40:
        if (limits.bottom > ballExactPositionInfo.bottom) {
            ballPositionState.y++;
        }
      e.preventDefault();
      break;
  }
  //   console.log(ballPositionState.x , ballPositionState.y)
  $ball.style.transform = `translate(${ballPositionState.x * 10}px,${
    ballPositionState.y * 10
  }px)`;
}
