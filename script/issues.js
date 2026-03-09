let allIssues = [];

// Load all issues
async function loadIssues(){

const res = await fetch(
"https://phi-lab-server.vercel.app/api/v1/lab/issues"
);

const data = await res.json();

allIssues = data.data;

displayIssues(allIssues);

}

loadIssues();


// Display cards
function displayIssues(issues){

const container =
document.getElementById("issues-container");

container.innerHTML = "";

issues.forEach(issue => {

const div = document.createElement("div");

div.className =
"bg-white p-4 rounded shadow cursor-pointer";


// Border color
if(issue.status === "OPEN"){

div.classList.add("border-t-4","border-green-500");

}

if(issue.status === "CLOSED"){

div.classList.add("border-t-4","border-purple-500");

}


div.innerHTML = `

<h3 class="font-bold text-lg">
${issue.title}
</h3>

<p class="text-sm text-gray-600">
${issue.description}
</p>

<p class="mt-2 text-sm">
Status: ${issue.status}
</p>

<p class="text-sm">
Author: ${issue.author}
</p>

<p class="text-sm">
Priority: ${issue.priority}
</p>

<p class="text-sm">
Label: ${issue.label}
</p>

`;

div.addEventListener("click", function(){

loadSingleIssue(issue.id);

});

container.appendChild(div);

});

}

function filterIssues(type){

if(type === "all"){

displayIssues(allIssues);

}

if(type === "open"){

const openIssues =
allIssues.filter(
issue => issue.status === "OPEN"
);

displayIssues(openIssues);

}

if(type === "closed"){

const closedIssues =
allIssues.filter(
issue => issue.status === "CLOSED"
);

displayIssues(closedIssues);

}

}

async function searchIssues(){

const text =
document.getElementById("search-input").value;

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
);

const data = await res.json();

displayIssues(data.data);

}

async function loadSingleIssue(id){

const res = await fetch(
`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
);

const data = await res.json();

alert(
"Title: " + data.data.title +
"\n\nDescription: " + data.data.description +
"\n\nAuthor: " + data.data.author +
"\n\nPriority: " + data.data.priority
);

}