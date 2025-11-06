import { openModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
	function addZero(num, digits = 2) {
		return num.toString().padStart(digits, "0");
	}

	const daysEl = document.getElementById("days");
	const hoursEl = document.getElementById("hours");
	const minutesEl = document.getElementById("minutes");

	const colons = document.querySelectorAll(".colon img");

	const targetDate = new Date(2025, 10, 11, 0, 0, 0);

	function updateTimer() {
		const now = new Date();
		const timeLeft = targetDate - now;

		if (timeLeft <= 0) {
			clearInterval(interval);
			daysEl.textContent = "00";
			hoursEl.textContent = "00";
			minutesEl.textContent = "00";

			// 🔹 Зупиняємо миготіння двокрапок
			colons.forEach((colon) => {
				colon.style.animation = "none"; // вимикаємо CSS-анімацію
				colon.style.opacity = "1"; // ставимо видимі двокрапки
			});

			openModal(); 
			return;
		}

		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);

		daysEl.textContent = addZero(days);
		hoursEl.textContent = addZero(hours);
		minutesEl.textContent = addZero(minutes);
	}

	updateTimer();
	const interval = setInterval(updateTimer, 1000);
});
