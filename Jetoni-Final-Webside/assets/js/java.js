
const readMoreBtn = document.querySelector('.cards .btnPr');
const morePd = document.querySelector('.cards');

readMoreBtn.addEventListener('click',(e)=>{morePd.classList.toggle('show-more');
})

function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === "email.value ===" || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
       setTimeout(() => {
           Name.value = '';
           email.value = '';
           msg.value = '';
           danger.innerHTML("")
       }, 2000); 

       success.style = 'block';
    }




    setTimeout(() => {
       danger.style.display = 'none';
       success.style.display = 'block'; 
    }, 1000);
}
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }