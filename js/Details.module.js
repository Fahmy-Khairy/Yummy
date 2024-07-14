import { Ui } from "./ui.module.js";

export class Details {
    
    constructor(){
        this.loading = document.querySelector(".louding");


    }

    // search functioons
    getvalueofsearchbyname(){
        let input1=document.querySelector("#inputBox #ByName")
        input1.addEventListener('keyup', async  () => {
            console.log(input1.value);
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input1.value}`);
            const data =await res.json()
            let meals = data.meals;
            const ui = new Ui();
            ui.displayMealsofChosenCategory(meals)
            document.querySelector("#dataBox").classList.remove('hidden');
            this.getElementData();
            
        })
    }

    getvalueofsearchbyFirstleter(){
        let input1=document.querySelector("#inputBox #ByFirstLetter")
        input1.addEventListener('keyup', async  () => {
            console.log(input1.value);
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input1.value}`);
            const data =await res.json()
            let meals = data.meals;
            const ui = new Ui();    
            ui.displayMealsofChosenCategory(meals)
            document.querySelector("#dataBox").classList.remove('hidden');
            this.getElementData();
        })
    }

    getElementData(){
        document.querySelectorAll('#dataBox .myContainer .cardMeal').forEach((cardOfMeal) => {
            cardOfMeal.addEventListener("click", () => {
               const id =  cardOfMeal.getAttribute("data-id")
               this.getDetailsofanymealById(id)
            })
        })
    }

    async getDetailsofanymealById(id){
        document.querySelector("#detailsBox").classList.remove("hidden")
        document.querySelector("#dataBox").classList.add("hidden")
        this.loading.classList.remove("hidden");
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        this.loading.classList.add("hidden");
        const meal =data.meals; 
        const ui = new Ui();

        ui.displayDetailsofanymeal(meal[0])
        this.getElementData()
    }


}