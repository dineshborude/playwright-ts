
function outer() {

    let username = "danny2610";

     function inner() {

        console.log(`Inner Scopes : ${username}`);

     }


     inner();

}

outer();
console.log(`OUTER SCOPE ${username}`)