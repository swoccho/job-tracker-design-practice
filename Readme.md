1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById: it gets the exact one element of the specific id in html ,
        getElementsByClassName: it gets all the element of the same class ,
        querySelector : it gets the only first element that matches the id or class mentioned in the bracket with . or # ,
        querySelectorAll : it gets the all elements that matches the id or class mentioned in the bracket with . or #
        
        
2. How do you create and insert a new element into the DOM?
Answer :
        const newParagraph = document.createElement('p');
        newParagraph.innerText = 'Hello! I am a new element.';
        document.getElementById('my-container').appendChild(newParagraph);

3. What is Event Bubbling? And how does it work?
Answer: Event Bubbling is a behaviour where in a larger box if something is needed to happen in a specific part of the box when clicked , it bubbles up to the box even though the box isnt clicked, like : 
        <div id="box" onclick="alert('Box clicked!')">
            <button id="btn" onclick="alert('Button clicked!')">Click Me</button>
        </div>
        If i click that button, the browser doesn't just register a single click. It registers the event in a specific order:
        The Button triggers first: The browser sees i clicked the button and runs the button's code (shows "Button clicked!").
        The event "bubbles" up to the Box: The browser automatically moves up to the parent container div and it then runs the box's code (shows "Box clicked!").
        
4. What is Event Delegation in JavaScript? Why is it useful?
Answer : Event Delegation is a way where instead of attaching an event listener to every single child element ,i attach just one listener to their parent container.It simply looks at event.target to figure out exactly which                                                                                                           child is clicked and what to trigger only . It is useful because it solves the problem that occurs for event bubbling , and also it saves memory and speeds up the app .

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault(): Stops the Browser's Default Action when clicked something like a submit button or a link, and leave it for me to do something using JavaScript,
        stopPropagation(): Stops the Event Bubble,Stops the event right there and let it not bubble up and trigger the parent containers.
