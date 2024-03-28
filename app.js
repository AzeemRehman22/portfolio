const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sctions Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        const video = entry.target.querySelector('video');

        if (entry.isIntersecting) {
            if (video.paused) {
                video.play();
            }
        } else {
            if (!video.paused) {
                video.pause();
                //video.currentTime = 0;
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const videoContainers = document.querySelectorAll('.portfolio-item');

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    videoContainers.forEach(container => {
        observer.observe(container);
    });
});


function startAnimation(containerId) {
    const container = document.getElementById(containerId);

    if (container) {
        const overlay = container.querySelector('.overlay');
        const video = container.querySelector('video');

        if (overlay && video) {
           
            overlay.style.animation = 'falling 1.5s forwards';
            video.play();


            setTimeout(function () {
                overlay.style.display = 'none';
                video.controls = true;
            }, 1500);

          
        }
    }

}

function restartAnimation(containerId) {
    const container = document.getElementById(containerId);

    if (container) {
        const overlay = container.querySelector('.overlay');
        const video = container.querySelector('video');

        if (overlay && video) {

            if (myContainers.includes(containerId.toString())) {
                myContainers.splice(myContainers.indexOf(containerId.toString()), 1);

                overlay.style.display = 'none'; // Hide overlay
            overlay.style.animation = 'none'; // Clear animation
            setTimeout(function () {
                overlay.style.animation = 'falling 1.5s forwards'; // Restart animation
            }, 10);

                    video.currentTime = 0;
                    video.pause();
                    video.controls = false;

            }


        }
    }
}

PageTransitions();