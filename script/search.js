// search login

const search$=document.getElementById("search");
search$.addEventListener("keyup",function(event){
    // console.log(event);
    const term = search$.value;
    // console.log(term);
    const termLowercase=term.toLowerCase();
    // console.log(termLowercase);
    const productFiltered=productModified.filter(function(product){
        const titleLowerCased=product.title.toLowerCase();
           return titleLowerCased.indexOf(termLowercase)!= -1;

    });
    renderProductCards(productFiltered)
})