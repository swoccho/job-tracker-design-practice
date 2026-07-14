let currentTab = "all";

const tabActive = ["bg-blue-600" , "text-white"];
const allcontainer = document.getElementById("all-container");
const emptystate = document.getElementById("empty-state");
const available = document.getElementById("available");



function switchTab(tab)
{
    

    const tabs = ["all","interview","rejected"];

    currentTab = tab;

    for(const t of tabs)
    {
        const tabName = document.getElementById("tab-"+t);
        
        console.log(tabName);

        if(t === tab)
        {
            tabName.classList.add(...tabActive);

        }
        else{
            tabName.classList.remove(...tabActive);

        }    
    }  
    updateCount();

}


document.getElementById("jobs-card-container").addEventListener("click", function(event)
{
    const clickedElement = event.target;
    console.log(clickedElement.closest(".card"));
    const card = clickedElement.closest(".card");

    const status = card.querySelector(".js-status");
   

    
    if(clickedElement.classList.contains("interview"))
    {
        console.log("Interview clicked");
        status.innerText = "Interviewed";

        status.classList.remove("bg-slate-300" , "border-red-600" , "text-red-600");
        status.classList.add("border-green-600" , "text-green-600");

       
        updateCount();

    }

    if(clickedElement.classList.contains("rejected"))
    {
        console.log("rejected clicked");
        status.innerText = "Rejected";

        status.classList.remove("bg-slate-300" , "border-green-600" , "text-green-600");
        status.classList.add("border-red-600" , "text-red-600");

        updateCount();
    }

    if(clickedElement.classList.contains("delete"))
    {
        console.log("delete clicked");
        card.remove();
        updateCount();



    }
})


const allCount = document.getElementById("all-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");




function updateCount()
{

    const counts = {
        all : 0,
        interview : 0,
        rejected : 0,

    };

    const cards = allcontainer.querySelectorAll(".card");

    let showCount = 0;

    cards.forEach(card => {

        const statusText = card.querySelector(".js-status").innerText;

        counts.all++;

        if(statusText ==="Interviewed"){
            counts.interview++;
        }
        if(statusText==="Rejected"){
            counts.rejected++;
        }

        if(currentTab ==="all")
        {
            card.classList.remove("hidden");
            showCount++;
        }

        else if(currentTab === "interview" && statusText==="Interviewed")
        {
            card.classList.remove("hidden");
            showCount++;
        }

        else if(currentTab ==="rejected" && statusText==="Rejected")
            {
                card.classList.remove("hidden");
                showCount++;
            } 
        
        else{
            card.classList.add("hidden");
        }

    })



    allCount.innerText = counts.all;
    interviewCount.innerText = counts.interview;
    rejectedCount.innerText = counts.rejected;

    available.innerText = showCount;


    if(showCount < 1)
    {
        emptystate.classList.remove("hidden");

    }
    else{
        emptystate.classList.add("hidden");
    }

}


switchTab(currentTab)