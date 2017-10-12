document.addEventListener('DOMContentLoaded', function () {
    
    var arr = ['green', 'red','black','blue','pink','green', 'orange'];
    var random = Math.round(Math.random(arr)*6);
    var randomTwo = Math.round(Math.random(arr)*6);
    
    function checkBoard(){
        var b = document.getElementsByTagName("body")[0];
        b.style.height = '760px';
        b.style.width = '960px';
        for(var i = 0; i < 81; i++){
            if (i % 2 === 0) {
                var div = document.createElement('div');
                document.body.appendChild(div);
                div.style.backgroundColor = 'red';
                div.style.width = '11.1%';
                div.style.height = '11.1%';
                div.style.paddingBottom = '11.1%';
                div.style.float = 'left';
                console.log(div);
            }
            else {
                var div = document.createElement('div');
                document.body.appendChild(div);
                div.style.backgroundColor = 'black';
                div.style.width = '11.1%';
                div.style.height = '11.1%';
                div.style.paddingBottom = '11.1%';
                div.style.float = 'left';
                console.log(div);
            }

        }
    }checkBoard();
})

// document.addEventListener('DOMContentLoaded', function () {
    
//     var arr = ['green', 'red','black','blue','pink','green', 'orange'];
//     var random = Math.round(Math.random(arr)*6);
//     var randomTwo = Math.round(Math.random(arr)*6);
    
//     function checkBoard(){
//         var b = document.getElementsByTagName("body")[0];
//         b.style.height = '760px';
//         b.style.width = '960px';

       

//         // document.getElementById("myList").appendChild(node);
//         for(var i = 0; i < 81; i++){
//             if (i % 2 === 0) {
//                 var div = document.createElement('div');
//                 document.body.appendChild(div);
//                 div.style.backgroundColor = arr[random];
//                 div.style.width = '11.1%';
//                 div.style.height = '11.1%';
//                 div.style.paddingBottom = '11.1%';
//                 div.style.float = 'left';
//                 console.log(div);
//             }
//             else {
//                 var div = document.createElement('div');
//                 document.body.appendChild(div);
//                 div.style.backgroundColor = arr[randomTwo];
//                 div.style.width = '11.1%';
//                 div.style.height = '11.1%';
//                 div.style.paddingBottom = '11.1%';
//                 div.style.float = 'left';
//                 console.log(div);
//             }

//         }
//     }checkBoard();
// })





