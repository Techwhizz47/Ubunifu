// const animationItems = document.querySelectorAll(".animate");

// console.log(animationItems);

// animationItems.forEach(
//     (item)=>{
//         console.log(item.dataset);
//         item.style.animation=item.dataset.animate;
//     }
// );

const callback= (entries) => {
    console.log(entries);
    entries.forEach(
        (entry) => {
            if (entry.isIntersecting){
                console.log("The element is intersecting------->");
                entry.target.style.animation=entry.target.dataset.animate
            }
            else {entry.target.style.animation="none"}
        }
    )
    
}

let observer = new IntersectionObserver(callback);

const animationItems = document.querySelectorAll(".animate");
    animationItems.forEach(item =>{
        observer.observe(item)
    }
)

