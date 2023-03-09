
      
        function setNull(){
            document.getElementById("display1").value= "";
            document.getElementById("display2").value="";
            document.getElementById("display3").value="";
        }
        
        
        function setValue(values)
        {
        if(document.getElementById("display1").value){
            document.getElementById("display2").value= values;
        }
        else{
            document.getElementById("display1").value= values;
        }    
        }
        var operations;
        function setSymbol(symbols)
        {
           
            switch(symbols) 
            {
                 case '/':
                 operations=parseInt(document.getElementById("display1").value)/parseInt(document.getElementById("display2").value)
                    break;
                    case '*':
                 operations=parseInt(document.getElementById("display1").value)*parseInt(document.getElementById("display2").value)
                    break;
                    case '+':
                 operations=parseInt(document.getElementById("display1").value)+parseInt(document.getElementById("display2").value)
                    break;
                    case '-':
                 operations=parseInt(document.getElementById("display1").value)-parseInt(document.getElementById("display2").value)
                    break;
                 
            }
            document.getElementById("display3").value=operations;

        }

    var num1,num2,ans;
    function setEqualto(){
   num1=parseInt(document.getElementById("display1").value);
   num2=parseInt(document.getElementById("display2").value);
   ans = Math.pow(num1,num2);
   document.getElementById("display3").value=ans;
 }
      
    