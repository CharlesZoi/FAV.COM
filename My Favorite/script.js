function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  function userDropDown() {
    document.getElementById("userDropdown").classList.toggle("userShow");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.userDropbtn')) {
      var userDropdowns = document.getElementsByClassName("userDropdown-content");
      var i;
      for (i = 0; i < userDropdowns.length; i++) {
        var openUserDropdown = userDropdowns[i];
        if (openUserDropdown.classList.contains('userShow')) {
          openUserDropdown.classList.remove('userShow');
        }
      }
    }
  }
  
  modal = document.getElementById('id01'),
  overlay = document.getElementById('overlay'); 
  
  window.addEventListener('DOMContentLoaded', () => {
  
    document.getElementById('id01').style.display = 'block';
    
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            alert('You have been logged out.');
            location.reload();
        });
    }
  });
  
  function closeModal() {
    modal.style.backgroundColor = 'rgba(0,0,0,0)'; 
    document.querySelector('.modal-content').style.opacity = '0'; 
    
    modal.style.display = 'none'; 
    overlay.style.display = 'none'; ;
  }
  
  document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    handleLoginSuccess(); 
  });
  
  function handleLoginSuccess() {
    document.querySelector('.content').classList.remove('hidden');
    closeModal(); 
  }
  
  function showSignUp() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('sign-up-form').style.display = 'block';
  }
  
  function showLogin() {
    document.getElementById('sign-up-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
  }
  
  function signUp() {
    const username = document.getElementById('new-username').value;
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        alert('Sign Up successful! You can now log in.');
        showLogin();
    } else {
        alert('Please fill in all the fields.');
    }
  }
  
  function login() {
    const userInput = document.getElementById('login-username-email').value;
    const password = document.getElementById('login-password').value;
    
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    
    if ((userInput === storedUsername || userInput === storedEmail) && password === storedPassword) {
        alert('Login successful!');
        closeModal();
    } else {
        alert('Invalid credentials.');
    }
  }