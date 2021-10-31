// import axios from "axios"

window.addEventListener("load", (event) => {
  changeTab(event, "main-content-1");
});

function changeTab(evt, indexTab) {
  // Declare all variables
  if(indexTab == 'main-content-2'){
    loadData()
  }
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("main-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("sidebar-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(indexTab).style.display = "block";
  evt.currentTarget.className += " active";
}
async function loadData(){
    const tableContent = document.querySelector("tbody");
    var users = await axios.get("https://jsonplaceholder.typicode.com/users")
    var listUsers = users.data.map(user => {
        return  `<tr><th scope="row">${user.id}</th><td>${user.name}</td><td>${user.email}</td><td>@mdo</td></tr>`
    });
    tableContent.innerHTML = listUsers.join('')
}
