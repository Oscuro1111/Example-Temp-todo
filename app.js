
const EventHandlers={
  onDelete:(e)=>{
    e.preventDefault();
    

   if(e.target.localName =="svg"){
     let btn = e.target.parentElement;
     btn.parentElement.remove();
 
    }else{
      e.target.parentElement.remove();
   }
  },
  onCheck:(e)=>{
    e.preventDefault();

   if(e.target.localName =="svg"){
    
    let btn = e.target.parentElement;
    
    btn.parentElement.style.textDecoration="line-through";
    

   }else{
    e.target.parentElement.style.textDecoration="line-through";
  }
}
};



const Glob={

  buildTask:(input)=>{
    
    let task = document.createElement('li');
    var delBtn = document.createElement('button');
    delBtn.id = 'fa-trash';
    delBtn.append((eleI=>{
      eleI.className = 'fas fa-trash';
      return eleI;
    })(document.createElement('i')));

    var checkBtn = document.createElement('button');
    checkBtn.id= 'fa-check';
    checkBtn.append((eleI=>{
      eleI.className = 'fas fa-check';
      return  eleI;
    })(document.createElement('i')));

    delBtn.addEventListener('click',EventHandlers.onDelete);
    checkBtn.addEventListener('click',EventHandlers.onCheck);
   task.innerHTML = input.value;
   
   task.append(checkBtn,delBtn);
   
   return task;

   }
   ,  IS_EMPTY :({value})=>(value==""||value===null||value===undefined),
};


document.addEventListener("DOMContentLoaded",function(){
//Selectors

var input = document.querySelector('.todo-input');
var inputBtn = document.querySelector('.input-btn');
var mainList = document.querySelector('.main-list');


//Functions
function addItem() {

   //check if input is empty or not.
  if(Glob.IS_EMPTY(input)){
    alert("Please write some task.(Input cannot be empty)");
    return;
  }else{
    //Add task    
    mainList.append(Glob.buildTask(input));
  }

  
 //clear input
  input.value = "";
}


//Events listners
document.addEventListener('keypress', (e)=>{if(e.keyCode===13){
  inputBtn.click();}});
inputBtn.addEventListener('click', addItem);

});
