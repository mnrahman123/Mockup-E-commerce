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
  }