(function () {
  "use strict";

  const supportedLanguages = ["uk", "sk", "en"];
  const languageNames = {
    uk: "Українська",
    sk: "Slovenčina",
    en: "English"
  };
  const data = window.i18nData;
  const page = document.body.dataset.page || "home";
  let currentLanguage = "uk";
  let pricingMode = "build";

  function getStoredLanguage() {
    try {
      const stored = window.localStorage.getItem("arsenii-leno-language");
      return supportedLanguages.includes(stored) ? stored : null;
    } catch (_error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem("arsenii-leno-language", language);
    } catch (_error) {
      // Language selection still works when storage is blocked.
    }
  }

  function getInitialLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (supportedLanguages.includes(requested)) return requested;
    return getStoredLanguage() || "uk";
  }

  function lookup(path, language = currentLanguage) {
    return path.split(".").reduce((value, key) => {
      if (value === undefined || value === null) return undefined;
      return value[key];
    }, data[language]);
  }

  function createElement(tagName, className, text) {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function replaceChildren(target, children) {
    if (!target) return;
    target.replaceChildren(...children);
  }

  function applyStaticTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = lookup(element.dataset.i18n);
      if (typeof value === "string" || typeof value === "number") {
        if (typeof value === "string" && value.includes("<")) {
          element.innerHTML = String(value);
        } else {
          element.textContent = String(value);
        }
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const value = lookup(element.dataset.i18nPlaceholder);
      if (typeof value === "string") element.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = lookup(element.dataset.i18nAriaLabel);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });
  }

  function updateMetadata() {
    const meta = lookup(`meta.${page}`);
    if (!meta) return;

    document.title = meta.title;
    const selectors = {
      "meta[name='description']": meta.description,
      "meta[property='og:title']": meta.ogTitle,
      "meta[property='og:description']": meta.ogDescription,
      "meta[name='twitter:title']": meta.ogTitle,
      "meta[name='twitter:description']": meta.ogDescription
    };

    Object.entries(selectors).forEach(([selector, content]) => {
      const element = document.querySelector(selector);
      if (element && content) element.setAttribute("content", content);
    });

    const canonical = document.querySelector("link[rel='canonical']");
    const openGraphUrl = document.querySelector("meta[property='og:url']");
    if (canonical) {
      const canonicalUrl = new URL(canonical.dataset.baseUrl || canonical.href);
      if (!canonical.dataset.baseUrl) canonical.dataset.baseUrl = canonical.href;
      if (currentLanguage === "uk") canonicalUrl.searchParams.delete("lang");
      else canonicalUrl.searchParams.set("lang", currentLanguage);
      canonical.href = canonicalUrl.href;
      if (openGraphUrl) openGraphUrl.setAttribute("content", canonicalUrl.href);
    }
  }

  function updateLanguageControls() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      const language = button.dataset.language;
      const active = language === currentLanguage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute("aria-label", languageNames[language]);
      button.setAttribute("title", languageNames[language]);
    });
  }

  function localisedHref(href) {
    if (!href || !/^(?:index|about|projects)\.html(?:[?#]|$)/.test(href)) return href;

    const hashIndex = href.indexOf("#");
    const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
    const withoutHash = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
    const queryIndex = withoutHash.indexOf("?");
    const path = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash;
    const params = new URLSearchParams(queryIndex >= 0 ? withoutHash.slice(queryIndex + 1) : "");

    if (currentLanguage === "uk") params.delete("lang");
    else params.set("lang", currentLanguage);

    const query = params.toString();
    return `${path}${query ? `?${query}` : ""}${hash}`;
  }

  function updateInternalLinks() {
    document.querySelectorAll("a[href]").forEach((anchor) => {
      const original = anchor.dataset.baseHref || anchor.getAttribute("href");
      if (!anchor.dataset.baseHref) anchor.dataset.baseHref = original;
      anchor.setAttribute("href", localisedHref(original));
    });
  }

  function updateUrlLanguage() {
    const url = new URL(window.location.href);
    if (currentLanguage === "uk") url.searchParams.delete("lang");
    else url.searchParams.set("lang", currentLanguage);
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function renderSystem() {
    const flow = document.getElementById("system-flow");
    const metrics = document.getElementById("system-metrics");
    if (!flow || !metrics) return;

    const nodes = lookup("home.system.nodes").map((item, index) => {
      const node = createElement("div", "system-node");
      node.append(
        createElement("span", "system-node__index", String(index + 1).padStart(2, "0"))
      );
      const copy = createElement("div");
      copy.append(createElement("strong", "", item.label), createElement("small", "", item.detail));
      node.append(copy, createElement("span", "system-node__state", item.state));
      return node;
    });

    const metricNodes = lookup("home.system.metrics").map((item) => {
      const metric = createElement("div", "system-metric");
      metric.append(createElement("strong", "", item.value), createElement("span", "", item.label));
      return metric;
    });

    replaceChildren(flow, nodes);
    replaceChildren(metrics, metricNodes);
  }

  function renderPillars() {
    const grid = document.getElementById("pillar-grid");
    if (!grid) return;
    const detailsLabel = lookup("home.pillars.detailsLabel");

    const cards = lookup("home.pillars.items").map((item, index) => {
      const article = createElement("article", "pillar-card");
      const body = createElement("div", "pillar-card__body");
      const top = createElement("div", "pillar-card__top");
      top.append(
        createElement("span", "pillar-card__index", String(index + 1).padStart(2, "0")),
        createElement("span", "pillar-card__metric", item.metric)
      );
      body.append(top, createElement("h3", "", item.title), createElement("p", "", item.body));

      const details = createElement("details");
      details.append(createElement("summary", "", detailsLabel), createElement("p", "", item.detail));
      article.append(body, details);
      return article;
    });

    replaceChildren(grid, cards);
  }

  function renderSimpleList(id, items) {
    const target = document.getElementById(id);
    if (!target) return;
    replaceChildren(target, items.map((item) => createElement("li", "", item)));
  }

  function renderCaseStudy() {
    renderSimpleList("case-before", lookup("home.case.before"));
    renderSimpleList("case-after", lookup("home.case.after"));

    const metrics = document.getElementById("case-metrics");
    if (!metrics) return;
    replaceChildren(metrics, lookup("home.case.metrics").map((item) => {
      const node = createElement("div", "case-metric");
      node.append(createElement("strong", "", item.value), createElement("span", "", item.label));
      return node;
    }));
  }

  function renderPricing() {
    const grid = document.getElementById("pricing-grid");
    if (!grid) return;
    const pricing = lookup("home.pricing");

    const cards = pricing.tiers.map((tier) => {
      const article = createElement("article", `pricing-card${tier.featured ? " pricing-card--featured" : ""}`);
      if (tier.featured) article.append(createElement("span", "pricing-card__badge", pricing.popular));

      article.append(
        createElement("p", "pricing-card__kicker", tier.kicker),
        createElement("h3", "", tier.title),
        createElement("p", "pricing-card__description", tier.description)
      );

      const price = createElement("div", "pricing-card__price");
      price.append(
        document.createTextNode(pricingMode === "growth" ? tier.growthPrice : tier.buildPrice),
        createElement("small", "", pricingMode === "growth" ? pricing.growthCaption : pricing.buildCaption)
      );
      article.append(price);

      const featureList = createElement("ul");
      const features = pricingMode === "growth"
        ? [...tier.features, ...tier.growthFeatures]
        : tier.features;
      featureList.append(...features.map((feature) => createElement("li", "", feature)));
      article.append(featureList);

      const cta = createElement("a", tier.featured ? "button button--primary" : "button button--ghost");
      cta.href = "#contact";
      cta.append(createElement("span", "", tier.cta), createElement("span", "", "↗"));
      cta.lastElementChild.setAttribute("aria-hidden", "true");
      article.append(cta);
      return article;
    });

    replaceChildren(grid, cards);

    document.querySelectorAll("[data-pricing-mode]").forEach((button) => {
      const active = button.dataset.pricingMode === pricingMode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function renderServiceOptions() {
    const select = document.getElementById("service");
    if (!select) return;
    const previousValue = select.value;
    const placeholder = createElement("option", "", lookup("home.contact.selectPlaceholder"));
    placeholder.value = "";
    placeholder.disabled = true;
    placeholder.selected = !previousValue;

    const options = lookup("home.contact.services").map((service) => {
      const option = createElement("option", "", service);
      option.value = service;
      option.selected = service === previousValue;
      return option;
    });
    replaceChildren(select, [placeholder, ...options]);
  }

  function renderProfileFacts() {
    const facts = document.getElementById("profile-facts");
    if (!facts) return;
    replaceChildren(facts, lookup("about.profile.facts").map((item) => {
      const row = createElement("div");
      row.append(createElement("dt", "", item.label), createElement("dd", "", item.value));
      return row;
    }));
  }

  function renderTracks() {
    const grid = document.getElementById("track-grid");
    if (!grid) return;
    replaceChildren(grid, lookup("about.tracks.items").map((item, index) => {
      const card = createElement("article", "track-card");
      card.append(
        createElement("span", "track-card__index", String(index + 1).padStart(2, "0")),
        createElement("p", "track-card__type", item.type),
        createElement("h3", "", item.title),
        createElement("p", "", item.body)
      );
      return card;
    }));
  }

  function renderPrinciples() {
    const grid = document.getElementById("principle-grid");
    if (!grid) return;
    replaceChildren(grid, lookup("about.principles.items").map((item, index) => {
      const card = createElement("article", "principle-card");
      card.append(
        createElement("span", "principle-card__index", String(index + 1).padStart(2, "0")),
        createElement("h3", "", item.title),
        createElement("p", "", item.body)
      );
      return card;
    }));
  }

  function renderProcess() {
    const list = document.getElementById("process-list");
    if (!list) return;
    replaceChildren(list, lookup("about.process.items").map((item, index) => {
      const step = createElement("li", "process-step");
      const copy = createElement("div");
      copy.append(createElement("h3", "", item.title), createElement("p", "", item.body));
      step.append(
        createElement("span", "process-step__number", String(index + 1).padStart(2, "0")),
        copy,
        createElement("span", "process-step__output", item.output)
      );
      return step;
    }));
  }

  function renderSafeguards() {
    const grid = document.getElementById("safeguard-grid");
    if (!grid) return;
    replaceChildren(grid, lookup("about.safeguards.items").map((item, index) => {
      const card = createElement("article", "safeguard-card");
      card.append(
        createElement("span", "safeguard-card__index", String(index + 1).padStart(2, "0")),
        createElement("h3", "", item.title),
        createElement("p", "", item.body)
      );
      return card;
    }));
  }

  function renderProjectIndex() {
    const index = document.getElementById("project-index");
    if (!index) return;
    replaceChildren(index, lookup("projects.projectIndex").map((item, itemIndex) => {
      const node = createElement("div", "project-index__item");
      node.append(
        createElement("strong", "", `${String(itemIndex + 1).padStart(2, "0")} · ${item.title}`),
        createElement("span", "", item.status)
      );
      return node;
    }));
  }

  function renderFlagship() {
    const map = document.getElementById("flagship-map");
    const outcomes = document.getElementById("flagship-outcomes");
    if (map) {
      replaceChildren(map, lookup("projects.flagship.map").map((item) => {
        const node = createElement("div", "architecture-node");
        const copy = createElement("div");
        copy.append(createElement("strong", "", item.title), createElement("span", "", item.detail));
        node.append(
          createElement("span", "architecture-node__icon", item.code),
          copy,
          createElement("span", "architecture-node__state", item.state)
        );
        return node;
      }));
    }

    if (outcomes) {
      replaceChildren(outcomes, lookup("projects.flagship.outcomes").map((item) => {
        const node = createElement("div", "flagship-outcome");
        node.append(createElement("strong", "", item.value), createElement("span", "", item.label));
        return node;
      }));
    }
  }

  function renderProjects() {
    const grid = document.getElementById("project-grid");
    if (!grid) return;
    replaceChildren(grid, lookup("projects.selected.items").map((item, index) => {
      const card = createElement("article", "project-card");
      const top = createElement("div", "project-card__topline");
      top.append(
        createElement("span", "project-card__number", String(index + 2).padStart(2, "0")),
        createElement("span", "project-card__status", item.status)
      );

      const tags = createElement("ul", "tag-list");
      tags.append(...item.tags.map((tag) => createElement("li", "", tag)));

      const link = createElement("a", `project-card__link${item.external ? "" : " project-card__link--muted"}`);
      link.href = item.href;
      if (item.external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      link.append(createElement("span", "", item.linkLabel), createElement("span", "", item.external ? "↗" : "→"));
      link.lastElementChild.setAttribute("aria-hidden", "true");

      card.append(
        top,
        createElement("h3", "", item.title),
        createElement("p", "project-card__summary", item.summary),
        createElement("p", "project-card__role", item.role),
        tags,
        link
      );
      return card;
    }));
  }

  function renderStack() {
    const grid = document.getElementById("stack-grid");
    if (!grid) return;
    replaceChildren(grid, lookup("projects.stack.items").map((item, index) => {
      const card = createElement("article", "stack-card");
      const list = createElement("ul");
      list.append(...item.technologies.map((technology) => createElement("li", "", technology)));
      card.append(
        createElement("span", "stack-card__index", String(index + 1).padStart(2, "0")),
        createElement("h3", "", item.title),
        list
      );
      return card;
    }));
  }

  function renderPageComponents() {
    if (page === "home") {
      renderSystem();
      renderPillars();
      renderCaseStudy();
      renderPricing();
      renderServiceOptions();
    }

    if (page === "about") {
      renderProfileFacts();
      renderTracks();
      renderPrinciples();
      renderProcess();
      renderSafeguards();
    }

    if (page === "projects") {
      renderProjectIndex();
      renderFlagship();
      renderProjects();
      renderStack();
    }
  }

  function setLanguage(language, persist = false) {
    if (!supportedLanguages.includes(language)) return;
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dataset.locale = language;
    if (persist) saveLanguage(language);

    applyStaticTranslations();
    updateMetadata();
    updateLanguageControls();
    renderPageComponents();
    updateInternalLinks();
  }

  function captureCampaignContext() {
    const params = new URLSearchParams(window.location.search);
    const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    return keys.reduce((result, key) => {
      const value = params.get(key);
      if (value) result[key] = value.slice(0, 180);
      return result;
    }, {});
  }

  function bindLeadForm() {
    const form = document.getElementById("lead-form");
    const status = document.getElementById("form-status");
    if (!form || !status) return;
    const campaign = captureCampaignContext();

    form.addEventListener("input", (event) => {
      if (event.target instanceof HTMLElement) event.target.removeAttribute("aria-invalid");
      status.textContent = "";
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (form.elements.website.value) return;
      const invalidFields = Array.from(form.elements).filter((field) => {
        return typeof field.checkValidity === "function" && !field.checkValidity();
      });

      form.querySelectorAll("[aria-invalid='true']").forEach((field) => field.removeAttribute("aria-invalid"));

      if (invalidFields.length) {
        invalidFields.forEach((field) => field.setAttribute("aria-invalid", "true"));
        status.textContent = lookup("home.contact.requiredError");
        invalidFields[0].focus();
        return;
      }

      const formData = new FormData(form);
      const campaignText = Object.entries(campaign)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");
      const message = [
        "New portfolio enquiry",
        "",
        `Name: ${String(formData.get("name")).trim()}`,
        `Company: ${String(formData.get("company") || "—").trim() || "—"}`,
        `Contact: ${String(formData.get("contact")).trim()}`,
        `Service: ${String(formData.get("service")).trim()}`,
        `Language: ${currentLanguage}`,
        "",
        "Context:",
        String(formData.get("message")).trim(),
        campaignText ? `\nCampaign context:\n${campaignText}` : "",
        `\nPage: ${window.location.href}`
      ].filter(Boolean).join("\n");

      const encodedMsg = encodeURIComponent(message);
      let targetUrl = "";

      if (currentLanguage === "uk") {
        targetUrl = `https://t.me/Arsen_Kozaque?text=${encodedMsg}`;
      } else {
        targetUrl = `https://wa.me/380997063003?text=${encodedMsg}`;
      }

      status.textContent = lookup("home.contact.openingStatus");
      const opened = window.open(targetUrl, "_blank");
      if (opened) {
        opened.opener = null;
      } else {
        status.textContent = lookup("home.contact.fallbackStatus");
        window.location.href = targetUrl;
      }
    });
  }

  function bindControls() {
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.language, true);
        updateUrlLanguage();
      });
    });

    document.querySelectorAll("[data-pricing-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        pricingMode = button.dataset.pricingMode;
        renderPricing();
      });
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  currentLanguage = getInitialLanguage();
  setLanguage(currentLanguage);
  bindControls();
  bindLeadForm();

  function triggerPrivacyHighlight() {
    const target = document.getElementById("privacy");
    if (!target) return;
    target.open = true;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // Перехоплення кліку на посилання "Приватність"
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("a[href*=\"#privacy\"], [data-action=\"privacy\"]");
    if (!trigger) return;
    event.preventDefault();
    triggerPrivacyHighlight();
  });

  // Авто-спрацьовування, якщо сторінка відкрита напряму з #privacy у URL
  if (window.location.hash === "#privacy") {
    setTimeout(triggerPrivacyHighlight, 250);
  }

  bindPrivacyTrigger();
  initLiveClock();
})();


  function initLiveClock() {
    const clockEl = document.getElementById("live-time");
    if (!clockEl) return;
    const tick = () => {
      try {
        const time = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Bratislava",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(new Date());
        clockEl.textContent = `${time} CET`;
      } catch (e) {
        clockEl.textContent = "CET";
      }
    };
    tick();
    setInterval(tick, 1000);
  }
  initLiveClock();