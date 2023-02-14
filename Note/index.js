let i=-1;
let a=[];
let recycle=[];
let k=0;
let res="";
function AddNote(){i++;
    a[i]="<div class='plates' >Title:"+
    document.getElementById("title").value+"<br>Date:"+
    document.getElementById("Date").value+"<br>Description:"+
    document.getElementById("Desc").value+"<br><input type='button' id='"+i+"' value='Delete' onclick='DelNote(id)'></div>";
    
    
    display();
}
function display(){
    let res="";
    if(a.length>0)
    for(let j=0;j<a.length;j++){
        res=res+a[j];
    }
    document.getElementById("result").innerHTML=res;
}
function DelNote(id){
    for(let index=parseInt(id);index<a.length-1;index++){
        let temp=a[index];
        a[index]=a[index+1];
        a[index+1]=temp;
    }
    a.pop();i--;
    display();
}