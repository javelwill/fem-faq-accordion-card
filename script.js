const faqs = document.querySelectorAll('.faq');
console.log(faqs);

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    if (faq.classList.contains('active')) {
      faq.classList.remove('active')
    } else {
      faqs.forEach((faq) => {
        faq.classList.remove('active')
      })
      faq.classList.add('active')
    }
  })
})

