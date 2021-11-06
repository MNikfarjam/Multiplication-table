 var num = "";
   
    
   var element = document.getElementById("result");
    for (i=1; i<=10; i++)
        {
            num+= "<tr>"
            for (j=1; j<=10; j++)
                {
                    if (i!=j){
                 num+= "<td>" + i*j + "</td>" ;
                        }else{
                         num+= "<td style='background-color: yellow;'>" + i*j + "</td>" ;
                            
                        }
                        
                    }
             num+="</tr>" ;
                           
        }
 element.innerHTML= num;
    