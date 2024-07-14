import { Ui } from "./ui.module.js";
import { closeNav } from "./index.js";
import { Details } from "./Details.module.js";

export class Home {
  constructor() {
    this.loading = document.querySelector(".louding");

    this.closeNav = new closeNav();

    document.querySelectorAll("nav ul li").forEach((link) => {
      link.addEventListener("click", async () => {
        let nameLink = link.getAttribute("data-target");
        // console.log(nameLink);
        if (nameLink == "Categories") {
          await this.getCategories();
        } else if (nameLink == "Area") {
          await this.getAreas();
        } else if (nameLink == "Ingredients") {
          await this.getAllIngredients();
        } else if (nameLink == "Search") {
          const ui = new Ui();
          ui.displaySearch();
          closeNav();
          const details = new Details();
          details.getvalueofsearchbyname();
          details.getvalueofsearchbyFirstleter();
          document.querySelector("#inputBox").classList.remove("hidden");
          document.querySelector("#dataBox").classList.add("hidden");
          document.querySelector("#detailsBox").classList.add("hidden");
        } else if (nameLink == "ContactUs") {
          const ui = new Ui();
          ui.diplayContactUs();

          closeNav();
          document.querySelector("#inputBox").classList.remove("hidden");
          document.querySelector("#dataBox").classList.add("hidden");
          document.querySelector("#detailsBox").classList.add("hidden");
        }
      });
    });
  }

  async defultScreen() {
    this.loading.classList.remove("hidden");
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=`
    );
    const data = await res.json();
    let meals = data.meals;
    const ui = new Ui();
    this.loading.classList.add("hidden");
    ui.displayMealsofChosenCategory(meals);
    const details = new Details();
    details.getElementData();
  }

  // for get the clicked element of category
  getElementData() {
    document.querySelectorAll("#dataBox .cardCategory").forEach((card) => {
      card.addEventListener("click", () => {
        console.log(card.getAttribute("data-category"));
        const categoryName = card.getAttribute("data-category");
        this.getMealsOfCategory(categoryName);
      });
    });
  }
  getElementDataforIngredient() {
    document.querySelectorAll("#dataBox .cardIngredient").forEach((card) => {
      // console.log(card)
      card.addEventListener("click", async () => {
        // console.log(card.getAttribute("data-ingredient"));
        const categoryName = card.getAttribute("data-ingredient");
        const ui = new Ui();
        // this.getMealsOfCategory(categoryName);
        await this.getMealsOfingredient(categoryName);
      });
    });
  }
  getElementDataforArea() {
    document.querySelectorAll("#dataBox .cardArea").forEach((card) => {
      card.addEventListener("click", () => {
        // console.log(card.getAttribute("data-area"));
        const categoryName = card.getAttribute("data-area");
        this.getMealsOfArea(categoryName);
      });
    });
  }
  // for get gategories
  async getCategories() {
    this.loading.classList.remove("hidden");
    document.querySelector("#dataBox").classList.remove("hidden");
    document.querySelector("#detailsBox").classList.add("hidden");
    document.querySelector("#inputBox").classList.add("hidden");
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const categoryData = await res.json();
    this.loading.classList.add("hidden");
    closeNav();
    // console.log(categoryData.categories);
    const ui = new Ui();
    ui.displayCategory(categoryData.categories);
    this.getElementData();
  }
  // for get meals of cat
  async getMealsOfCategory(nameOfCategory) {
    this.loading.classList.remove("hidden");
    document.querySelector("#dataBox").classList.remove("hidden");
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${nameOfCategory}`
    );
    const data = await res.json();
    this.loading.classList.add("hidden");
    const meals = data.meals;
    const ui = new Ui();
    // console.log(meals);
    ui.displayMealsofChosenCategory(meals);
    const details = new Details();
    details.getElementData();
    // console.log(meals);
  }
  // // for get meals of ingred
  async getMealsOfingredient(nameOfCategory) {
    this.loading.classList.remove("hidden");
    document.querySelector("#dataBox").classList.remove("hidden");
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${nameOfCategory}`
    );
    const data = await res.json();
    this.loading.classList.add("hidden");
    const meals = data.meals;
    const ui = new Ui();
    // console.log(meals);
    ui.displayMealsofChosenCategory(meals);
    const details = new Details();
    details.getElementData();
    // console.log(meals);
  }

  // for get areas
  async getAreas() {
    this.loading.classList.remove("hidden");
    document.querySelector("#dataBox").classList.remove("hidden");
    document.querySelector("#detailsBox").classList.add("hidden");
    document.querySelector("#inputBox").classList.add("hidden");
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const data = await res.json();
    this.loading.classList.add("hidden");
    closeNav();
    const ui = new Ui();
    ui.displayAreas(data.meals);
    // console.log(data.meals)
    this.getElementDataforArea();
  }
  // get meals of area
  async getMealsOfArea(country) {
    this.loading.classList.remove("hidden");
    document.querySelector("#dataBox").classList.remove("hidden");
    document.querySelector("#detailsBox").classList.add("hidden");
    document.querySelector("#inputBox").classList.add("hidden");
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
    );
    const data = await res.json();
    this.loading.classList.add("hidden");
    const meals = data.meals;
    const ui = new Ui();
    ui.displayMealsofChosenCategory(meals);
    const details = new Details();
    details.getElementData();
  }

  // for get Ingredients
  async getAllIngredients() {
    this.loading.classList.remove("hidden");
    document.querySelector("#dataBox").classList.remove("hidden");
    document.querySelector("#detailsBox").classList.add("hidden");
    document.querySelector("#inputBox").classList.add("hidden");
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    const data = await res.json();
    // console.log(data)
    this.loading.classList.add("hidden");
    closeNav();
    const ui = new Ui();
    ui.displayAllIngredients(data.meals);
    this.getElementDataforIngredient();
  }
}
