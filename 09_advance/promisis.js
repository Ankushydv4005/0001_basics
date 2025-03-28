// create the promice
const promiceOne=new Promise(function(resolve,reject)
{
    // Do an asnc task
    // Bata base call like data connect,receive,cryptography,network
    setTimeout(function( )
{
    console.log('Async task is completed');
    resolve();    //for connection 

},1000);
 
})

promiceOne.then(function()
{
    console.log(" promice consumed");
})



// eako hm kisi variabel me store kiye bina bhi ho sakta h 

new Promise(function(resolve,reject)
{
    setTimeout  (function()
{
    console.log("Async task 2");
    resolve();
},1000)

}).then(function()
{
    console.log("Async 2 resolved");
})


 

const PromiceThree=new Promise(function(resolve,reject)
{
    setTimeouts(function()
    {
        resolve({userName:"Ankush Yadav",email:"ankushyadav4005@gmail.com"})
    },1000)
});


PromiceThree.then(function(user)
{
    console.log(user);
});

