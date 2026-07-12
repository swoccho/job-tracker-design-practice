let currentTab = "all";

const tabActive = ["bg-blue-600" , "text-white"];
const allcontainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptystate = document.getElementById("empty-state");
const available = document.getElementById("available");

// console.log(allcontainer,interviewContainer,rejectedContainer)

function switchTab(tab)
{
    console.log(tab);

    const tabs = ["all","interview","rejected"];

    currentTab = tab;

    for(const t of tabs)
    {
        const tabName = document.getElementById("tab-"+t);
        const selected = document.getElementById(t+"-container");
        console.log(tabName);

        if(t === tab)
        {
            tabName.classList.add(...tabActive);
            
            selected.classList.remove("hidden");

            if(selected.children.length < 1)
            {
                emptystate.classList.remove("hidden");
            }

        }
        else{
            tabName.classList.remove(...tabActive);
            selected.classList.add("hidden");

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
    const parent = card.parentNode;

    
    if(clickedElement.classList.contains("interview"))
    {
        console.log("Interview clicked");
        status.innerText = "Interviewed";

        interviewContainer.appendChild(card);
        updateCount();

    }

    if(clickedElement.classList.contains("rejected"))
    {
        console.log("rejected clicked");
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        updateCount();
    }

    if(clickedElement.classList.contains("delete"))
    {
        console.log("delete clicked");
        parent.removeChild(card);
        updateCount();



    }
})


const allCount = document.getElementById("all-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");


// allCount.innerHTML = allcontainer.children.length;
// interviewCount.innerHTML = interviewContainer.children.length;
// rejectedCount.innerHTML = rejectedContainer.children.length;


updateCount();

function updateCount()
{
    
    // allCount.innerHTML = allcontainer.children.length;
    // interviewCount.innerHTML = interviewContainer.children.length;
    // rejectedCount.innerHTML = rejectedContainer.children.length;


    const counts = {
        all : allcontainer.children.length,
        interview : interviewContainer.children.length,
        rejected : rejectedContainer.children.length,

    };

    allCount.innerText = counts.all;
    interviewCount.innerText = counts.interview;
    rejectedCount.innerText = counts.rejected;

    available.innerText = counts[currentTab];


 

        
    


}


switchTab(currentTab)