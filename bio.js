$(document).ready(function(){

    var $product =$('#product');
    // var $orders = $("#orders");
    // var $name = $("#name");
    // var $drink = $("#drink");

    // function addOrder(order){
    //     $orders.append('<li>name: '
    //     + order.name+', drink: '
    //     +order.coffee+'</li>');
    // }

    $.ajax({
        type: 'GET',
        //url:"coffee.json",
        url:"data.json",
        success: function(result) {
               console.log(result);
        //         $.each(result,function(i,order){
        //                addOrder(order);
        // });



               /* START
                *****Method 1*****
                for (var i=0; i< result.length; i++) {
                
                    document.getElementById("product").innerHTML += 'Name: '+ 
                    result[i].name +'<br>'+ '<img width= "100" src= "'  +
                     result[i].img + '">' + '<br>' + '  price: '
                     + result[i].price + "<br><br>"+ 
                     '<button data-id='+ result[i].name +' type = "button" onclick = "buyNow()">Buy Now</button>' +
                      "<br><br>";  
                     // $( "button" ).data( "b1",result[i].name  );
                }


                $("button").click(function(){
                    alert($( this ).data( "id" ) +" added to cart");
                    
                });

                */
                   

               //  ******Method 2****** Jquery Tutorials
                    
                $.each(result,function(i, product){
                        $product.append('Name:'+result[i].name +'<br><img src = '+ result[i].img +
                        ' width="100px"><br>' +
                        ' Price:' +result[i].price+'<br><button data-id ='+result[i].name +
                        ' type:"submit">Buy Now</button><br><br><br><br>');
                });

                $("button").on('click', function(){
                    var productName = $(this).data('id');
                    $("<p>").text(productName +" added to cart.").appendTo('#product');
                    $("id").toggle();

                });

              //  END*/
               
               
        },
        error: function(result) {
                //alert("Invalid data");

                alert("Error, plz add your order again")
        }
    });


            // $('button').on('click',function(){
            //     var order = {
            //         name : $name.val(),
            //         drink : $drink.val(),
            //     };
         
            //     console.log(name);
            //      $.ajax({
            //         type:'POST',
            //         url:'coffee.json',
            //         data: order,
            //         success: function(order){
            //             addOrder(order);
            //         },
            //         error: function(){
            //             alert('error!!')
            //         }
            //     });
            // });


});


/*
var btn = [];
function buyNow(){
   
    alert("product added to cart");
}
*/