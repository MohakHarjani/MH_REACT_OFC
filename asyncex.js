function fun()
{

    new Promise((resolve, reject)=>{

        setTimeout(()=>{

            resolve({name : 'mohak'});

          // reject('ERORRRRRRRR')
           

        }, 2000)
    })
    .then((response)=>{

        console.log("Resolved with => ")
        console.log(response);
    })
    .catch((error)=>{

        console.log("Rejected with =>");
        console.log(error);

    })

}
function timeTaking()
{
    return setTimeout(()=>{
        return 5;
    }, 2000)
}

async function myFun()
{
    await timeTaking();
}
