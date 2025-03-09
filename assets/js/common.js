/**Common HTML generator */
const header = document.getElementById("header");
header.innerHTML = `
<h2><a href="index.html">Nguyên Long</a></h2>
<nav class="links">
	<ul>
		<li><a href="about.html" class="header" id="w_about">About-CV</a></li>
		<!-- <li><a href="#" class="header" id="w_blog">Blog</a></li>
		<li><a href="#" class="header" id="w_project">Project</a></li>
		<li><a href="#" class="header" id="w_hobby">Hobby</a></li> 
		<li><a href="#" class="header" id="w_contact">Contact</a></li> -->
	</ul>
</nav>
<nav class="control">
	<ul>
		<li class="darklight">
            <a type="button" data-theme-toggle></a>
		</li>
	</ul>
</nav>
<nav class="main">
	<ul>
		<!-- <li class="search">
			<a class="fa-search" href="#search" id="w_search">Search</a>
			<form id="search" method="get" action="#">
				<input type="text" name="query" id="w_search" placeholder="Search" />
			</form>
		</li> -->
		<li class="menu">
			<a class="fa-bars" href="#menu" id="w_menu">Menu</a>
		</li>
	</ul>
</nav> `
const menu = document.getElementById("menu");
menu.innerHTML = `
    <!-- Search 
    <section>
        <form class="search" method="get" action="#">
            <input type="text" name="query" id="w_search" placeholder="Search" />
        </form>
    </section> -->
    <!-- Links -->
    <section>
        <ul class="links">
            <li>
                <h3>
                    <a href="about.html" class="header" id="w_about">
                        About-CV
                    </a>
                </h3>
            </li>
            <!-- <li>
                <h3>
                    <a href="#" class="header" id="w_blog">
                        Blog
                    </a>
                </h3>
            </li>
            <li>
                <h3>
                    <a href="#" class="header" id="w_project">
                        Project
                    </a>
                </h3>
            </li>
            <li>
                <h3>
                    <a href="#" class="header" id="w_hobby">
                        Hobby
                    </a>
                </h3>
            </li> 
            <li>
                <h3>
                    <a href="#" class="header" id="w_contact">
                        Contact
                    </a>
                </h3>
            </li> -->
        </ul>
    </section>

    <!-- Actions 
    <section>
        <ul class="actions stacked">
            <li><a href="#" class="button large fit">Log In</a></li>
        </ul>
    </section> -->`

const blurb = document.getElementById("blurb");
blurb.innerHTML = `
<h2 id="w_disclaimer">Disclaimer</h2>
<p id="w_disclaimerphrase0">The website is written with truth the whole truth and nothing but the truth (except when it is not). Proceed with your own risk! </p>
<p id="w_disclaimerphrase1">Just kidding, thank you for visiting here. </p>`
const footer = document.getElementById("footer");
footer.innerHTML = `
<ul class="icons">
	<li>
		<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/duc-nguyen-long-doan-6a1345222/" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a>
	</li>
	<li>
		<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/doanducnguyenlong/" class="icon brands fa-facebook"><span class="label">Facebook</span></a>
	</li>
	<li>
		<a target="_blank" rel="noopener noreferrer" href="https://github.com/longdoan189" class="icon brands fa-github"><span class="label">Github</span></a>
	</li>
	<!-- <li><a href="#" class="icon solid fa-envelope"><span class="label">Email</span></a></li> -->
</ul>
<p class="copyright">&copy; doanducnguyenlong.com (${new Date().getFullYear()}); Design: <a href="http://html5up.net">HTML5 UP</a></p>`

/**https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f */
function calculateSettingAsThemeString({ localStorageTheme, sessionStorageTheme, systemSettingDark }) {
    if (sessionStorageTheme !== null) { //firefox not saving localStorage between files
        return sessionStorageTheme;
    }
	if (localStorageTheme !== null) {
	  return localStorageTheme;
	}
	if (systemSettingDark.matches) {
	  return "dark";
	}
	return "light";
  }
  
  /**
  * Utility function to update the button text and aria-label.
  */
  function updateButton({ buttonEl, isDark }) {
	const newCta = isDark ? "☼" : "☾";
	// use an aria-label if you are omitting text on the button
	// and using a sun/moon icon, for example
	buttonEl.setAttribute("aria-label", newCta);
	buttonEl.innerText = newCta;
  }
  function updateThemeOnHtmlEl({ theme }) {
	document.querySelector("html").setAttribute("data-theme", theme);
  }
  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  const sessionStorageTheme = sessionStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, sessionStorageTheme, systemSettingDark });
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
  updateThemeOnHtmlEl({ theme: currentThemeSetting });
  button.addEventListener("click", (event) => {
	const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
	localStorage.setItem("theme", newTheme);
    sessionStorage.setItem("theme", newTheme);
	updateButton({ buttonEl: button, isDark: newTheme === "dark" });
	updateThemeOnHtmlEl({ theme: newTheme });
	currentThemeSetting = newTheme;
  });
