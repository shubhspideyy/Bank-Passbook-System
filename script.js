var bu1 = document.getElementById("btn1");
var data = [];

var balance = 0;

bu1.addEventListener("click", function (event) {
    event.preventDefault();
    var amt = document.getElementById("Amount1").value;
    console.log(amt);

    var msg = document.getElementById("message1").value;
    console.log(msg);

    var date1 = document.getElementById("date11").value;
    console.log(date1);

    var selectedvalue = document.querySelector('input[name="bank"]:checked').value;
    console.log(selectedvalue);

    // data.push([amt,msg,date1,selectedvalue]);
    // console.log(data);    

    if (amt.length > 0 || msg.length > 0 || date1.length > 0) {
        var amt1 = parseInt(amt);

        if (selectedvalue === "credit") {
            balance += amt1;
            console.log(balance);
        }

        else if(amt>balance)
        {
            balance=0;
        }

        else if(balance>0)
        {
            balance -= amt1;
            console.log(balance);
        }

        else if(balance<0)
        {
            document.write("Insufficient balance");
        }

        data.push([date1, amt, selectedvalue, msg, balance]);
        console.log(data);

        var string1 = JSON.stringify(data);
        console.log(string1);
        localStorage.setItem("user_details", string1);

        var obj1 = localStorage.getItem("user_details", string1);
        console.log(obj1);

        var obj2 = JSON.parse(obj1);
        console.log(obj2);

        var tr1 = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');

        // var tr2=document.createElement('tr');
        // var td6=document.createElement('td');
        // td6.innerHTML="Balance Amount = ";

        td1.innerHTML = date1;
        td2.innerHTML = "Rs."+amt;
        td3.innerHTML = selectedvalue;
        td4.innerHTML = msg;
        td5.innerHTML = "Rs. "+balance;

        tr1.append(td1);
        tr1.append(td2);
        tr1.append(td3);
        tr1.append(td4);
        tr1.append(td5);

        // tr2.append(td6);

        document.getElementById("result").append(tr1);
        // document.getElementById("result").append(tr2);
    }



});