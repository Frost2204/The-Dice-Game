
function main()
{
   var rn = randomNumber();
   var rn2 = randomNumber();
   diceChange(rn,1);
   diceChange(rn2,2)
   winner(rn, rn2);
}

function diceChange(dice,slot)
{

    var x = "dice"+slot;

    if(dice==0)
    {
        document.getElementById(x).src = "./assets/dice1.png";
    }
    else if(dice==1)
    {
        document.getElementById(x).src = "./assets/dice2.png";
    }
    else if(dice==2)
    {
        document.getElementById(x).src = "./assets/dice3.png";
    }
    else if(dice==3)
    {
        document.getElementById(x).src = "./assets/dice4.png";
    }
    else if(dice==4)
    {
        document.getElementById(x).src = "./assets/dice5.png";
    }
    else if(dice==5)
    {
        document.getElementById(x).src = "./assets/dice6.png";
    }
    else
    {
        alert("Something Went Wrong");
    }
}

function randomNumber()
{
    var num = Math.random();
    num = num*6;
    num = Math.floor(num);
    return num;
    
}

function winner(rn, rn2)
{
    if (rn === rn2) 
    {
        
        document.getElementById("result").innerHTML = "Its A Draw😶";    
    }

    else if (rn>rn2)
    {
        document.getElementById("result").innerHTML = "👆😻Player One Win!!";    
    }

    else if (rn<rn2) 
    {
        document.getElementById("result").innerHTML = "Player Two Win!!😋☝";        
    }
    else
    {
        document.getElementById("result").innerHTML = "System issue";    

    }
}