
//TODOS 
//Set up Proper Address validation
//Set up proper field validation for measurements so that measurements that are being posted have an actual value. 

function initialVal(){
    document.getElementById("measurementC").style.display = 'none';
    document.getElementById("measurementD").style.display = 'none';
    document.getElementById("measurementE").style.display = 'none';
    document.getElementById("measurementF").style.display = 'none';
};


function redisplayMeasurements(){
    let obj = document.getElementById("hotTubShape");
    let selectedOption = obj.options[obj.selectedIndex ].value;
    
    if(selectedOption == "Square" || selectedOption == "Rectangle"){
        toggleValues();
        initialVal();
    }

    if(selectedOption == "Round"){
        toggleValues()
        document.getElementById("measurementB").style.display = 'none';
        document.getElementById("measurementC").style.display = 'none';
        document.getElementById("measurementD").style.display = 'none';
        document.getElementById("measurementE").style.display = 'none';
        document.getElementById("measurementF").style.display = 'none';
    }

    if(selectedOption == "Cut Corner"){
        toggleValues();
        document.getElementById("measurementF").style.display = 'none';
    }

    if(selectedOption == "Octagon" || selectedOption == "Round Corner"){
        toggleValues();
        document.getElementById("measurementD").style.display = 'none';
        document.getElementById("measurementE").style.display = 'none';
        document.getElementById("measurementF").style.display = 'none';
    }

    if(selectedOption == "Two Cut Corner"){
        toggleValues();
    }

    if(selectedOption == "Hexagon" || selectedOption == "Elipse"){
        toggleValues();
        document.getElementById("measurementE").style.display = 'none';
        document.getElementById("measurementF").style.display = 'none';
    }


}

function toggleValues(){
    document.getElementById("measurementA").style.display = 'block';
    document.getElementById("measurementB").style.display = 'block';
    document.getElementById("measurementC").style.display = 'block';
    document.getElementById("measurementD").style.display = 'block';
    document.getElementById("measurementE").style.display = 'block';
    document.getElementById("measurementF").style.display = 'block';
}

initialVal();

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateQuote(){
    var email = document.getElementById("quoteEmail").value;
    var phoneNumber = /^\d{10}$/; 
    
    if(!document.getElementById("quoteNumber").value.match(phoneNumber)){
        alert("Please Enter in a Valid Number");
        return false;
    }

    if(!validateEmail(email)){
        alert("Please Enter in a Valid E-mail");
        return false;
    }

    if(document.getElementById("quoteName").value == ""){
        alert("Please Enter in a Name");
        return false;
    }

    if(document.getElementById("spaModel").value == ""){
        alert("Please Enter in a Spa Model/Make");
        return false;
    }
    
    if(document.getElementById("quoteAddress").value == ""){
        alert("Please Enter in an Address");
        return false;
    }
}
