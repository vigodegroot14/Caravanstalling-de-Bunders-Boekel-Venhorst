const timelineRows = document.querySelectorAll(".timeline-row");

function revealTimeline() {

  timelineRows.forEach(row => {

    const top = row.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      row.classList.add("show");
    }

  });

}

window.addEventListener("scroll", revealTimeline);

revealTimeline();