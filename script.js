$(document).ready(function () {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})

function userSignin() {
  const url = "https://amitesh-mern.github.io/Whosville_Hackathon_App/User_Signup.json";
  async function getdata(url) {
    let resp = await fetch(url);
    let data = await resp.json();

    const uid = document.getElementById("User_ID").value;
    const pwd = document.getElementById("User_Password").value;
    if (uid === "") { alert("User ID is required!") }
    else {
      if (pwd === "") { alert("Password is required!") }
      else {
        const result = data.Users.filter(obj => {
          //return data.Users.ID === 'User1';
          return obj.ID === uid;
        })

        if (result.length === 0) { alert("User ID is invalid!") }
        else {
          if (result[0].Password !== pwd) { alert("Password is invalid!") }
          else {
            document.getElementById('user-signin-btns').classList.remove('active-user');
            document.getElementById('sign-in-btn1').classList.add('inactivate-signin');
            document.getElementById('sign-in-btn2').classList.add('inactivate-signin');
            document.getElementById('Services_Nav').classList.remove('active-user');
            document.getElementById('Dev_Hub_Nav').classList.remove('active-user');
            document.getElementById('Comm_Hub_Nav').classList.remove('active-user');
            document.getElementById('services').classList.remove('active-user');
            document.getElementById('devices').classList.remove('active-user');
            document.getElementById('tickets').classList.remove('active-user');
            document.getElementById('Sign_Out').classList.remove('active-user');
          }
        };
      }
    }
  }
  getdata(url);
}

function vendorSignin() {
  const url = "https://amitesh-mern.github.io/Whosville_Hackathon_App/Vendor_Signup.json";
  async function getdata(url) {
    let resp = await fetch(url);
    let data = await resp.json();

    const vid = document.getElementById("Vendor_ID").value;
    const uid = document.getElementById("Vendor_User").value;
    const pwd = document.getElementById("Vendor_Password").value;

    if (vid === "") { alert("Vendor ID is required!") }
    else {
      if (uid === "") { alert("User ID is required!") }
      else {
        if (pwd === "") { alert("Password is required!") }
        else {
          const result = data.Vendors.filter(obj => {
            //return data.Users.ID === 'User1';
            return ((obj.ID === uid) && (obj.VendorID === vid));
          })

          if (result.length === 0) { alert("Vendor/User ID is invalid!") }
          else {
            if (result[0].Password !== pwd) { alert("Password is invalid!") }
            else {
              document.getElementById('vendor-signin-btns').classList.remove('active-vendor');
              document.getElementById('sign-in-btn1').classList.add('inactivate-signin');
              document.getElementById('sign-in-btn2').classList.add('inactivate-signin');
              document.getElementById('API_Nav').classList.remove('active-user');
              document.getElementById('V_devices_Nav').classList.remove('active-user');
              document.getElementById('V_Services_Nav').classList.remove('active-user');
              document.getElementById('API').classList.remove('active-user');
              document.getElementById('V_Devices').classList.remove('active-user');
              document.getElementById('V_Services').classList.remove('active-user');              
              document.getElementById('Sign_Out').classList.remove('active-user');
            }
          };
        }
      }
    }
  }
  getdata(url);

}

function SignOut() {
  location.reload();
}

function Remove_1(){
  let res = confirm("Clicking OK will delete the device and all its history. Are you sure you want to delete this device?")
  if(res) {document.getElementById('Device_1').classList.add('inactivate-signin');}
}

function Remove_2(){
  let res = confirm("Clicking OK will delete the device and all its history. Are you sure you want to delete this device?")
  if(res) {document.getElementById('Device_2').classList.add('inactivate-signin');}
}

function Remove_3(){
  let res = confirm("Clicking OK will delete the device and all its history. Are you sure you want to delete this device?")
  if(res) {document.getElementById('Device_3').classList.add('inactivate-signin');}
}

function Remove_4(){
  let res = confirm("Clicking OK will delete the device and all its history. Are you sure you want to delete this device?")
  if(res) {document.getElementById('Device_4').classList.add('inactivate-signin');}
}

function Remove_T1(){
  let res = confirm("Clicking OK will close this ticket. Are you sure you want to proceed?")
  if(res) {document.getElementById('Ticket_1').classList.add('inactivate-signin');}
}

function Remove_T2(){
  let res = confirm("Clicking OK will close this ticket. Are you sure you want to proceed?")
  if(res) {document.getElementById('Ticket_2').classList.add('inactivate-signin');}
}

function Remove_T3(){
  let res = confirm("Clicking OK will close this ticket. Are you sure you want to proceed?")
  if(res) {document.getElementById('Ticket_3').classList.add('inactivate-signin');}
}

function Remove_T4(){
  let res = confirm("Clicking OK will close this ticket. Are you sure you want to proceed?")
  if(res) {document.getElementById('Ticket_4').classList.add('inactivate-signin');}
}

function Toggle_API_1(){
  if (document.getElementById('API_Btn_1').innerText === 'Mark Inactive'){
  document.getElementById('API_Btn_1').innerText = 'Mark Active';
  document.getElementById('API_Status_1').innerText = 'Status : Inactive';
  }
  else {document.getElementById('API_Btn_1').innerText = 'Mark Inactive';
  document.getElementById('API_Status_1').innerText = 'Status : Active';}
}

function Toggle_API_2(){
  if (document.getElementById('API_Btn_2').innerText === 'Mark Inactive'){
  document.getElementById('API_Btn_2').innerText = 'Mark Active';
  document.getElementById('API_Status_2').innerText = 'Status : Inactive';
  }
  else {document.getElementById('API_Btn_2').innerText = 'Mark Inactive';
  document.getElementById('API_Status_2').innerText = 'Status : Active';}
}

function Toggle_API_3(){
  if (document.getElementById('API_Btn_3').innerText === 'Mark Inactive'){
  document.getElementById('API_Btn_3').innerText = 'Mark Active';
  document.getElementById('API_Status_3').innerText = 'Status : Inactive';
  }
  else {document.getElementById('API_Btn_3').innerText = 'Mark Inactive';
  document.getElementById('API_Status_3').innerText = 'Status : Active';}
}

function Toggle_API_4(){
  if (document.getElementById('API_Btn_4').innerText === 'Mark Inactive'){
  document.getElementById('API_Btn_4').innerText = 'Mark Active';
  document.getElementById('API_Status_4').innerText = 'Status : Inactive';
  }
  else {document.getElementById('API_Btn_4').innerText = 'Mark Inactive';
  document.getElementById('API_Status_4').innerText = 'Status : Active';}
}

function Remove_API_1(){
  let res = confirm("Clicking OK will remove this API. Are you sure you want to proceed?")
  if(res) {document.getElementById('API_1').classList.add('inactivate-signin');}
}

function Remove_API_2(){
  let res = confirm("Clicking OK will remove this API. Are you sure you want to proceed?")
  if(res) {document.getElementById('API_2').classList.add('inactivate-signin');}
}

function Remove_API_3(){
  let res = confirm("Clicking OK will remove this API. Are you sure you want to proceed?")
  if(res) {document.getElementById('API_3').classList.add('inactivate-signin');}
}

function Remove_API_4(){
  let res = confirm("Clicking OK will remove this API. Are you sure you want to proceed?")
  if(res) {document.getElementById('API_4').classList.add('inactivate-signin');}
}

function Close_VT_1(){
  document.getElementById('VT_res_btn_1').classList.add('inactivate-signin');
  document.getElementById('VT_Status_1').innerText = 'Status : Pending User Payment / Closure';
}

function Close_VT_2(){
  document.getElementById('VT_res_btn_2').classList.add('inactivate-signin');
  document.getElementById('VT_Status_2').innerText = 'Status : Pending User Payment / Closure';
}

function Close_VT_3(){
  document.getElementById('VT_res_btn_3').classList.add('inactivate-signin');
  document.getElementById('VT_Status_3').innerText = 'Status : Pending User Payment / Closure';
}

function Close_VT_4(){
  document.getElementById('VT_res_btn_4').classList.add('inactivate-signin');
  document.getElementById('VT_Status_4').innerText = 'Status : Pending User Payment / Closure';
}