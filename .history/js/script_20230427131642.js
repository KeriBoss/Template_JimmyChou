const roundway = document.querySelector('#roundway');
const roundwayForm = document.querySelector('#round-way');

if(roundway.checked == true){
    roundwayForm.classList.add('notShow');
    alert('das')
}
else{
    roundwayForm.classList.remove('notShow');
}