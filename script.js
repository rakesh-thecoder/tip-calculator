let btn1 = document.getElementById('bt1')
let btn2 = document.getElementById('bt2')
let btn3 = document.getElementById('bt3')
let btn4 = document.getElementById('bt4')
let btn5 = document.getElementById('bt5')

let bt1 = false;
let bt2 = false;
let bt3 = false;
let bt4 = false;
let bt5 = false;

document.getElementById('bt1').addEventListener('click',()=>{
    bt1 = true;
    bt2 = bt3 = bt4 = bt5 = false;
    changeBtnView(bt1,bt2,bt3,bt4,bt5);
})

document.getElementById('bt2').addEventListener('click',()=>{
    bt2 = true;
    bt1 = bt3 = bt4 = bt5 = false;
    changeBtnView(bt1,bt2,bt3,bt4,bt5);

})

document.getElementById('bt3').addEventListener('click',()=>{
    bt3 = true;
    bt2 = bt1 = bt4 = bt5 = false;
    changeBtnView(bt1,bt2,bt3,bt4,bt5);
})

document.getElementById('bt4').addEventListener('click',()=>{
    bt4 = true;
    bt1 = bt2 = bt3 = bt5 = false;
    changeBtnView(bt1,bt2,bt3,bt4,bt5);
})

document.getElementById('bt5').addEventListener('click',()=>{
    bt5 = true;
    bt2 = bt3 = bt4 = bt1 = false ;
    changeBtnView(bt1,bt2,bt3,bt4,bt5);
})

function changeBtnView(bt1,bt2,bt3,bt4,bt5){
    if(bt1==true){
        btn1.style = 'background: hsl(185, 41%, 84%); color: #00494D;';
        btn2.style = btn3.style = btn4.style = btn5.style = 'background: 727879';
    }

    else if(bt2==true){
        btn2.style = 'background: hsl(185, 41%, 84%); color: #00494D;';
        btn1.style = btn3.style = btn4.style = btn5.style = 'background: 727879';
    }
    else if(bt3==true){
        btn3.style = 'background: hsl(185, 41%, 84%); color: #00494D;';
        btn2.style = btn1.style = btn4.style = btn5.style = 'background: 727879';
    }
    else if(bt4==true){
        btn4.style = 'background: hsl(185, 41%, 84%); color: #00494D;';
        btn2.style = btn3.style = btn1.style = btn5.style = 'background: 727879';
    }
    else if(bt5==true){
        btn5.style = 'background: hsl(185, 41%, 84%); color: #00494D;';
        btn2.style = btn3.style = btn4.style = btn1.style = 'background: 727879';   
    }
    else{
        bt1.style = btn2.style = btn3.style = btn4.style = btn5.style = 'background: 727879';
    }
}

document.getElementById('custom-input').addEventListener('keyup',()=>{
    bt1.style = btn2.style = btn3.style = btn4.style = btn5.style = 'background: 727879';
})

document.getElementById('count').addEventListener('keyup',()=>{
    let count = document.getElementById('count').value;
    let bill = document.getElementById('bill-input').value;
    let tip = 0;

    if(parseInt(count) == 0){
        var tag = document.getElementById('people-count')
        var span = document.getElementById('error')
        if(!span){
            var span = document.createElement('span')
            span.id = 'error'
            span.textContent = "Can't be zero"
            tag.insertBefore(span,document.getElementById('count'))
        }
        
    }
    else{
        var span = document.getElementById('error')

        if(span){
            span.remove()
        }
    }

    if(bt1==true){
        tip = 5;
    }
    else if(bt2==true){
        tip = 10;
    }
    else if(bt3==true){
        tip=15;
    }
    else if(bt4==true){
        tip = 25;
    }
    else if(bt5==true){
        tip = 50;
    }
    else{
        tip = document.getElementById('custom-input').value;
    }

    let tipAmount = (bill*tip)/100;
    let tip_per_person = tipAmount/count;
    let tipPerPerson = tip_per_person.toPrecision(2);

    let total = tipAmount + bill;
    let amount = total/count;
    let amountPerperson = amount.toPrecision(2);

    tip_label = document.getElementById('tip-amount');
    total_label = document.getElementById('total-amount');

    tip_label.textContent = "$"+tipPerPerson;
    total_label.textContent = "$"+amountPerperson;

    restButton = document.getElementById('reset')
    restButton.style = "background-color: hsl(172, 67%, 45%);"
});

document.getElementById('reset').addEventListener('click',()=>{
    document.getElementById('tip-amount').textContent = "$0.00";
    document.getElementById('total-amount').textContent = "$0.00";
});


