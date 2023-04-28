const oneway = document.querySelector('#oneway');
const roundway = document.querySelector('#roundway');
const roundwayForm = document.querySelector('#round-way');

roundway.onclick = ()=>{
    if(roundway.checked == true){
        roundwayForm.classList.add('notShow');
    }
    else if(roundway.checked == false){
        roundwayForm.classList.remove('notShow');
    }
}
oneway.onclick = ()=>{
    if(roundway.checked == true){
        roundwayForm.classList.remove('notShow');
    }
    else if(roundway.checked == false){
        roundwayForm.classList.add('notShow');
    }
}
