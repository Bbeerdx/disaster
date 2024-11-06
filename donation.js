// Donation handling
export class DonationSystem {
    constructor() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const paymentMethod = document.getElementById('paymentMethod');
        const donateBtn = document.querySelector('.donate-btn');

        paymentMethod.addEventListener('change', () => this.togglePaymentForm());
        donateBtn.addEventListener('click', () => this.processDonation());
    }

    togglePaymentForm() {
        const method = document.getElementById('paymentMethod').value;
        const upiForm = document.getElementById('upiForm');
        const cardForm = document.getElementById('cardForm');

        upiForm.style.display = method === 'upi' ? 'block' : 'none';
        cardForm.style.display = method === 'card' ? 'block' : 'none';
    }

    processDonation() {
        const amount = document.getElementById('amount').value;
        const method = document.getElementById('paymentMethod').value;
        
        // Add donation processing logic here
        console.log(`Processing ${amount} INR donation via ${method}`);
    }
}