function userSignin() {
    const element1 = document.getElementById('user-signin-btns');
    const element2 = document.getElementById('sign-in-btn1');
    const element3 = document.getElementById('sign-in-btn2');
    element3.classList.add('inactivate-signin');
    element2.classList.add('inactivate-signin');
    element1.classList.remove('active-user');
  }

  function vendorSignin() {
    const element = document.getElementById('vendor-signin-btns');
    const element2 = document.getElementById('sign-in-btn1');
    const element3 = document.getElementById('sign-in-btn2');
    element3.classList.add('inactivate-signin');
    element2.classList.add('inactivate-signin');  
    element.classList.remove('active-vendor');
  }  
