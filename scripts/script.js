var counter = 1;
    setInterval(function()  {
      document.getElementById('radio'+ counter).checked = true;
      counter++; 

      if(counter>4){
        counter=1
      }

    }, 5000);


const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener('click', () => {
    modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});

