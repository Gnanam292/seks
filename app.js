let pos=0,que,cos=0,choices,a,b,c,board,status;
let question=
[
    ["Shortcut of copy","ctrl+a","ctrl+b","ctrl+c","c"],
    ["Shortcut of Paste","ctrl+v","ctrl+b","ctrl+c","a"],
    ["Shortcut of cut","ctrl+a","ctrl+x","ctrl+c","b"],
    ["Shortcut of select all","ctrl+a","ctrl+b","ctrl+c","a"]
]

function Display()
{
    if (pos>=question.length)
    {
        document.getElementById("status").innerHTML="Quiz Completed";
        board=document.getElementById("board");
        let per=cos/4*100;
        let re=4-cos;
        if(cos==4)
        {
            board.innerHTML=`<h4>Congratulation! You got ${cos} of ${question.length}</h4>`;
        }
        else
        {
            board.innerHTML=`<h4>You got ${cos} of ${question.length}</h4>`;
        }
        board.innerHTML+=`The percentage of quiz game answer is: ${per}%</br>`;
        board.innerHTML+=`The Wrong of quiz game answer is: ${re}`;
        pos=0;
        cos=0;
        return false;
    }
    else
    {
        board=document.getElementById("board");
        status=document.getElementById("status");
        status.innerHTML=`Question ${pos+1} of ${question.length}`;
        que=question[pos][0];
        a=question[pos][1];
        b=question[pos][2];
        c=question[pos][3];
        board.innerHTML=`<h3>${pos+1}. ${que}</h3>`
        board.innerHTML+=`<label><input type='radio' id='radio' name='choices' value='a'>${a}</label>`
        board.innerHTML+=`<label><input type='radio' id='radio' name='choices' value='b'>${b}</label>`
        board.innerHTML+=`<label><input type='radio' id='radio' name='choices' value='c'>${c}</label>`
        board.innerHTML+="<button onclick='checkAnswer()'>Submit Answer</button>"
    }
}

function checkAnswer()
{
    let choice;
    choices=document.getElementsByName("choices");
    //console.log(choices);
    for(var i=0;i<choices.length;i++)
    {
        if (choices[i].checked)
        {
            choice=choices[i].value;
            //console.log(choice);
        }
    }
    if(choice==question[pos][4])
    {
        cos++;
    }
    pos++;
    Display();
}