const baselineBtn =document.querySelector(".baseline-btn");
const leadingBtn =document.querySelector(".leading-btn");
const stackedBtn =document.querySelector(".stacked-btn");

baselineBtn.addEventListener("click",()=>{
    document.querySelector(".snackbar-baseline-container").classList.remove("hide");
    document.querySelector(".snackbar-leading-container").classList.add("hide");
    document.querySelector(".snackbar-stacked-container").classList.add("hide");
});

leadingBtn.addEventListener("click",()=>{
    document.querySelector(".snackbar-baseline-container").classList.add("hide");
    document.querySelector(".snackbar-leading-container").classList.remove("hide");
    document.querySelector(".snackbar-stacked-container").classList.add("hide");
});

stackedBtn.addEventListener("click",()=>{
    document.querySelector(".snackbar-baseline-container").classList.add("hide");
    document.querySelector(".snackbar-leading-container").classList.add("hide");
    document.querySelector(".snackbar-stacked-container").classList.remove("hide");
});
