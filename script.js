class app {
    constructor() {
        this.load();
        console.log("html loaded");
    }
    
    load() {
        this.getData();   
    }
    
    handleClickButton(event){    // handle click
        window.open("index2.html", "_self");
    }
    
    showLoading(button) {        // open new index file, when button is clicked
        button.addEventListener("click", this.handleClickButton);       
    }
    
    enableButton(button){
        button.removeAttribute("disabled");
    }
    
    result(){                // save clicked items in browser database with localStorage.setItem()
        //const selected = document.querySelector('.visited').textContent;
        console.log("a");
        const selected = event.currentTarget.textContent;
        localStorage.setItem("selected", selected);
        const button = document.querySelector("button");
        this.enableButton(button);
        this.showLoading(button);
    }

    
    getNumbers(){           // reset selected attribute, when user_start opened and toggle("visited") if clicked          
        const numbers = [...document.querySelectorAll('.number')];
        numbers.forEach(number => {
            number.addEventListener("click", event => {
                document.querySelector(".visited")?.classList?.remove("visited")
                event.currentTarget.classList.add("visited");
                this.result();
            },
     {
                once: true
                  }
            )
        })      
    }
        
    
    printNumbers(){          // insert data from localeStorage inside tag with class "rating"
        const rating = document.querySelector(".rating");
        const selected_sum = localStorage.getItem("selected");
        rating.textContent = selected_sum;
    }
    
    getData() {              // use different html files in one script file
        let page = document.body.id;
        switch(page) {
            case "user_start":
                this.getNumbers();
                break;
            
            case "user_end":
                this.printNumbers();
                break;
                
            case "default":
                break;
        }
    }
}

new app();