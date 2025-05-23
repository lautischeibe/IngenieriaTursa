// (function(){
//     document.addEventListener("scroll", () => {
//         let sections = document.querySelectorAll("section, article, div");
        
//         sections.forEach(section => {
//             let rect = section.getBoundingClientRect();
//             if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
//                 sections.forEach(sec => sec.classList.remove("active-section"));
//                 section.classList.add("active-section");
//             }
//         });
//     });
// })();