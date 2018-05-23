/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
    
    The Milk Chocolate handler is done the old-fashion way, with an 
    'onclick' call in the xhtml code.  The rest of the buttons have 
    handlers assigned the correct way.
    
    Alan Riggins
    CS545
    Fall 2017
*/    


var proj4_data;

$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn046/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn046");
           $('#all').on('click', function() {
          tmpString = "<table align='center'>";
      
    for(var i=0; i < proj4_data.length; i++) {
           
           tmpString += "<tr>";
            tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br /></td>";/////////////////////////////////////picture
            tmpString += "<td id=itemdetail>";
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += proj4_data[i][3] + "<br />";///////////sortdisc
            tmpString += "<h id='lngdisc'>" +proj4_data[i][4] + "</h><br />";////////////long disc
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' align='right' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            tmpString += "</tr>";                        
                
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 

           $('#milk').on('click', function() {
          tmpString = "<table align='center'>";
      
    for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
           tmpString += "<tr>";
            tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br /></td>";/////////////////////////////////////picture
            tmpString += "<td id=itemdetail>";
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += proj4_data[i][3] + "<br />";///////////sortdisc
            tmpString += "<h id='lngdisc'>" +proj4_data[i][4] + "</h><br />";////////////long disc
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' align='right' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            tmpString += "</tr>";                        
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
    
        $('#dark').on('click', function() {
          tmpString = "<table align='center'>";
      
    for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
           tmpString += "<tr>";
            tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br /></td>";/////////////////////////////////////picture
            tmpString += "<td id=itemdetail>";
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += proj4_data[i][3] + "<br />";///////////sortdisc
            tmpString += "<h id='lngdisc'>" +proj4_data[i][4] + "</h><br />";////////////long disc
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' align='right' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            tmpString += "</tr>";                        
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
        $('#nuts').on('click', function() {
          tmpString = "<table align='center'>";
      
    for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {
           tmpString += "<tr>";
            tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br /></td>";/////////////////////////////////////picture
            tmpString += "<td id=itemdetail>";
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += proj4_data[i][3] + "<br />";///////////sortdisc
            tmpString += "<h id='lngdisc'>" +proj4_data[i][4] + "</h><br />";////////////long disc
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' align='right' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            tmpString += "</tr>";                        
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
              $('#brittle').on('click', function() {
          tmpString = "<table align='center'>";
      
    for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
           tmpString += "<tr>";
            tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br /></td>";/////////////////////////////////////picture
            tmpString += "<td id=itemdetail>";
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += proj4_data[i][3] + "<br />";///////////sortdisc
            tmpString += "<h id='lngdisc'>" +proj4_data[i][4] + "</h><br />";////////////long disc
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' align='right' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            tmpString += "</tr>";                        
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
    
                 $('#truffle').on('click', function() {
          tmpString = "<table align='center'>";
      
    for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
           tmpString += "<tr>";
            tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br /></td>";/////////////////////////////////////picture
            tmpString += "<td id=itemdetail>";
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += proj4_data[i][3] + "<br />";///////////sortdisc
            tmpString += "<h id='lngdisc'>" +proj4_data[i][4] + "</h><br />";////////////long disc
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' align='right' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            tmpString += "</tr>";                        
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 

             $('#gift').on('click', function() {
          tmpString = "<table align='center'>";
      
    for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
           tmpString += "<tr>";
            tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br /></td>";/////////////////////////////////////picture
            tmpString += "<td id=itemdetail>";
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += proj4_data[i][3] + "<br />";///////////sortdisc
            tmpString += "<h id='lngdisc'>" +proj4_data[i][4] + "</h><br />";////////////long disc
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' align='right' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            tmpString += "</tr>";                        
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 

           $('#holiday').on('click', function() {
          tmpString = "<table align='center'>";
      
    for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
           tmpString += "<tr>";
            tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br /></td>";/////////////////////////////////////picture
            tmpString += "<td id=itemdetail>";
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += proj4_data[i][3] + "<br />";///////////sortdisc
            tmpString += "<h id='lngdisc'>" +proj4_data[i][4] + "</h><br />";////////////long disc
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' align='right' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            tmpString += "</tr>";                        
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 


        
    $(document).on('click', ".buy", function() {  
        var sku = this.id;
      
        var qty= prompt("Add Quantity (Each 1lb)", "1");
        if (qty >=0 ){
            alert("Your Item has been added to the Cart.");
            cart.add(sku,qty);
             }
        else{
      alert("Invalid Quantity, Please enter correct details. ");
        
       
        }});                  
    });  
  
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
        display_milk_chocolate();
    }

    
function display_milk_chocolate() {
          var  tmpString ="";
        
            tmpString = "<table id='front' align='center'>";
              tmpString += "<h1 id='frontoffer' align='center'>Today's Offers.. Buy following items and get 30% discount.</h1>"; 
       tmpString += "<tr>";

    for(var i=0; i < proj4_data.length; i++) {
          tmpString += "<td>";
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+" width=\"190px\" /><br />";/////////////////////////////////////picture
            tmpString += "<b id='itemName'>"+proj4_data[i][2] +"</b><br />"; /////////////////////////////name
            tmpString += "<h id='cat'>"+proj4_data[i][1] + "</h><br />"; /////////////////catagory
            tmpString += "<br/>";
            tmpString += "<b id='cost'>Cost:" +proj4_data[i][6] + "$</b><br />";//////////////cost
            tmpString += "<img src=\"indeximage/addtocart.jpg\" alt=\"add to cart\" width=\"100\" "+" class='buy' value='Add to cart' id='" + proj4_data[i][0]+"' /><br />";///////////////add to cart
            tmpString += "<br />"; 
            tmpString += "</td>";
            i=i+7;                  
            }
             tmpString += "</tr>"; 
            tmpString += "</table>";
            var handle = document.getElementById('content');
            handle.innerHTML = tmpString;
            }        
    
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}     