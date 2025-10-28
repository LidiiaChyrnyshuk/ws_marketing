
  const translations = {
		EN: {
			bonus: "+ 100 Free spins",
			btnRegistration: "JOIN NOW",
			modalBonus: "+ 100 Free spins",
			labelEmail: "Email*",
			placeholderEmail: "Email",
			labelPassword: "Password*",
			placeholderPassword: "Password",
			checkbox:
				"By ticking this box to register for this website, the user declares to be over 18 years old and to have read, understood and accepted",
			terms: "the Terms and Conditions",
			modalBtn: "Create an account",
			quantityCharacter: "Contain at least 6 characters",
			uppercaseCharacter: "Include at least 1 uppercase letter",
			numberCharacter: "Include at least 1 number",
			emailError: "Incorrect email format",
		},
		HU: {
			bonus: "+ 100 ingyenes pörgetés",
			btnRegistration: "Csatlakozz most",
			modalBonus: "+ 100 ingyenes pörgetés",
			labelEmail: "Email*",
			placeholderEmail: "Email",
			labelPassword: "Jelszó*",
			placeholderPassword: "Jelszó",
			checkbox:
				"A jelölőnégyzet kipipálásával a felhasználó kijelenti, hogy elmúlt 18 éves, és elolvasta, megértette és elfogadta",
			terms: "a Felhasználási feltételeket",
			modalBtn: "Fiók létrehozása",
			quantityCharacter: "En az 6 karakter",
			uppercaseCharacter: "En az 1 büyük harf",
			numberCharacter: "En az 1 rakam",
			emailError: "Hibás email formátum",
		},
		PT: {
			bonus: "+ 100 rodadas grátis",
			btnRegistration: "Juntar‑te agora",
			modalBonus: "+ 100 rodadas grátis",
			labelEmail: "Email*",
			placeholderEmail: "Email",
			labelPassword: "Senha*",
			placeholderPassword: "Senha",
			checkbox:
				"Ao marcar esta caixa para se registar neste site, o utilizador declara ser maior de 18 anos e ter lido, compreendido e aceite",
			terms: "os Termos e Condições",
			modalBtn: "Criar uma conta",
			quantityCharacter: "Conter pelo menos 6 caracteres",
			uppercaseCharacter: "Incluir pelo menos 1 letra maiúscula",
			numberCharacter: "Incluir pelo menos 1 número",
			emailError: "Formato de email incorreto",
		},
		RU: {
			bonus: "+ 100 ФРИСПИНОВ",
			btnRegistration: "Забрать сейчас",
			modalBonus: "+ 100 ФРИСПИНОВ",
			labelEmail: "Email*",
			placeholderEmail: "Email",
			labelPassword: "Пароль*",
			placeholderPassword: "Пароль",
			checkbox:
				"Ставя галочку в этом поле для регистрации на сайте, пользователь подтверждает, что ему больше 18 лет, и что он прочитал, понял и принял",
			terms: "Условия и положения",
			modalBtn: "Cоздать аккаунт",
			quantityCharacter: "Не менее 6 символов",
			uppercaseCharacter: "Как минимум 1 заглавную букву",
			numberCharacter: "Как минимум 1 цифру",
			emailError: "Неверный формат email",
		},
		CZ: {
			bonus: "+ 100 freespinů",
			btnRegistration: "Připojte se teď",
			modalBonus: "+ 100 freespinů",
			labelEmail: "Email*",
			placeholderEmail: "Email",
			labelPassword: "Heslo*",
			placeholderPassword: "Heslo",
			checkbox:
				"Zaškrtnutím tohoto políčka pro registraci na webu uživatel potvrzuje, že je mu více než 18 let, a že si přečetl, pochopil a přijal",
			terms: "Podmínky použití",
			modalBtn: "Vytvořit účet",
			quantityCharacter: "Mít alespoň 6 znaků",
			uppercaseCharacter: "Obsahovat alespoň 1 velké písmeno",
			numberCharacter: "Obsahovat alespoň 1 číslici",
			emailError: "Nesprávný formát e-mailu",
		},
		CA: {
			bonus: "+ 100 Free spins",
			btnRegistration: "JOIN NOW",
			modalBonus: "+ 100 Free spins",
			labelEmail: "Email*",
			placeholderEmail: "Email",
			labelPassword: "Password*",
			placeholderPassword: "Password",
			checkbox:
				"By ticking this box to register for this website, the user declares to be over 18 years old and to have read, understood and accepted",
			terms: "the Terms and Conditions",
			modalBtn: "Create an account",
			quantityCharacter: "Contain at least 6 characters",
			uppercaseCharacter: "Include at least 1 uppercase letter",
			numberCharacter: "Include at least 1 number",
			emailError: "Incorrect email format",
		},
		TR: {
			bonus: "+ 100 Ücretsiz Döndürme",
			btnRegistration: "Şimdi katıl",
			modalBonus: "+ 100 Ücretsiz Döndürme",
			labelEmail: "E-posta*",
			placeholderEmail: "E-posta",
			labelPassword: "Şifre*",
			placeholderPassword: "Şifre",
			checkbox:
				"Bu kutuyu işaretleyerek, kullanıcı 18 yaşından büyük olduğunu ve şartları okuyup anladığını kabul eder",
			terms: "the Terms and Conditions",
			modalBtn: "Hesap oluştur",
			quantityCharacter: "En az 6 karakter içermelidir",
			uppercaseCharacter: "En az 1 büyük harf ekleyin",
			numberCharacter: "En az 1 rakam ekleyin",
			emailError: "Yanlış e-posta biçimi",
		},
	};

  const btn = document.getElementById("lang-btn");
	const dropdown = document.getElementById("lang-dropdown");
	const currentLang = document.getElementById("current-lang");

	const fallbackLang = "EN";

	const applyLanguage = (lang) => {
		if (!translations[lang]) return;

		document.body.className = `lang-${lang}`;
		// Переклад текстового контенту
		document.querySelectorAll("[data-translate]").forEach((el) => {
			const key = el.dataset.translate;
			const fallbackLang = "EN";
			const translation =
				translations[lang][key] ?? translations[fallbackLang][key];

			if (translation !== undefined) {
				el.textContent = translation;
			}
		});
		// Переклад плейсхолдерів
		document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
			const key = el.dataset.translatePlaceholder;
			const translation =
				translations[lang][key] ?? translations[fallbackLang][key];
			if (translation !== undefined) {
				el.placeholder = translation;
			}
		});

		currentLang.textContent = lang;
		localStorage.setItem("selectedLang", lang);

		// Активна мова — підсвітка
		document.querySelectorAll("#lang-dropdown li").forEach((li) => {
			if (li.dataset.lang === lang) {
				li.classList.add("active");
			} else {
				li.classList.remove("active");
			}
		});
	};

	// Відкриття / закриття списку мов
	btn.addEventListener("click", () => {
		dropdown.classList.toggle("hidden");
		btn.classList.toggle("open");
	});

	// Обробка кліку по мові
	dropdown.querySelectorAll("li").forEach((item) => {
		item.addEventListener("click", () => {
			const lang = item.dataset.lang;
			applyLanguage(lang);
			dropdown.classList.add("hidden");
			btn.classList.remove("open");
		});
	});

	// Закриття випадаючого списку при кліку поза ним
	document.addEventListener("click", (e) => {
		if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
			dropdown.classList.add("hidden");
			btn.classList.remove("open");
		}
	});

	// Завантаження мови при відкритті сторінки
const supportedLanguages = Object.keys(translations);

function getBrowserLanguage() {
	const userLang = navigator.language || navigator.userLanguage;
	const language = userLang.split("-")[0].toUpperCase(); // <== Змінено на upperCase
	if (supportedLanguages.includes(language)) {
		return language;
	}
	return fallbackLang; // EN
}

window.addEventListener("DOMContentLoaded", () => {
	const savedLang = localStorage.getItem("selectedLang");
	const langToApply = savedLang || getBrowserLanguage();
	applyLanguage(langToApply);
});



	