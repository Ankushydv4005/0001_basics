// generate color
const randomcolor=function()
{
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalId;
const colorchanger=function()
{
    if(!intervalId)
    {

        intervalId=  setInterval(startchangingcolor,1000)
    }
    function startchangingcolor()
    {
        document.body.style.backgroundColor=randomcolor();
    }
}

const stopcolor=function()
{
    clearInterval(intervalId);
    intervalId=null;
}