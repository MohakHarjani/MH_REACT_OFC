export function Largest(props){
 
    let n1=props.no1;
    let n2=props.no2;
    let n3=props.no3;
 
    let res;
 
   
     if(n1>n2 && n1>n3)
     {
        res=<p>no1 is largest:{n1}</p>;
    }
    else if(n2>n3 && n2>n1){
        res=<p>no2 is largest:{n2}</p>;
    }
    else {
        res=<p>no3 is largest:{n3}</p>;
    }
    console.log(n1+" "+n2+" "+n3);
    return(
        <>
        {res}
        </>
    )
 
 
}