function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  var list = document.querySelectorAll('ul.ranked-list li');
  for (let i=0; i<list.length;i++){
    list[i].innerHTML = parseInt(list[i].innerHTML)+n;
  }
}
function deepestChild(){
  var list = document.getElementById('grand-node').querySelectorAll('div');
  var current;
  for (let i=0; i<list.length;i++){
    if(list[i].querySelector('div')){
      current = list[i];
    }
  }
  return current;
}
