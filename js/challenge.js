let timer = setInterval(increaseCounter, 1000)
const counter = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const likeButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')
const likes = document.getElementsByClassName('likes')
 

pauseButton.addEventListener('click', pauseCounter)
plusButton.addEventListener('click', increaseCounter)
minusButton.addEventListener('click', decreaseCounter)
likeButton.addEventListener('click', addLike)

function increaseCounter() {
    let result = parseInt(counter.innerText)
    result++ 
    counter.textContent = result 
}

function decreaseCounter() {
    let result = parseInt(counter.innerText)
    result--
    counter.textContent = result 
}

function addLike(){
    let currentCounter = parseInt(counter.innerText)
    const like = document.createElement('li');
    let likeCount = 0;
    likeCount++;
    like.innerText = `User has liked Counter ${currentCounter} - ${likeCount} times!`;
    likes.appendChild(like);
}

function pauseCounter() {
    if (pauseButton.innerText === 'pause') {
        clearInterval(timer)
        toggleButton()
        pauseButton.innerText = 'resume'
    }
    else {
        timer = setInterval(increaseCounter, 1000)
        toggleButton()
        pauseButton.innerText = 'pause'
    }
}




function toggleButton() {
    minusButton.disabled = !minusButton.disabled
    plusButton.disabled = !plusButton.disabled
    likeButton.disabled = !likeButton.disabled
}