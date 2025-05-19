console.log("Practical Task 2");
console.log("");

// Initialise a list of grocery items.
let mylist = ["Battery", "Coffee", "Beets", "Spinach", "Mozzerella"];
let myItems = document.querySelector("#itemList");

function displayItems() {
    // Loop through the items of the array (mylist) using the forEach().
    mylist.forEach((item) => {
        //Apply styling shoping list items.
        myItems.style.color = "blue";
        myItems.style.fontSize = "large";

        let list = document.createElement("li");
        //Adding items from array as text to list item (li).
        list.textContent = item;
        // Append element in list item to unordered list (list).
        myItems.appendChild(list);
    });

    // Declare the indeces of the items in myItems list on which to apply style.
    const bought = [2, 3];

    // Define a function to apply styles.
    function setDefaultChecked() {
        // apply a forEach loop on the bought item indices, that uses an arrow function to apply a text and background color and font size.
        bought.forEach(index => {
            const item = myItems.childNodes[index];
            item.style.color = "#788";
            item.style.fontSize = "large";
            item.style.fontWeight = "bold";
            item.style.backgroundColor = "lightgray";
        });

        // Define a function that handles a change in style for selected items 
        const li = document.querySelectorAll("itemList");
        function changeColor() {
            this.classList.toggle("done");
        };
        
        for (i = 0; i < li.length; i++) {
            li[i].addEventListener("click", changeColor);  
        };    

        // To improve user experience, associate checkboxes to list items (items in store) using a forEach loop.
        myItems.childNodes.forEach(item1 => {;
            const checkbox = document.createElement("input"); // Create an input element (checkbox).
            checkbox.type = "checkbox"; // Define input element type as checkbox.
            item1.insertAdjacentElement("afterbegin", checkbox); // Add checkboxes side-by-side.

            // Make use of an event listener to communicate events on the checkboxes to user.
            // Pass the event object to an arrow function
            checkbox.addEventListener("click", (e) => {
                // Use a for loop to iterate through the list items
                for (i = 0; i < myItems.childNodes.length; i++) {
                    if (item1 == myItems.childNodes[2] || item1 == myItems.childNodes[3]) {
                        alert("This item has been bought"); // Alert user if they click on the third and fourth item.
                    };
                    return;
                };
            });
        });
    }
    setDefaultChecked();

    // Use a forEach loop to add a span delete element
    myItems.childNodes.forEach(item2 => {
        const deleteSpan = document.createElement("button");
        deleteSpan.classList.add("delete");
        deleteSpan.textContent = "Delete Item";
        item2.insertAdjacentElement("afterbegin", deleteSpan); // Add clickable buttons side-by-side.
    });

    // Define function to update the ordered list
    function addItem() {
        const inputText = document.getElementById("newItem");
        if (inputText.value.trim() !== "") {
            // Create an checkbox input element for each created item.
            const checkbox = document.createElement("input"); 
            checkbox.type = "checkbox"; // Define input element type as checkbox.

            //Create the list element (li) and set set its value to be the value of the text entered by user.
            const li = document.createElement("li");
            li.textContent = inputText.value;

            // Associate the delete button to each added item.
            const deleteSpan = document.createElement("button");
            deleteSpan.classList.add("delete");
            deleteSpan.textContent = "Delete Item";

            //Append inserrted item to list
            myItems.appendChild(li).insertAdjacentElement("afterbegin", checkbox);
            myItems.appendChild(li).insertAdjacentElement("afterbegin", deleteSpan);

            //reset inputText to empy string.
            inputText.value = "";

        // Notify user if adding an empty string.
        } else {
            alert("Please insert an item");
        };
    }

    // Define an event listener function that uses the enter key to execute user input.
    const userinput = document.getElementById("newItem");
    userinput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("addButton").click();
        };
    });

    // Add an event listener to the AddItem function.
    document.getElementById("addButton").addEventListener("click", addItem);

    // Define a functions and event listeners that will handle the management of newly added items.
    const [listContainer, input, button] = ["itemList", "newItem", "addButton"].map(id => document.getElementById(id));
    input.addEventListener("input", () => button.disabled = !input.value.trim());

    button.addEventListener("click", () => {
        item.classList.add("li");
        item.textContent = input.value;
        input.value = "";
        button.disabled = true;
        input.focus();
    })

    listContainer.addEventListener("click", event => event.target.closest("li")?.classList.toggle("done"));

    // Define the delete function that will delete items on the list.
    function deleteItems(event) {
        // Determine if it was a delete button that was clicked
        if(event.target.classList.contains("delete")) {
            // Remove the closest list element ancestor to the clicked element
            event.target.closest("li").remove();
        }
    };
    // Handle all the clicks within the ul tag using an event listener.
    myItems.addEventListener("click", deleteItems);

};
displayItems();

console.log();
console.log("End of Code");
console.log();

//References
// 1. Aileen Rae (2023) Checking and unchecking a checkbox with JavaScript: a quick lesson on HTML IDL attributes, aileenrae.co.uk. Available at: https://aileenrae.co.uk/blog/programatically-check-uncheck-checkbox-javascript/ (Accessed: 19 January 2025).
// 2. Ayebola, J. (2023) How to Loop Through Arrays in JavaScript, FreeCodeCamp. Available at: https://www.freecodecamp.org/news/loop-through-arrays-javascript/ (Accessed: 19 January 2025).
// 3. GeeksforGeeks (2024) How to create HTML List from JavaScript Array?, GeeksforGeeks. Available at: https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/ (Accessed: 18 January 2025).
// 4. Jacinda (2024) [JavaScript] - How to Make a List Different Colors in | SheCodes, SheCodes. Available at: https://www.shecodes.io/athena/6483-how-to-make-a-list-different-colors-in-javascript (Accessed: 20 January 2025).
// 5. Joel Olawanle (2022) Push into an Array in JavaScript – How to Insert an Element into an Array in JS, FreeCodeCamp. Available at: https://www.freecodecamp.org/news/how-to-insert-an-element-into-an-array-in-javascript/ (Accessed: 20 January 2025).
// 6. Mishra, K. (2022) How to create HTML list from JavaScript array?, Stack Overflow. Available at: https://www.tutorialspoint.com/how-to-create-html-list-from-javascript-array (Accessed: 18 January 2025).
// 7. Nenashev, A. (2023) javascript - Strike through a div on click, Stack Overflow. Available at: https://stackoverflow.com/questions-through-a-div-on-click (Accessed: 26 January 2025).
// 8. Steven Rayzman (2015) Appending Button To List Item (Example) | Treehouse Community, TeamTreeHouse. Available at: https://teamtreehouse.com/community/appending-button-to-list-item (Accessed: 21 January 2025).
// 9. W3Resources (2023) JavaScript array: Add items in a blank array and display the items - w3resource, W3Resources. Available at: https://www.w3resource.com/javascript-exercises/javascript-array-exercise-13.php (Accessed: 18 January 2025).