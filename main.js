let allButtons = document.querySelectorAll(`#list button`)
let buttons = document.querySelectorAll(`button`)
let submitBtn = document.querySelector(`#submit-btn`)
let rating = document.getElementById(`rating`)
let firstSection = document.querySelector(`#rating-section`)
let secondSection = document.querySelector(`#thankyou-section`)
let button1 = document.getElementById(`one`)
let button2 = document.getElementById(`two`)
let button3 = document.getElementById(`three`)
let button4 = document.getElementById(`four`)
let button5 = document.getElementById(`five`)

//REVEALING THE THANK YOU PAGE AND HIDING THE RATINGS PAGE
let pageSetting = (element1,element2)=>{
    element1.classList.add(`hidden`)
    element2.classList.remove(`hidden`)
}

// FUNCTION TO STORE THE THE VALUE IN THE RATING IN THE SPAN IN THANK YOU SECTION
let number = 0
const storeRatin = (element)=>{
        number = element.textContent
        number = Number(number)
        rating.textContent = number
        console.log(number)
    }


// FUNCTION THAT ADD THE ClICK STYLE
const clickStyle = (element)=>{
        element.style.backgroundColor = `hsl(25,97%,53%)`
        //  button1.style.backgroundColor =`blue` 
}
// FUNCTION THAT REMOVE THE ClICK STYLE
const defaultClickStyle = ()=>{
    button1.style.backgroundColor =`hsl(213, 19%, 18%)`
    button2.style.backgroundColor =`hsl(213, 19%, 18%) `
    button3.style.backgroundColor =`hsl(213, 19%, 18%)`
    button4.style.backgroundColor =`hsl(213, 19%, 18%)`
    button5.style.backgroundColor =`hsl(213, 19%, 18%)`
}

allButtons.forEach((button)=>{  
    button.addEventListener(`click`, ()=>{
        storeRatin(button)
        defaultClickStyle()
        clickStyle(button)
        })      
})
submitBtn.addEventListener(`click`,()=>{pageSetting(firstSection,secondSection)})
