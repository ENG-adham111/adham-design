(function(){
  const WA_NUMBER = '+201091569465';

  document.querySelectorAll('.card .order').forEach(btn=>{
    btn.addEventListener('click', function(){
      const card = this.closest('.card');
      const title = card.dataset.title || card.querySelector('h3').innerText;
      const price = card.dataset.price || card.querySelector('.price')?.innerText || '';
      const qty = card.querySelector('.qty').value || 1;
      const buyer = document.getElementById('buyerName').value.trim();
      const notes = document.getElementById('notes').value.trim();

      let message = `مرحبا، أريد طلب تصميم:\n- الاسم: ${title}\n- السعر (لكل وحدة): ${price} ج.م\n- الكمية: ${qty}`;
      if(buyer) message += `\n- اسم المشتري: ${buyer}`;
      if(notes) message += `\n- ملاحظة: ${notes}`;

      const encoded = encodeURIComponent(message);
      const waLink = `https://wa.me/${WA_NUMBER.replace(/\+/g,'') }?text=${encoded}`;

      window.open(waLink, '_blank');
    });
  });

  const themeBtn = document.getElementById('themeToggle');
  themeBtn.addEventListener('click', ()=>{
    if(document.documentElement.getAttribute('data-theme') === 'dark'){
      document.documentElement.removeAttribute('data-theme');
      themeBtn.innerText = 'وضع داكن';
    } else {
      document.documentElement.setAttribute('data-theme','dark');
      themeBtn.innerText = 'وضع فاتح';
    }
  });

})();
