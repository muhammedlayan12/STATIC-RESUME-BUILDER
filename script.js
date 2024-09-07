document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleSkills');
    var skillsSection = document.querySelector('.skills');
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    });
});








// //also with jquery
// $(document).ready(function(){
//     $("#toggleSkills").click(function(){
//         $(".skills").toggle();
//         $(this).text(function(i,text){
//             return text === "Hide Skills"? "Show Skills" : "Hide Skills";
//         });
//     });
// })