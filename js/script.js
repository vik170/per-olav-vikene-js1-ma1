const cats = [
	{
		name: "Blob",
		age: 10,
	},
	{
		name: "Harold",
	},
	{
		name: "Blurt",
		age: 21,
	},
];

//Question 1

const cat = {
	complain: function () {
		console.log("Meow!");
	}
};

//Question 2

const heading = document.querySelector("h3");
heading.innerText = "Updated heading";

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");
for (i = 0; i < paragraphs.length; i++) {
	paragraphs[i].style.color = "red";
}

//Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7

function list(value) {
	for (i = 0; i < value.length; i++) {
		console.log(value[i].name);
	}
}

list(cats);

//Question 8

let html = "";

function createCats(cats) {
	for (i = 0; i < cats.length; i++) {
		let age = "Age unkown";

		if (cats[i].age) {
			age = cats[i].age;
		}

		html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>${age}</p>
                </div>`;
    }
    
	return html;
}

const updatedHTML = createCats(cats);

const gameContainer = document.querySelector(".cat-container");
gameContainer.innerHTML = updatedHTML;
