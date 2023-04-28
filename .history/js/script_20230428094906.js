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
    if(oneway.checked == true){
        roundwayForm.classList.remove('notShow');
    }
    else if(roundway.checked == false){
        roundwayForm.classList.add('notShow');
    }
}

const btnShowFilter = document.querySelector('#btn-show-filter');

function showFilter(){
    if(window.innerWidth <= 991.98){
        document.querySelector('#filter-ticket').classList.remove('show');
        btnShowFilter.style.display = 'block'
    }
    if(window.innerWidth >= 991.98){
        btnShowFilter.style.display = 'none'
    }
}
showFilter();

//Booking filter in map car
const seat_chart = document.querySelectorAll('.modal-body .map-car .map-content .desk');

seat_chart.forEach(item => {
    item.addEventListener('click', function(event){
        if(item.classList.contains('over')){
            return;
        }
        item.classList.toggle('active');
    })
})
