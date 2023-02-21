const faqs = document.querySelectorAll('.faq');
console.log(faqs);

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faqs.forEach((faq) => {
      faq.classList.remove('active')
    })
    faq.classList.add('active')
  })
})

