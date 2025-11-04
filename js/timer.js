import { openModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
	function addZero(num, digits = 2) {
		return num.toString().padStart(digits, "0");
	}

	const hoursEl = document.getElementById("hours");
	const minutesEl = document.getElementById("minutes");
	const secondsEl = document.getElementById("seconds");

	// === Ключові дати ===
	const startDate = new Date(2025, 10, 11, 0, 0, 0); 
	const endDate = new Date(2025, 10, 11, 23, 59, 59);

	const interval = setInterval(() => {
		const now = new Date();

		if (now < startDate) {
			hoursEl.textContent = "00";
			minutesEl.textContent = "00";
			secondsEl.textContent = "00";
			return;
		}

		if (now >= endDate) {
			clearInterval(interval);
			hoursEl.textContent = "00";
			minutesEl.textContent = "00";
			secondsEl.textContent = "00";
			openModal();
			return;
		}

		const timeLeft = endDate - now;

		const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
		const seconds = Math.floor((timeLeft / 1000) % 60);

		hoursEl.textContent = addZero(hours);
		minutesEl.textContent = addZero(minutes);
		secondsEl.textContent = addZero(seconds);
	}, 1000);
});
