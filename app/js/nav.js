fetch("/nav.html")
  .then((res) => res.text())
  .then((text) => {
    const oldElement = document.querySelector("script#replace_with_navbar");
    if (!oldElement || !oldElement.parentNode) {
      return;
    }

    const newElement = document.createElement("div");
    newElement.innerHTML = text;
    oldElement.parentNode.replaceChild(newElement, oldElement);

    initializeNavbar();
  })
  .catch((err) => {
    console.error("Failed to load navbar:", err);
  });

function setSelected(elements, selected) {
  elements.forEach((element) => {
    if (selected) {
      element.classList.add("selected");
    } else {
      element.classList.remove("selected");
    }
  });
}

function highlightPageLinks() {
  const homeLinks = document.querySelectorAll('[data-nav="home"]');
  const publicationsLinks = document.querySelectorAll('[data-nav="publications"]');
  const studentsLinks = document.querySelectorAll('[data-nav="students"]');

  const path = window.location.pathname;
  const isHome = path === "/index.html" || path === "/";
  const isPublications = path === "/publications.html";
  const isStudents = path === "/students.html";

  setSelected(homeLinks, isHome);
  setSelected(publicationsLinks, isPublications);
  setSelected(studentsLinks, isStudents);

  const projectLinkByPath = {
    "/projects/regnet/regnet.html": "#go_regnet",
    "/projects/bansac/bansac.html": "#go_bansac",
    "/projects/ref_line_intersect/line_intersect.html": "#go_reg_int_lines",
  };
  const projectLinkSelector = projectLinkByPath[path];
  if (projectLinkSelector) {
    document.querySelectorAll(projectLinkSelector).forEach((element) => {
      element.classList.add("selected");
    });
  }
}

function setupMenuToggles() {
  const hamburgerMenu = document.querySelector("#hamburguer_button");
  const menuDown = document.querySelector("#hamburguer_menu_link");
  const body = document.querySelector("#body_id");
  const header = document.querySelector("#header_id");
  const headerTopBar = document.querySelector("#id_header_top_bar");
  const hamburgerMenuProjects = document.querySelector("#hamburguer_projects_button");
  const hamburguerProjectsLink = document.querySelector("#hamburguer_projects_link");

  if (
    !hamburgerMenu ||
    !menuDown ||
    !body ||
    !header ||
    !headerTopBar ||
    !hamburgerMenuProjects ||
    !hamburguerProjectsLink
  ) {
    return;
  }

  hamburgerMenu.addEventListener("click", function () {
    if (hamburgerMenu.classList.contains("open")) {
      hamburgerMenu.classList.remove("open");
      menuDown.classList.add("header_menu_links_closed");
      header.classList.remove("header_remove_radius");
      header.classList.remove("header_show_down_menu");
      body.classList.remove("stop_scroll");
      headerTopBar.classList.remove("more_opacity");
    } else {
      hamburgerMenu.classList.add("open");
      menuDown.classList.remove("header_menu_links_closed");
      header.classList.add("header_remove_radius");
      header.classList.add("header_show_down_menu");
      body.classList.add("stop_scroll");
      headerTopBar.classList.add("more_opacity");
    }
  });

  hamburgerMenuProjects.addEventListener("click", function () {
    if (hamburgerMenuProjects.classList.contains("open")) {
      hamburgerMenuProjects.classList.remove("open");
      hamburguerProjectsLink.classList.add("header_projects_links_closed");
      headerTopBar.classList.remove("more_opacity");
    } else {
      hamburgerMenuProjects.classList.add("open");
      hamburguerProjectsLink.classList.remove("header_projects_links_closed");
      headerTopBar.classList.add("more_opacity");
    }
  });
}

function setupProjectStyling() {
  if (!window.project) {
    return;
  }

  const projectsMenu = document.querySelector("#hamburguer_projects_link");
  const projectsSpanButton1 = document.querySelector("#span_hamburguer_projects_button_1");
  const projectsSpanButton2 = document.querySelector("#span_hamburguer_projects_button_2");
  const projectsSpanButton3 = document.querySelector("#span_hamburguer_projects_button_3");
  const spanButton1 = document.querySelector("#span_hamburguer_button_1");
  const spanButton2 = document.querySelector("#span_hamburguer_button_2");
  const spanButton3 = document.querySelector("#span_hamburguer_button_3");
  const headerTopBar = document.querySelector("#id_header_top_bar");
  const menuDown = document.querySelector("#hamburguer_menu_link");
  const logo = document.getElementById("institutional_logo");

  if (!headerTopBar || !menuDown || !projectsMenu) {
    return;
  }

  headerTopBar.classList.add("header_top_bar_project_color");
  menuDown.classList.add("header_projects_links_project_color");
  projectsMenu.classList.add("header_projects_links_project_color");

  [
    projectsSpanButton1,
    projectsSpanButton2,
    projectsSpanButton3,
    spanButton1,
    spanButton2,
    spanButton3,
  ].forEach((span) => {
    if (span) {
      span.classList.add("change_color_span");
    }
  });

  if (logo) {
    if (window.ist) {
      logo.src = "/figures/IST_C_RGB_NEG.png";
    }
    if (window.merl) {
      logo.src = "/figures/logo_merl.png";
    }
  }
}

function initializeNavbar() {
  highlightPageLinks();
  setupMenuToggles();
  setupProjectStyling();
}
