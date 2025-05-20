if (location.hostname.includes("biblioteca-ciex.vercel.app")) {
  let gtagScript = document.createElement('script');
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-4Z390CRL24";
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-4Z390CRL24', {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
}
