const obj1=
{
    name:'Ankush yadav',
    age:22,
    cast:"yadav",
    getuserAddress: function()
    {
   // console.log("from etawah")
   //console.log(`name ${this.name}`);
console.log(this)
    }
}
//console.log(obj1.name);
//console.log(obj1);
//console.log(obj1.getuserAddress());



function user(username,loginCount,isLoggedin)
{
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedin=isLoggedin;
    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }
    return this;
}
//const userOne=user("Ankush",4,'true');
//const userTwo=  user("Rahul",88,'true');

const userOne= new user("Ankush",4,'true');
const userTwo=  new user("Rahul",88,'true');
// resion for new keyword
//step 1->  create the new object
/// step 2->2constructor function call -> ye sab arguments ko pack karke object ko de deta j
// step 3 -> using this key jo bhi argument likhe h bo sab enjectr ho jate h ;
//console.log(userOne);
//console.log(userTwo);
console.log(userOne.constructor());
