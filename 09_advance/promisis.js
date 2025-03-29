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
    setTimeout(function()
    {
        resolve({userName:"Ankush Yadav",email:"ankushyadav4005@gmail.com"})  // array ,object ,function kuchh bhi pass kar skte h 
    },1000)
});


PromiceThree.then(function(user)
{
    console.log(user);
});




const promiseFour=new Promise(function(resolve,reject)
{
    setInterval(function()
    {
        

        let error=false;
        if(!error)
        {
            resolve({username:"Ankush",password : "123"})
        }
        else{
            reject('Error : Something   went wrong ')
        }


    },1000)
})


promiseFour.then((user)=>
{
    console.log(user);
    return user.username;
}) .then((username)=>
{
   console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>
{
      console.log("the promice is either resolve or rejected ");
})






const promiseFive=new Promise(function(resolve,reject)
{


    setTimeout(function()
    {
        

        let error=false;
        if(!error)
        {
            resolve({username:"Javascript ",password : "123"});
        }
        else{
            reject('Error : Something js went wrong ')
        }


    },1000)


})

async function consumepromisefive()  
{
   try{
    const response= await promiseFive
   console.log(response);
   }
   catch(error)
   {
    console.log(error);
   }
}

consumepromisefive();


async function getAlluser()
{
    const response=await fetch('https //jsonplaceholder.typicode.com/users'')
        const data=response.json();
        console.log(data);
}
getAlluser()




