var proj4_data;
$(document).ready( function() {

        proj4_data = new Array();
    $.get('/perl/jadrn000/proj4/get_products.cgi', storeData);
     var cart = new shopping_cart("jadrn046");
     

  var name = $("[name='name']");
  var lname = $("[name='lname']");
  var address11 = $("[name='address11']");
  var address12 = $("[name='address12']");
  var city = $("[name='city']");
  var state = $("[name='state']");
  var zip = $("[name='zip']");
  var phnumber = $("[name='phnumber']");
  var cc = $("[name='creditcard']");
  var ccnumber = $("[name='ccnumber']");
  var exp11 = $("[name='exp11']");
  var exp12 = $("[name='exp12']");

  var name2 = $("[name='name2']");
  var lname2 = $("[name='lname2']");
  var address21 = $("[name='address21']");
  var address22 = $("[name='address22']");
  var city2 = $("[name='city2']");
  var state2 = $("[name='state2']");
  var zip2 = $("[name='zip2']");
  var phnumber2 = $("[name='phnumber2']");
  var cc2 = $("[name='creditcard2']");
  var ccnumber2 = $("[name='ccnumber2']");
  var exp21 = $("[name='exp21']");
  var exp22 = $("[name='exp22']");

  

  $('#sameadd').on('click', function() {
      if($('#sameadd').is(':checked')){
      name2.val(name.val());
      lname2.val(lname.val());
      address21.val(address11.val());
      address22.val(address21.val());
      city2.val(city.val());
      state2.val(state.val());
      zip2.val(zip.val());
      phnumber2.val(phnumber.val());
      ccnumber2.val(ccnumber.val());
      exp12.val(exp11.val());
      exp22.val(exp21.val());
    }
    else{
      name2.val("");
      lname2.val("");
      address21.val("");
      address22.val("");
      city2.val("");
      state2.val("");
      zip2.val("");
      phnumber2.val("");
      ccnumber2.val("");
      exp12.val("");
      exp22.val("");
    }
        });
    
    $('#addButton').on('click', function() {
     cart.add($('#sku').val(), $('#qty').val());
        updateDisplay();
        });
        

 
 $('#cart').on('click',$('input[type="button"]'), function(e){
   if($(e.target).val() !='DeleteItem')return;
 
 else{
      var sku=$(e.target).attr("name");
        cart.delete(sku);
    updateDisplay();

}});

 $('#cart').on('click',$('input[type="option"]'), function(e){
 
    var sku=$(e.target).attr("name");
     var quantity=$(e.target).attr("value");
    cart.setQuantity(sku,quantity);
    updateDisplay();

});

    function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
        updateDisplay();
    }

 
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

    function updateDisplay() {
        var cartArray = cart.getCartArray();
        var grandTotal =0;
        var tax=0;
        var finalCost=0;
        var toWrite = "<table id='carttable' >";

       
        for(i=0; i < cartArray.length; i++) {
          
           if(i ==0){
             toWrite += "<tr><th>Your Products</th><th>Product Name</th><th>Price</th><th>Quantity</th><th></th><th>Total</th><th></th></tr>";
            
           }

            toWrite += "<tr id='cartrow' >";
            toWrite += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
                cartArray[i][0]+".jpg\" alt=\""+cartArray[i][0]+"\""+
                " width=\"100px\"  /></td>";
            toWrite += "<td width='200px'>"+proj4_data[i][2]+"</td>"; //productname
             toWrite += "<td>"+proj4_data[i][6]+"<h>$</h></td>"; //price
             toWrite += "<td>"+cartArray[i][1]+"<h>lbs</h></td>"; //Quantity
            toWrite += "<td><select name="+cartArray[i][0]+" value="+cartArray[i][1]+" ><option name="+cartArray[i][0]+" value='0' ></option><option name="+cartArray[i][0]+" value='1' >1</option><option name="+cartArray[i][0]+" value='2' >2</option><option name="+cartArray[i][0]+" value='3' >3</option><option name="+cartArray[i][0]+" value='4' >4</option><option name="+cartArray[i][0]+" value='5' >5</option><option name="+cartArray[i][0]+" value='6' >6</option><option name="+cartArray[i][0]+" value='7' >7</option><option name="+cartArray[i][0]+" value='8' >8</option><option name="+cartArray[i][0]+" value='9' >9</option></select><br /></td>";
             var total = cartArray[i][1]*proj4_data[i][6];/////quantity changing option
           
            toWrite += "<td>"+total+"<h>$</h></td>"; ////total amount
             toWrite += " <td><input type='button'  name="+cartArray[i][0]+" value='DeleteItem'"+"id='deleteButton'/></td>";///delete button
           
           grandTotal += total;
            toWrite += "</tr>";

            }
        toWrite += "</table>"; 
      toWrite += "<div id='ordersummary'>";    
 toWrite += "<b id='summary'>Order Summary</b><br />";
 toWrite +="<br /><br />";
 toWrite +="<h>Total price :</h>";
 toWrite += grandTotal+ "<h>$</h>" ;
 toWrite +="<br /><h>Tax (8%) :   </h>";
          tax= grandTotal*0.08;
 toWrite += tax+ "<h>$</h>"; 
 toWrite +="<br /><h>Shipping Charges :</h>";
    if(grandTotal != 0.00){
      ship = 2;
    }
   else{
    ship = 0;
    } 
    toWrite += ship+"<h>$</h>";  
toWrite +="<br /><hr />";
 toWrite +="<br /><b id='grand'>Grand Total :</b>";
  
  finalCost=grandTotal+tax+ship ;
 toWrite += finalCost+ "<h>$</h>";
  toWrite += "</div>"; 

        $('#cart').html(toWrite); 
        $('#count').text(cart.size());  

        } 
        
    $( "#dialog-modal" ).dialog({
            height: 700,
            width: 1100,
            modal: true,
            autoOpen: false
    });
    
    $('#order_button').on('click', function($e) {       
            $("#dialog-modal").dialog('open');
            });                 
    });

 

  