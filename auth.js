// Authentication handling
export class Auth {
    constructor() {
        this.modal = document.getElementById('authModal');
        this.setupEventListeners();
    }

    setupEventListeners() {
        const loginBtn = document.getElementById('loginBtn');
        const closeBtn = document.querySelector('.close');
        const tabBtns = document.querySelectorAll('.tab-btn');
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const forgotPassword = document.querySelector('.forgot-password');

        loginBtn.onclick = () => this.showModal();
        closeBtn.onclick = () => this.hideModal();
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        signupForm.addEventListener('submit', (e) => this.handleSignup(e));
        forgotPassword.addEventListener('click', (e) => this.handleForgotPassword(e));
    }

    showModal() {
        this.modal.style.display = 'block';
    }

    hideModal() {
        this.modal.style.display = 'none';
    }

    switchTab(tab) {
        const loginForm = document.getElementById('loginForm');
        const signupForm = document.getElementById('signupForm');
        const tabBtns = document.querySelectorAll('.tab-btn');

        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        loginForm.style.display = tab === 'login' ? 'block' : 'none';
        signupForm.style.display = tab === 'signup' ? 'block' : 'none';
    }

    handleLogin(e) {
        e.preventDefault();
        // Add login logic here
    }

    handleSignup(e) {
        e.preventDefault();
        // Add signup logic here
    }

    handleForgotPassword(e) {
        e.preventDefault();
        // Add forgot password logic here
    }
}