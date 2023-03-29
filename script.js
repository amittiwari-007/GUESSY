`use script`

var value=Math.trunc(Math.random()*20)+1;
console.log(value);
var score = 20;
var highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    var guess=document.querySelector('#guess').value;
    if(!guess){
        document.querySelector('.text').textContent="NO INPUT";
    }
    if(score>1){
    if(guess>value){
        document.querySelector('.text').textContent="Too High";
        score--;
        document.querySelector('.scoreval').textContent=score;
    }
    else if(guess<value){
        document.querySelector('.text').textContent="Too Low";
        score--;
        document.querySelector('.scoreval').textContent=score;
    }
    else {
        document.querySelector('.question').textContent=score;
        if(score>highscore){
            highscore=score;
            document.querySelector('.highval').textContent=score;
        }
        document.querySelector('.text').textContent="Congrats";
        document.querySelector('body').style.backgroundColor="#7de02d";
    }
}
else{
    document.querySelector('.text').textContent="You Lost";
    document.querySelector('body').style.backgroundColor="#3d3f3c";
    score=0;
    document.querySelector('.scoreval').textContent="0";
}

})

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    value=Math.trunc(Math.random()*20)+1;
    document.querySelector('.question').textContent="?";
    document.querySelector('body').style.backgroundColor="#7B8FA1";
    document.querySelector('.scoreval').textContent="20";
    document.querySelector('#guess').value = '';
    document.querySelector('.text').textContent="Start Guessing the number";
})