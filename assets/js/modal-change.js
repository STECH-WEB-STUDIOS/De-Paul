document.addEventListener('DOMContentLoaded', function() 
{
    function updateModalContent() 
    {
        var leftContent = document.getElementById('loginModalLeftContent');
        var rightContent = document.getElementById('loginModalRightContent');
  
        if (!leftContent || !rightContent) {
          console.error('Modal content elements not found');
          return;
        }
  
        leftContent.innerHTML = `
          <img src="assets/img/logo.png" alt="Logo" class="mb-3" style="width: 80px;">
          <h5 class="text-center">Forgot Password</h5>
          <p>If you have forgotten your password, we can send a verification code on your mobile number to reset it.</p>
        `;
  
        rightContent.innerHTML = `
          <form id="forgotForm">
            <div class="mb-3">
              <label for="forgotMobileNumber" class="form-label">Mobile Number</label>
              <input type="text" class="form-control" id="forgotMobileNumber" placeholder="Mobile Number" required>
            </div>
            <button type="submit" class="btn btn-block btn-me btn-me-small mb-3" id="sendOtpBtn">Send OTP</button>
            <p class="mt-3 text-center"><a href="#" id="backToLogin" class="text-decoration-none">Back to Login</a></p>
          </form>
        `;
  
        document.getElementById('backToLogin').addEventListener('click', function(event) {
          event.preventDefault();
          revertToLoginContent();
        });
  
        document.getElementById('sendOtpBtn').addEventListener('click', function(event) {
          event.preventDefault();
          showOtpContent();
        });
    }
  
    function revertToLoginContent() 
    {
        var leftContent = document.getElementById('loginModalLeftContent');
        var rightContent = document.getElementById('loginModalRightContent');
  
        if (!leftContent || !rightContent) {
          console.error('Modal content elements not found');
          return;
        }
  
        leftContent.innerHTML = `
          <img src="assets/img/logo.png" alt="Logo" class="mb-3" style="width: 80px;">
          <h5 class="text-center">Log In</h5>
          <p>Get access to your Orders, Wishlist and Recommendations.</p>
        `;
  
        rightContent.innerHTML = `
          <form id="loginForm">
            <div class="mb-3">
              <label for="mobileNumber" class="form-label">Mobile Number</label>
              <input type="text" class="form-control" id="mobileNumber" placeholder="Mobile Number" required>
            </div>
            <div class="mb-3 d-flex justify-content-between align-items-center">
              <label for="password" class="form-label">Password</label>
              <a href="#" id="forgotLink" class="text-decoration-none">Forgot?</a>
            </div>
            <input type="password" class="form-control mb-3" id="password" placeholder="Password" required>
            <button type="submit" class="btn btn-block btn-me btn-me-small mb-3">Log In</button>
          </form>
        `;
  
        document.getElementById('forgotLink').addEventListener('click', function(event) {
          event.preventDefault();
          updateModalContent();
        });
    }
  
    function showOtpContent() 
    {
        var leftContent = document.getElementById('loginModalLeftContent');
        var rightContent = document.getElementById('loginModalRightContent');
  
        if (!leftContent || !rightContent) {
          console.error('Modal content elements not found');
          return;
        }
  
        leftContent.innerHTML = `
          <img src="assets/img/logo.png" alt="Logo" class="mb-3" style="width: 80px;">
          <h5 class="text-center">Verify OTP</h5>
          <p>Please enter the OTP sent to your mobile number to verify your identity.</p>
        `;
  
        rightContent.innerHTML = `
          <form id="otpForm1">
            <div class="mb-3">
              <label for="otp" class="form-label">Verify the OTP</label>
              <input type="text" class="form-control" id="otp" placeholder="OTP" required>
            </div>
            <button type="submit" class="btn btn-block btn-me btn-me-small mb-3">Verify</button>
            <p class="mt-3 text-center"><a href="#" id="backToForgot" class="text-decoration-none">Back to Forgot Password</a></p>
          </form>
        `;
  
        document.getElementById('backToForgot').addEventListener('click', function(event) {
          event.preventDefault();
          updateModalContent();
        });
    }
  
    document.getElementById('forgotLink')?.addEventListener('click', function(event) {
      event.preventDefault();
      updateModalContent();
    });
  
    document.getElementById('continueBtn')?.addEventListener('click', function(event) {
      event.preventDefault();
      showSignUpOtpContent();
    });
  
    function showSignUpOtpContent() 
    {
        var leftContent = document.getElementById('signUpModalLeftContent');
        var rightContent = document.getElementById('signUpModalRightContent');
    
        if (!leftContent || !rightContent) {
          console.error('Modal content elements not found');
          return;
        }
    
        leftContent.innerHTML = `
          <img src="assets/img/logo.png" alt="Logo" class="mb-3" style="width: 80px;">
          <h5 class="text-center">Verify OTP</h5>
          <p>Please enter the OTP sent to your mobile number to complete your registration.</p>
        `;
    
        rightContent.innerHTML = `
          <form id="otpForm2">
            <div class="mb-3">
              <label for="otp" class="form-label">Enter the OTP</label>
              <input type="text" class="form-control" id="otp" placeholder="OTP" required>
            </div>
            <button type="submit" class="btn btn-block btn-me btn-me-small mb-3">Verify</button>
            <p class="mt-3 text-center"><a href="#" id="backToSignUp" class="text-decoration-none">Back to Sign Up</a></p>
          </form>
        `;
    
        // Reattach the event listener to "Back to Sign Up" link
        document.getElementById('backToSignUp')?.addEventListener('click', function(event) {
          event.preventDefault();
          revertToSignUpContent();
        });
    }
    
    function revertToSignUpContent() 
    {
        var leftContent = document.getElementById('signUpModalLeftContent');
        var rightContent = document.getElementById('signUpModalRightContent');
    
        if (!leftContent || !rightContent) {
          console.error('Modal content elements not found');
          return;
        }
    
        leftContent.innerHTML = `
          <img src="assets/img/logo.png" alt="Logo" class="mb-3" style="width: 80px;">
          <h5 class="text-center">Sign Up</h5>
          <p>We do not share your personal details with anyone.</p>
        `;
    
        rightContent.innerHTML = `
          <form id="signUpForm">
            <div class="mb-3">
              <label for="signUpMobileNumber" class="form-label">Mobile Number</label>
              <input type="text" class="form-control" id="signUpMobileNumber" placeholder="Mobile Number" required>
            </div>
            <button type="submit" class="btn btn-block btn-me btn-me-small mb-3" id="continueBtn">Continue</button>
          </form>
        `;
    
        // Reattach the event listener to "Continue" button
        document.getElementById('continueBtn')?.addEventListener('click', function(event) {
          event.preventDefault();
          showSignUpOtpContent();
        });
    }
    
    // Initial attachment of event listener
    document.getElementById('continueBtn')?.addEventListener('click', function(event) {
      event.preventDefault();
      showSignUpOtpContent();
    });
    
    document.getElementById('forgotLink')?.addEventListener('click', function(event) {
      event.preventDefault();
      updateModalContent();
    });
});
  