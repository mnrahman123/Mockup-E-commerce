const products = [
    {
      id: 1,
      title: "macbook",
      image:"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
      description:"Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..",
      price:600,
    },
    {
      id: 2,
      title: "iphone",
      image:"https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
      description:"iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..",
      price:123,
    },
    {
      id: 3,
      title: "Apple Cinema 30",
      image:"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-200x200.jpg",
      description:"Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..",
      price:110,
    },
    {
      id: 4,
      title: "Canon EOS 5D",
      image:"https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
      description:"Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..",
      price:98,
    },
  ];
  function captureFavoriteButtonClick(){
    const products$=document.getElementById("products")
    const favouriteButton$=products$.querySelectorAll(".btn-favorite");
    favouriteButton$.forEach(function(btn$){
      btn$.addEventListener('click',function(event){
        const target= event.target;
        const favoritebtn$=target.closest('.btn-favorite')
         const selectedId = favoritebtn$.getAttribute("data-id")
         console.log(selectedId)
         const selectedProductIndex=selectedProductIds.indexOf(selectedId)
         const icon$ = btn$.querySelector(".material-icons-outlined");
        
         if(selectedProductIndex!= -1){   
          //means product already selected
             selectedProductIds.splice(selectedProductIndex,1);
             icon$.innertext="favorite-border"  
         }
         else{
          //product is not selected 
          selectedProductIds.push(selectedId);
          icon$.innertext="favorite";
         }
         console.log(selectedProductIds);
         const wishlistCounter$=document.getElementById("wishlistCounter")
         wishlistCounter$.innertext=selectedProductIds.length;
         
       
      });
    })
  }const selectedProductIds = [];
  const productsElement = document.getElementById("products");
  const productModified = products.map(function(product){
        product.productModified=product.price.toFixed(2);
        return product;
  })
  renderProductCards(productModified);
  function renderProductCards(products) {
    let productCards = "";
  
    for (let i = 0; i < products.length; i++) {
      productCards = productCards + renderProductCard(products[i])
    }
    productsElement.innerHTML = productCards;
    captureFavoriteButtonClick();
  }
  
  function renderProductCard(product) {
    return `<div class="col-12 col-md-4 col-lg-3">
    <div class="card">
        <img src=${product.image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">
         ${product.description}
          </p>
          <div>
          <strong>
          <span class="material-icons-outlined">
  currency_rupee
  </span>
          ${product.productModified}</strong>
          </div>
          <div class="btn-group w-100" role="group" aria-label="Basic example">
            <button type="button" class="btn "><span class="material-icons-outlined">
                shopping_cart
                </span></button>
            <button type="button" class="btn btn-favorite" data-id="${product.id}">
            <span class="material-icons-outlined" >favorite_border</span>
            </button>
            <button type="button" class="btn "><span class="material-icons-outlined"   >
                compare_arrows
                </span></button>
          </div>
        </div>
      </div>
    </div>`
  }
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
  
  
  
  