(function(){
  // Lazy-load images with data-src
  document.addEventListener('DOMContentLoaded', function(){
    const opts = { rootMargin: '200px 0px', threshold: 0.01 };
    const swapSrc = img => {
      const src = img.getAttribute('data-src');
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
      }
      const srcset = img.getAttribute('data-srcset');
      if (srcset) {
        img.srcset = srcset;
        img.removeAttribute('data-srcset');
      }
      img.loading = 'lazy';
      img.decoding = 'async';
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            swapSrc(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, opts);
      document.querySelectorAll('img[data-src],img[data-srcset]').forEach(img => io.observe(img));
    } else {
      document.querySelectorAll('img[data-src],img[data-srcset]').forEach(swapSrc);
    }
  });

  // Delegate TikTok lazy embed for placeholders having [data-src]
  document.addEventListener('click', function(e){
    const btn = e.target.closest('.tiktok-play-btn');
    if (!btn) return;
    e.preventDefault();
    const placeholder = btn.closest('.tiktok-placeholder');
    if (!placeholder) return;
    const src = placeholder.getAttribute('data-src');
    if (!src) return;
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.position = 'absolute';
    iframe.style.top = '4.5%';
    iframe.style.left = '4.5%';
    iframe.style.width = '91%';
    iframe.style.height = '92%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '28px';
    iframe.style.boxShadow = '0 0 8px rgba(0,0,0,0.12)';
    iframe.style.background = '#000';
    iframe.style.zIndex = '1';
    placeholder.parentNode.appendChild(iframe);
    placeholder.remove();
  });
})(); 