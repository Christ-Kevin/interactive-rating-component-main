class app {
    constructor() {
        this.load();
        console.log("html loaded");
    }
    
    load() {
        this.getData();
        this.showLoading();
    }
    
    handleclick(event){
        window.open("index2.html", "_self");
    }
    
    showLoading() {        // open new index file, when button is clicked
        const button = document.querySelector("button");
        
            button.addEventListener("click", this.handleclick);
        
    }
    
    result(){                // save clicked items in browser database with localStorage.setItem()
        const selected = document.querySelector('.visited').textContent;
        localStorage.setItem("selected", selected);
        const button = document.querySelector("button");
        button.removeAttribute("disabled");
    }
    
    getNumbers(){           // reset selected attribute, when user_start opened and toggle("visited") if clicked          
        const numbers = [...document.querySelectorAll('.number')];
        numbers.forEach(number => {
            number.addEventListener("click", event => {
                document.querySelector(".visited")?.classList?.remove("visited")
                event.currentTarget.classList.add("visited");
                this.result();
            })
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