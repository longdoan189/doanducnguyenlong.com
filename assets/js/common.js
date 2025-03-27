/**Common HTML generator */
const listofPath = ['/about']
const currentpath = window.location.pathname;
const header = document.getElementById("header");
header.innerHTML = `
<h2 class="name">
    <a href="/">Nguyên Long</a>
</h2>
<nav class="links">
	<ul>
		<li><a href="${listofPath[0]}" class="header ${(listofPath[0]+'/' === currentpath) ? ' bold' : ''}" id="w_about">
            <span class="lang lang-en">About-CV</span>
            <span class="lang lang-vi">Về Long</span>
        </a></li>
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
        <li>
            <select id="langSelector">
                <option value="en">🌎English</option>
                <option value="vi">🌏Tiếng Việt</option>
                <!--<option value="de">🌍Deutsch</option> -->
                <!--<option value="tok">🌍toki pona</option> -->
            </select>
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
                <a href="/" class="header ${('/' === currentpath) ? ' bold' : ''}" id="w_home">
                    <span class="lang lang-en">Home</span>
                    <span class="lang lang-vi">Trang chính</span>
                </a>
                <a href="${listofPath[0]}" class="header ${(listofPath[0]+'/' === currentpath) ? ' bold' : ''}" id="w_about">
                    <span class="lang lang-en">About-CV</span>
                    <span class="lang lang-vi">Về Long</span>
                </a>
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
<p class="copyright">&copy; doanducnguyenlong.com (${new Date().getFullYear()}); <span class="lang lang-en">Design:</span><span class="lang lang-vi">Thiết kế:</span> <a href="http://html5up.net">HTML5 UP</a></p>`

const endpart =  document.getElementById("endpart")
endpart.innerHTML = `
<span class="lang lang-en">End of this part</span>
<span class="lang lang-vi">Hết phần</span>`

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
  //take all 3 sources for current setting
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