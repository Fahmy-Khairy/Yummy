export class Ui {
    constructor(){
    
    }
    // for defult screen 
    // displayDefultscreen(data){
    //   let cartona=``
    //   for (let i=0 ; i < data.length ; i++) {
    //     cartona += `
    //     <div class="cardMeal p-3" data-id=${data[i].idMeal}>
    //       <div class="rounded-lg overflow-hidden relative group cursor-pointer">
    //         <img src="${data[i].strMealThumb}" alt="${data[i].strMeal}" />
    //         <div
    //           class="bg-white bg-opacity-70 absolute top-0 bottom-0 left-0 right-0 translate-y-[110%] group-hover:translate-y-0 
    //           duration-[0.7s] flex items-center"
    //         >
    //           <h2 class="text-main text-2xl font-bold pl-3">${data[i].strMeal}</h2>
    //         </div>
    //       </div>
    //     </div>
    //     `
    //   }

    //   document.querySelector("#dataBox .myContainer").innerHTML=cartona

    // }

    //  for display categories
    displayCategory(data){
        let cartona = ``;
        for (const cat of data) {
            cartona +=`
                <div class="cardCategory p-3" data-category="${cat.strCategory}" >
                <div class="rounded-lg overflow-hidden relative group cursor-pointer">
                  <img src="${cat.strCategoryThumb}" alt="${cat.strCategory}" />
                  <div
                    class="bg-white bg-opacity-70 text-center absolute top-0 bottom-0 left-0 right-0 translate-y-[110%] group-hover:translate-y-0 duration-[0.7s]"
                  >
                    <h2 class="text-main text-2xl font-bold pl-3 my-3">${cat.strCategory}</h2>
                    <p class="text-main text-xl">${cat.strCategoryDescription.substring(0,150)}</p>
                  </div>
                </div>
            </div>`
        }
        document.querySelector("#dataBox .myContainer").innerHTML=cartona 
    }
    // for display All meals
    displayMealsofChosenCategory(data){
     let cartona=``
      for (let i=0 ; i < data.length ; i++) {
        cartona += `
        <div class="cardMeal p-3" data-id=${data[i].idMeal}>
          <div class="rounded-lg overflow-hidden relative group cursor-pointer">
            <img src="${data[i].strMealThumb}" alt="${data[i].strMeal}" />
            <div
              class="bg-white bg-opacity-70 absolute top-0 bottom-0 left-0 right-0 translate-y-[110%] group-hover:translate-y-0 
              duration-[0.7s] flex items-center"
            >
              <h2 class="text-main text-2xl font-bold pl-3">${data[i].strMeal}</h2>
            </div>
          </div>
        </div>
        `
      }

      document.querySelector("#dataBox .myContainer").innerHTML=cartona

    }
    // for display details of meal
    displayDetailsofanymeal(meal){
      let cartona =`<div class=" md:w-1/2 lg:w-1/3 overflow-hidden ">
                <img src="${meal.strMealThumb}" class="rounded-lg"  alt="${meal.strMeal}">
                <h2 class="text-3xl">${meal.strMeal}</h2>
            </div>
            <div class="lg:w-2/3 md:w-1/2">
                <h3 class="text-2xl font-semibold">Instructions</h3>
                <p>${meal.strInstructions}</p>
                <p class="text-3xl font-bold">Area : 
                    <span class="text-3xl font-semibold">${meal.strArea}</span>
                </p>
                <p class="text-3xl font-bold">Category :
                    <span class="text-3xl font-semibold">${meal.strCategory}</span>
                </p>
                <p class="text-3xl font-bold">Recipes :</p>
                <div class="recipes flex flex-wrap my-4  gap-2">
                    <p class="w-fit bg-sky-400 text-gray-800 py-2 px-3 rounded-lg">${meal.strIngredient1} ${meal.strMeasure1} </p>
                    <p class="w-fit bg-sky-400 text-gray-800 py-2 px-3 rounded-lg">${meal.strIngredient2} ${meal.strMeasure2} </p>
                    <p class="w-fit bg-sky-400 text-gray-800 py-2 px-3 rounded-lg">${meal.strIngredient3} ${meal.strMeasure3} </p>
                    <p class="w-fit bg-sky-400 text-gray-800 py-2 px-3 rounded-lg">${meal.strIngredient4} ${meal.strMeasure4} </p>
                    <p class="w-fit bg-sky-400 text-gray-800 py-2 px-3 rounded-lg">${meal.strIngredient4} ${meal.strMeasure5} </p>
                    <p class="w-fit bg-sky-400 text-gray-800 py-2 px-3 rounded-lg">${meal.strIngredient5} ${meal.strMeasure6} </p>
                    
                </div>
                <div class="tags "> 
                    <p class="text-3xl font-bold my-5">Tags :</p>
                    
                    <a target="_blank" class="py-3 px-4 bg-green-900 rounded-lg hover:bg-green-600 duration-1000" href="${meal.strSource}">Source</a>
                    <a target="_blank" class="py-3 px-4 bg-red-900 rounded-lg hover:bg-red-600 duration-1000" href="${meal.strYoutube}">Youtube</a>
                </div>
            </div>`
            document.querySelector("#detailsBox .myContainer").innerHTML=cartona
    }

    // for display all Areas
    displayAreas(data){
      let cartona = ``
      for (const area of data) {
          cartona += `
          <div class="cardArea p-3" data-Area= "${area.strArea}">
                <div class="rounded-lg overflow-hidden relative group cursor-pointer text-center">
                    <i class="fa-solid fa-house-laptop fa-4x "></i>
                    <h2 class="mt-2 font-bold">${area.strArea}</h2>
                </div>
            </div>
          `        
      }
      document.querySelector("#dataBox .myContainer").innerHTML=cartona 
    }

    // for display all ingredients 
    
    displayAllIngredients(data){
      let cartona = ``
      for (let i = 0; i < 20; i++) {
        cartona += `
        <div class="cardIngredient p-3" data-ingredient= "${data[i].strIngredient}">
                <div class="rounded-lg overflow-hidden relative group cursor-pointer text-center">
                    <i class="fa-solid fa-drumstick-bite fa-4x "></i>
                    <h2 class="mx-3 font-bold">${data[i].strIngredient}</h2>
                    <p>${data[i].strDescription.substring(0,50)}</p>
                </div>
            </div>
        `
        
      }
      document.querySelector("#dataBox .myContainer").innerHTML=cartona;
    } 

    // for display search

    displaySearch(){
      let cartona = `
      <div class="lg:flex justify-between lg:px-24 myContainer">
        <input
          id="ByName"
          type="text"
          placeholder="Search By Name"
          class="p-2 w-full mb-4 bg-main border border-gray-500 lg:mr-3 rounded-lg"
        />
        <input
          id="ByFirstLetter"
          type="text"
          maxlength="1"
          placeholder="Search By First Letter"
          class="p-2 w-full mb-4 bg-main border border-gray-500 rounded-lg"
        />
      </div>
      <div class="myContainer flex flex-wrap">
        <!-- search output as defult screen -->
      </div>
      `
      document.querySelector("#inputBox").innerHTML=cartona;
    
    }




    // for display contact
    diplayContactUs(){
      let cartona = `
      <div class="myContainer flex flex-wrap gap-4 justify-center pt-12 lg:pt-52 ">
        <input type="text" class="outline-none text-gray-700 p-2 w-11/12 lg:w-[48%]" placeholder="Enter Your Name">
        <input type="email" class="outline-none text-gray-700 p-2 w-11/12 lg:w-[48%]" placeholder="Enter Your Email">
        <input type="tel" class="outline-none text-gray-700 p-2 w-11/12 lg:w-[48%]" placeholder="Enter Your Phone">
        <input type="number" class="outline-none text-gray-700 p-2 w-11/12 lg:w-[48%]" placeholder="Enter Your Age">
        <input type="password" class="outline-none text-gray-700 p-2 w-11/12 lg:w-[48%]" placeholder="Enter Your Password">
        <input type="password" class="outline-none text-gray-700 p-2 w-11/12 lg:w-[48%]" placeholder="Repassword">
        <button class="text-red-600 border-2 border-red-600 px-4 rounded-lg">Submit</button>
    </div>
      `
      document.querySelector("#inputBox").innerHTML=cartona;
    }


}

