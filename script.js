const ratio = .3
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer){
      entries.forEach( function (entry){
        if (entry.intersectionRatio > ratio){
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
  observer.observe(r)
})


$(document).on('click',function(){ 
  $('.navbar .collapse').collapse('hide');})
