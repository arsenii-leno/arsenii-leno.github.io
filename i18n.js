/* Central content source for every supported language. */
window.i18nData = {
  uk: {
    global: {
      skip: "Перейти до основного вмісту",
      brandTag: "Infrastructure & Growth",
      navLabel: "Основна навігація",
      languageLabel: "Оберіть мову",
      nav: {
        services: "Послуги",
        about: "Про мене",
        projects: "Проєкти",
        consultation: "Консультація"
      },
      footer: {
        tagline: "Цифрова інфраструктура для бізнесу, який рахує результат.",
        location: "Bratislava · Uzhhorod · Remote",
        privacy: "Приватність"
      }
    },
    meta: {
      home: {
        title: "Arsenii Leno — Цифрова інфраструктура та зростання",
        description: "Цифрова інфраструктура для клінік і B2B: швидкі веб-платформи, точна аналітика, Google Ads, автоматизація та прозорі умови передачі.",
        ogTitle: "Arsenii Leno — Digital Infrastructure & Growth Engineering",
        ogDescription: "Швидкі веб-платформи, аналітика, реклама й автоматизація — одна відповідальна система для клінік і B2B."
      },
      about: {
        title: "Про підхід — Arsenii Leno",
        description: "Інженерний, аналітичний і правосвідомий підхід Арсенія Лено до цифрової інфраструктури для клінік і B2B-компаній.",
        ogTitle: "Про підхід — Arsenii Leno",
        ogDescription: "Software engineering, вимірюване зростання та privacy-aware delivery в одній практиці."
      },
      projects: {
        title: "Проєкти та стек — Arsenii Leno",
        description: "Вибрані клієнтські й дослідницькі проєкти Arsenii Leno: медична edge-платформа, market-event analytics, LegalTech RAG-концепт і clinic workflow prototype.",
        ogTitle: "Проєкти та стек — Arsenii Leno",
        ogDescription: "Верифіковані ролі, чесні статуси й технічні рішення — від live-клініки до дослідницьких прототипів."
      }
    },
    home: {
      hero: {
        status: "Відкритий до обмеженої кількості нових проєктів",
        eyebrow: "Для клінік, юридичних фірм і B2B-сервісів",
        title: "Не просто сайт.",
        titleAccent: "Система, що перетворює увагу на заявки.",
        lede: "Об’єдную швидку веб-інженерію, точну аналітику, Google Ads і автоматизацію в одну керовану цифрову інфраструктуру.",
        primaryCta: "Обговорити запуск",
        secondaryCta: "Переглянути систему",
        trustLabel: "Умови співпраці",
        trust: ["Прозорий обсяг робіт", "Передача IP за договором", "30 днів launch-support"]
      },
      system: {
        ariaLabel: "Схема цифрової інфраструктури",
        label: "growth-infrastructure.live",
        live: "LIVE",
        note: "Одна відповідальна система замість розрізнених підрядників.",
        nodes: [
          { label: "Performance web", detail: "Astro · semantic HTML · edge", state: "ready" },
          { label: "Measurement", detail: "GTM · GA4 · conversions", state: "mapped" },
          { label: "Demand", detail: "Search · PMax · bidding", state: "active" },
          { label: "Lead operations", detail: "Workers · Telegram · UTM", state: "routed" }
        ],
        metrics: [
          { value: "3", label: "ринкові контексти" },
          { value: "4", label: "рівні системи" },
          { value: "1", label: "відповідальний контур" }
        ]
      },
      proofLabel: "Спеціалізація",
      proof: ["Performance-first web", "Measurement that informs spend", "Founder-led delivery", "UA · SK · EN"],
      pillars: {
        eyebrow: "Чотири рівні однієї системи",
        title: "Від першого кліку до переданої заявки.",
        intro: "Кожен рівень працює не окремо, а підсилює наступний: швидкість покращує досвід, вимірювання — рішення, автоматизація — реакцію команди.",
        detailsLabel: "Що входить технічно",
        items: [
          {
            metric: "static-first",
            title: "Frontend & Edge",
            body: "Семантичні, адаптивні сторінки з мінімальним JavaScript, швидкою доставкою й контрольованою технічною вагою.",
            detail: "Astro, HTML5, CSS/Tailwind build, Cloudflare Pages або GitHub Pages, DNS, CDN, redirects і CI/CD."
          },
          {
            metric: "serverless ops",
            title: "Automation & Backend",
            body: "Форми, webhooks і маршрутизація лідів без важкого бекенду — з UTM-контекстом і зрозумілою обробкою помилок.",
            detail: "Cloudflare Workers, Telegram Bot API, D1/SQLite/KV, WordPress/PHP maintenance, GitHub Actions."
          },
          {
            metric: "measured",
            title: "Ads & Analytics",
            body: "Реклама оптимізується під вимірювану бізнес-дію, а не під красиві звіти про кліки й охоплення.",
            detail: "Google Ads Search/PMax, Smart Bidding, GTM, GA4, Enhanced Conversions і план offline conversion import."
          },
          {
            metric: "review-ready",
            title: "Ownership & Risk",
            body: "Обсяг, межі підтримки, IP-передача й privacy-рішення фіксуються до запуску, а не після першої суперечки.",
            detail: "Statement of work, критерії приймання, response windows, IP handover і privacy-aware implementation для legal review."
          }
        ]
      },
      case: {
        eyebrow: "Флагманський кейс · med.uz.ua",
        title: "Від legacy WordPress до керованої edge-платформи.",
        intro: "Повний цикл для приватної офтальмологічної клініки: стабілізація успадкованої системи, міграція, мультимовний контент, аналітика та рекламна інфраструктура.",
        visit: "Відкрити live-проєкт",
        comparisonLabel: "Порівняння архітектури до і після",
        beforeLabel: "До",
        beforeTitle: "Крихка legacy-система",
        before: ["Висока вага WordPress", "Фрагментована аналітика", "Ручна обробка маркетингового контексту"],
        afterLabel: "Після",
        afterTitle: "Edge-first інфраструктура",
        after: ["Astro static output", "Cloudflare delivery", "Consent-aware GTM/GA4 і форми"],
        metrics: [
          { value: "4", label: "мовні версії live" },
          { value: "Astro", label: "статичний frontend" },
          { value: "Edge", label: "Cloudflare delivery" }
        ],
        claimNote: "Live-архітектура й мультимовність перевіряються на публічному сайті. Performance-оцінки та рекламні результати варто публікувати лише з датованим звітом і погодженим періодом порівняння."
      },
      pricing: {
        eyebrow: "Інвестиція без туманних кошторисів",
        title: "Оберіть стартову конфігурацію.",
        toggleLabel: "Режим ціноутворення",
        buildToggle: "Разовий запуск",
        growthToggle: "Запуск + супровід",
        popular: "Найчастіший вибір",
        buildCaption: "орієнтир для ринку України · від",
        growthCaption: "запуск + щомісячний мінімум",
        note: "Орієнтири актуальні станом на серпень 2026 року. Фінальна пропозиція залежить від обсягу. Рекламний бюджет, хостинг, платні ліцензії, контент, переклад і податки оплачуються окремо.",
        tiers: [
          {
            kicker: "Чіткий перший реліз",
            title: "Starter Platform",
            description: "Для однієї послуги, спеціаліста або сфокусованого MVP із професійною основою.",
            buildPrice: "₴18 000",
            growthPrice: "₴18 000 + ₴10 000/міс.",
            features: ["Landing або компактний service site", "Адаптивна реалізація й базова доступність", "Технічне SEO та аналітична карта", "Launch-support у погоджених межах"],
            growthFeatures: ["До 3 годин web-support на місяць", "Місячний measurement review"],
            cta: "Уточнити Starter"
          },
          {
            kicker: "Сайт + вимірювання + попит",
            title: "Growth Engine",
            description: "Для клініки або B2B-сервісу, якому потрібен керований шлях від реклами до заявки.",
            buildPrice: "₴35 000",
            growthPrice: "₴35 000 + ₴10 000/міс.",
            features: ["Багатосторінкова conversion-архітектура", "GTM + GA4 + conversion plan", "Підготовка Search/PMax запуску", "Cloudflare, форми й UTM-маршрутизація"],
            growthFeatures: ["Один Google Ads account", "Оптимізація, звіт і до 4 годин web-support"],
            cta: "Спроєктувати Growth",
            featured: true
          },
          {
            kicker: "Складна інтегрована система",
            title: "Full Infrastructure",
            description: "Для мультимовних платформ, міграцій і процесів із кастомною автоматизацією.",
            buildPrice: "₴60 000",
            growthPrice: "₴60 000 + ₴15 000/міс.",
            features: ["Custom architecture і міграційний план", "Workers/webhooks та інтеграції", "Розширена measurement-архітектура", "Документація, handover і response windows"],
            growthFeatures: ["Пріоритетна підтримка за узгодженим SLA", "Щомісячний roadmap review"],
            cta: "Обговорити Infrastructure"
          }
        ]
      },
      contact: {
        eyebrow: "Наступний крок",
        title: "Почнімо з задачі, а не з технології.",
        intro: "Опишіть бізнес, ціль і головне вузьке місце. Я повернуся з доречними питаннями та чесною оцінкою формату роботи.",
        stepOneTitle: "Коротка діагностика",
        stepOneBody: "Зіставляємо ціль, дані та поточну інфраструктуру.",
        stepTwoTitle: "Чіткий наступний крок",
        stepTwoBody: "Отримуєте рекомендований обсяг, строки й стартову вартість.",
        nameLabel: "Ім’я",
        namePlaceholder: "Як до вас звертатися?",
        companyLabel: "Компанія",
        companyPlaceholder: "Назва або сфера",
        contactLabel: "Email або Telegram",
        contactPlaceholder: "name@company.com або @username",
        serviceLabel: "Що потрібно запустити?",
        messageLabel: "Контекст задачі",
        messagePlaceholder: "Поточна ситуація, ціль і бажаний строк. Не додавайте дані пацієнтів чи іншу чутливу інформацію.",
        consent: "Погоджуюся передати ці дані Арсенію для відповіді на запит. На цьому сайті дані не зберігаються.",
        submit: "Продовжити в Telegram",
        note: "Відкриється Telegram із готовим повідомленням — ви зможете перевірити його перед відправленням.",
        selectPlaceholder: "Оберіть напрям",
        services: ["Starter Platform", "Growth Engine", "Full Infrastructure", "Технічний аудит", "Google Ads & Measurement", "Інше"],
        requiredError: "Перевірте обов’язкові поля та згоду.",
        openingStatus: "Готово — відкриваю Telegram з чернеткою повідомлення.",
        fallbackStatus: "Не вдалося відкрити нову вкладку. Скористайтеся прямим Telegram-посиланням.",
        privacySummary: "Як обробляється ваш запит",
        privacyController: "Контролер: Arsenii Leno, xlenoa@stuba.sk.",
        privacyPurpose: "Мета й підстава: відповідь на ваш B2B-запит та кроки до можливої співпраці. Листування зберігається лише стільки, скільки потрібно для запиту й обов’язкових бізнес-записів.",
        privacyTelegram: "Сайт не надсилає й не зберігає форму: він створює чернетку, яку ви самі надсилаєте через Telegram. Після відправлення дані також обробляє Telegram за власними умовами.",
        privacyRights: "Щоб отримати, виправити або видалити дані з листування, напишіть на email вище. Не надсилайте дані пацієнтів, медичну чи іншу чутливу інформацію."
      }
    },
    about: {
      hero: {
        eyebrow: "Інженерія з комерційним контекстом",
        title: "Технічна глибина.",
        titleAccent: "Відповідальність за весь шлях.",
        lede: "Я будую цифрові системи на перетині програмної інженерії, вимірюваного маркетингу та правосвідомого delivery — без ілюзії, що один інструмент вирішує бізнес-задачу.",
        cta: "Обговорити задачу",
        secondaryCta: "Переглянути проєкти"
      },
      profile: {
        label: "Профіль практики",
        role: "Digital Infrastructure & Growth Engineer",
        status: "Bratislava · Uzhhorod · Remote",
        facts: [
          { label: "Фокус", value: "Clinics & B2B" },
          { label: "Мови", value: "UK · SK · EN" },
          { label: "Модель", value: "Founder-led" }
        ]
      },
      tracks: {
        eyebrow: "Три дисципліни, одна система мислення",
        title: "Освіта, що змінює спосіб delivery.",
        intro: "Це поточні напрями навчання, а не заяви про ліцензовану юридичну практику. Їхня цінність — у кращих технічних, договірних і комерційних рішеннях.",
        items: [
          { type: "Інженерний трек · студент", title: "FIIT STU Bratislava", body: "Software Engineering: алгоритми, архітектура застосунків, асинхронні системи й performance-мислення." },
          { type: "Правовий трек · студент", title: "UzhNU Faculty of Law", body: "IT та contract law, інтелектуальна власність і privacy-ризики як контекст для технічного delivery." },
          { type: "Додатковий бізнес-трек", title: "Economics & International Relations", body: "Економіка та міжнародні відносини допомагають оцінювати unit economics, ринки й комерційні обмеження." }
        ]
      },
      principles: {
        eyebrow: "Робоча філософія",
        title: "Три принципи, що переживають зміну стеку.",
        items: [
          { title: "Performance before decoration", body: "Спочатку — чіткий content path, семантика й бюджет продуктивності. Анімація має право на існування лише тоді, коли не шкодить задачі." },
          { title: "Decisions from evidence", body: "Події, конверсії й рекламні цілі плануються до запуску. Якщо сигнал не можна надійно виміряти, він не має керувати бюджетом." },
          { title: "One accountable system", body: "Frontend, measurement, acquisition і lead routing розглядаються разом. Межі відповідальності та handover фіксуються письмово." }
        ]
      },
      process: {
        eyebrow: "Як виглядає робота",
        title: "Від діагностики до контрольованого запуску.",
        intro: "Кожен етап має рішення, артефакт і критерій завершення. Це знижує ризик нескінченних правок та неочікуваних витрат.",
        items: [
          { title: "Diagnose", body: "Ціль, аудиторія, технічний стан, дані та ризики.", output: "Audit brief" },
          { title: "Architect", body: "Scope, user journey, measurement map і delivery plan.", output: "System map" },
          { title: "Build & validate", body: "Ітеративна реалізація, accessibility, performance і edge cases.", output: "Release candidate" },
          { title: "Launch & hand over", body: "Production launch, документація, transfer і 30-денний support window.", output: "Handover pack" }
        ]
      },
      safeguards: {
        eyebrow: "Стандарти співпраці",
        title: "Менше обіцянок. Більше зафіксованих умов.",
        intro: "Формат захисту залежить від юрисдикції та проєкту; для регульованих питань документи мають пройти перевірку кваліфікованого юриста.",
        items: [
          { title: "Scope & acceptance", body: "Результати, межі, етапи й критерії приймання фіксуються до початку розробки." },
          { title: "Response windows", body: "Канали зв’язку, пріоритети та строки реакції визначаються в домовленостях, а не в рекламному badge." },
          { title: "IP handover", body: "Передача коду, доступів і майнових прав відбувається в обсязі, який прямо передбачає договір." },
          { title: "Launch support", body: "30 днів мінімальної допомоги після релізу для виправлення погоджених launch issues; розвиток — окремий scope." }
        ],
        noteTitle: "Важливо:",
        note: "юридична освіта допомагає виявляти ризики й готувати матеріали до review, але не замінює адвоката чи ліцензовану правову консультацію."
      },
      cta: {
        eyebrow: "Потрібен один відповідальний контур?",
        title: "Зберімо інженерію, дані й зростання в одну дорожню карту.",
        button: "Почати з діагностики"
      }
    },
    projects: {
      hero: {
        eyebrow: "Реальна робота й дослідницькі системи",
        title: "Проєкти з контекстом.",
        titleAccent: "Не галерея технологій.",
        lede: "Для кожного проєкту вказано фактичний статус, мою роль і межі доказової бази — щоб live-клієнтська робота не змішувалася з research-прототипами."
      },
      projectIndex: [
        { title: "med.uz.ua", status: "Live client platform" },
        { title: "gram-event-quant", status: "Active research prototype" },
        { title: "DIkastes.ai", status: "Research concept" },
        { title: "Clinic-App", status: "Functional prototype" }
      ],
      flagship: {
        status: "Live client platform",
        eyebrow: "Флагманський кейс · 01",
        visit: "Відкрити сайт",
        challengeTitle: "Задача",
        challenge: "Замінити успадковану WordPress-систему на легшу архітектуру та побудувати зрозумілий шлях від пошуку послуги до звернення в клініку.",
        roleTitle: "Моя роль",
        role: "Інформаційна архітектура, Astro-реалізація, edge-доставка, мультимовність, privacy-aware аналітика та рекламна інфраструктура.",
        mapLabel: "Архітектура проєкту",
        map: [
          { code: "FE", title: "Localized Astro frontend", detail: "Static-first pages · responsive UI", state: "live" },
          { code: "ED", title: "Cloudflare edge delivery", detail: "Caching · redirects · DNS", state: "live" },
          { code: "MX", title: "Consent-aware measurement", detail: "GTM · GA4 · conversion map", state: "wired" },
          { code: "OP", title: "Lead operations", detail: "Contact flows · appointment paths", state: "active" }
        ],
        outcomes: [
          { value: "4 languages", label: "UK · SK · EN · HU" },
          { value: "Astro 5", label: "public live frontend" },
          { value: "Cloudflare", label: "edge delivery" },
          { value: "2026", label: "live release" }
        ],
        claimNote: "Live-статус і технології перевіряються за публічним сайтом. Рекламні результати не публікуються без узгоджених чисел і періоду порівняння."
      },
      selected: {
        eyebrow: "Вибрані системи",
        title: "Від market data до LegalTech.",
        intro: "Research і prototype-проєкти навмисно позначені як такі. Вони демонструють спосіб мислення, а не видаються за production-кейси.",
        items: [
          {
            status: "Active research prototype",
            title: "gram-event-quant",
            summary: "Асинхронний event-study pipeline для аналізу реакції GRAM/TON ринку на події з REST OHLCV-даними й Telegram event inputs.",
            role: "Research architecture, data pipeline and statistical workflow.",
            tags: ["Python ≥3.13", "Async I/O", "REST OHLCV", "Event study"],
            href: "https://github.com/arsenii-leno/gram-event-quant",
            linkLabel: "Переглянути public repository",
            external: true
          },
          {
            status: "Research concept",
            title: "DIkastes.ai",
            summary: "Документована архітектурна концепція legal-research assistant із retrieval, citation grounding і порівняльним аналізом юрисдикцій.",
            role: "README-stage concept; не представлено як готовий AI-продукт.",
            tags: ["RAG concept", "Legal research", "Vector retrieval", "Architecture"],
            href: "https://github.com/arsenii-leno/DIkastes.ai",
            linkLabel: "Переглянути research concept",
            external: true
          },
          {
            status: "Functional prototype",
            title: "Clinic-App",
            summary: "Expo/React Native prototype для appointment workflow, patient records і local-first clinical operations.",
            role: "Prototype case; матеріали надаються напряму після source-hygiene review.",
            tags: ["Expo", "React Native", "TypeScript", "Local-first"],
            href: "mailto:xlenoa@stuba.sk?subject=Clinic-App%20case",
            linkLabel: "Запросити case note",
            external: false
          }
        ]
      },
      credential: {
        eyebrow: "Перевірювана кваліфікація",
        title: "AI-Powered Performance Ads Certification",
        body: "Кваліфікація Google Skillshop з AI-powered кампаній, Smart Bidding, Performance Max і вимірювання результативності.",
        issuerLabel: "Issuer",
        idLabel: "Credential ID",
        verify: "Перевірити credential"
      },
      stack: {
        eyebrow: "Capability matrix",
        title: "Стек підбирається під вузьке місце.",
        intro: "Технологія — не офер. Вона має спрощувати delivery, вимірювання й подальше володіння системою.",
        items: [
          { title: "Frontend & Performance", technologies: ["Astro · HTML5 · CSS", "TypeScript · React", "Accessibility · CWV", "Responsive delivery"] },
          { title: "Edge & Automation", technologies: ["Cloudflare Workers", "D1 · SQLite · KV", "Telegram Bot API", "GitHub Actions"] },
          { title: "Ads & Measurement", technologies: ["Google Ads · PMax", "GTM · GA4", "Enhanced Conversions", "Offline conversion plan"] },
          { title: "Legacy & Governance", technologies: ["WordPress · PHP", "DNS · cPanel · Fornex", "Scope · acceptance", "IP/privacy review prep"] }
        ]
      },
      cta: {
        eyebrow: "Є задача зі схожою складністю?",
        title: "Покажіть поточну систему — я знайду точку найбільшого впливу.",
        button: "Запросити діагностику"
      }
    }
  },

  sk: {
    global: {
      skip: "Preskočiť na hlavný obsah",
      brandTag: "Infrastructure & Growth",
      navLabel: "Hlavná navigácia",
      languageLabel: "Vybrať jazyk",
      nav: { services: "Služby", about: "O mne", projects: "Projekty", consultation: "Konzultácia" },
      footer: { tagline: "Digitálna infraštruktúra pre firmy, ktoré merajú výsledky.", location: "Bratislava · Užhorod · Remote", privacy: "Súkromie" }
    },
    meta: {
      home: {
        title: "Arsenii Leno — Digitálna infraštruktúra a rast",
        description: "Digitálna infraštruktúra pre ambulancie a B2B: rýchle weby, presná analytika, Google Ads, automatizácia a jasný handover.",
        ogTitle: "Arsenii Leno — Digital Infrastructure & Growth Engineering",
        ogDescription: "Rýchle webové platformy, analytika, reklama a automatizácia v jednom zodpovednom systéme."
      },
      about: {
        title: "O prístupe — Arsenii Leno",
        description: "Inžiniersky, analytický a právne uvedomelý prístup Arseniiho Lena k digitálnej infraštruktúre pre ambulancie a B2B.",
        ogTitle: "O prístupe — Arsenii Leno",
        ogDescription: "Softvérové inžinierstvo, merateľný rast a privacy-aware delivery v jednej praxi."
      },
      projects: {
        title: "Projekty a technologický stack — Arsenii Leno",
        description: "Vybrané klientské a výskumné projekty: zdravotnícka edge platforma, market-event analytika, LegalTech RAG koncept a clinic workflow prototyp.",
        ogTitle: "Projekty a stack — Arsenii Leno",
        ogDescription: "Overiteľné roly, úprimné statusy a technické riešenia — od živej kliniky po výskumné prototypy."
      }
    },
    home: {
      hero: {
        status: "Otvorený pre obmedzený počet nových projektov",
        eyebrow: "Pre ambulancie, právnické firmy a B2B služby",
        title: "Nie iba web.",
        titleAccent: "Systém, ktorý mení pozornosť na dopyty.",
        lede: "Spájam rýchle webové inžinierstvo, presnú analytiku, Google Ads a automatizáciu do jednej riadenej digitálnej infraštruktúry.",
        primaryCta: "Prediskutovať spustenie",
        secondaryCta: "Pozrieť systém",
        trustLabel: "Podmienky spolupráce",
        trust: ["Transparentný rozsah", "Prevod IP podľa zmluvy", "30 dní launch-support"]
      },
      system: {
        ariaLabel: "Schéma digitálnej infraštruktúry",
        label: "growth-infrastructure.live",
        live: "LIVE",
        note: "Jeden zodpovedný systém namiesto roztrieštených dodávateľov.",
        nodes: [
          { label: "Performance web", detail: "Astro · semantic HTML · edge", state: "ready" },
          { label: "Measurement", detail: "GTM · GA4 · conversions", state: "mapped" },
          { label: "Demand", detail: "Search · PMax · bidding", state: "active" },
          { label: "Lead operations", detail: "Workers · Telegram · UTM", state: "routed" }
        ],
        metrics: [
          { value: "3", label: "trhové kontexty" },
          { value: "4", label: "vrstvy systému" },
          { value: "1", label: "zodpovedný partner" }
        ]
      },
      proofLabel: "Špecializácia",
      proof: ["Performance-first web", "Measurement that informs spend", "Founder-led delivery", "UK · SK · EN"],
      pillars: {
        eyebrow: "Štyri vrstvy jedného systému",
        title: "Od prvého kliknutia po odovzdaný lead.",
        intro: "Každá vrstva podporuje ďalšiu: rýchlosť zlepšuje skúsenosť, meranie rozhodovanie a automatizácia reakciu tímu.",
        detailsLabel: "Technické detaily",
        items: [
          { metric: "static-first", title: "Frontend & Edge", body: "Sémantické a responzívne stránky s minimom JavaScriptu, rýchlym doručením a kontrolovanou technickou váhou.", detail: "Astro, HTML5, CSS/Tailwind build, Cloudflare Pages alebo GitHub Pages, DNS, CDN, redirects a CI/CD." },
          { metric: "serverless ops", title: "Automation & Backend", body: "Formuláre, webhooks a routing leadov bez ťažkého backendu — s UTM kontextom a zrozumiteľným spracovaním chýb.", detail: "Cloudflare Workers, Telegram Bot API, D1/SQLite/KV, WordPress/PHP maintenance a GitHub Actions." },
          { metric: "measured", title: "Ads & Analytics", body: "Reklama sa optimalizuje na merateľnú obchodnú akciu, nie na pekné reporty o kliknutiach a dosahu.", detail: "Google Ads Search/PMax, Smart Bidding, GTM, GA4, Enhanced Conversions a plán offline conversion importu." },
          { metric: "review-ready", title: "Ownership & Risk", body: "Rozsah, hranice podpory, prevod IP a privacy rozhodnutia sa určujú pred spustením, nie po prvom spore.", detail: "Statement of work, acceptance criteria, response windows, IP handover a privacy-aware implementácia na právnu kontrolu." }
        ]
      },
      case: {
        eyebrow: "Hlavná prípadová štúdia · med.uz.ua",
        title: "Od legacy WordPressu k riadenej edge platforme.",
        intro: "Kompletný cyklus pre súkromnú očnú kliniku: stabilizácia zdedeného systému, migrácia, viacjazyčný obsah, analytika a reklamná infraštruktúra.",
        visit: "Otvoriť live projekt",
        comparisonLabel: "Porovnanie architektúry pred a po",
        beforeLabel: "Pred",
        beforeTitle: "Krehký legacy systém",
        before: ["Ťažký WordPress", "Fragmentovaná analytika", "Manuálne spracovanie marketingového kontextu"],
        afterLabel: "Po",
        afterTitle: "Edge-first infraštruktúra",
        after: ["Astro static output", "Cloudflare delivery", "Consent-aware GTM/GA4 a formuláre"],
        metrics: [
          { value: "4", label: "jazykové verzie live" },
          { value: "Astro", label: "statický frontend" },
          { value: "Edge", label: "Cloudflare delivery" }
        ],
        claimNote: "Live architektúru a viacjazyčnosť možno overiť na verejnom webe. Výkonnostné skóre a reklamné výsledky je vhodné publikovať iba s datovaným reportom a odsúhlaseným obdobím porovnania."
      },
      pricing: {
        eyebrow: "Investícia bez nejasných rozpočtov",
        title: "Vyberte si štartovaciu konfiguráciu.",
        toggleLabel: "Režim cien",
        buildToggle: "Jednorazové spustenie",
        growthToggle: "Spustenie + správa",
        popular: "Najčastejšia voľba",
        buildCaption: "orientačne pre slovenský trh · od",
        growthCaption: "spustenie + mesačné minimum",
        note: "Orientačné ceny platné v auguste 2026. Finálna ponuka závisí od rozsahu. Mediálny rozpočet, hosting, platené licencie, obsah, preklad a dane nie sú zahrnuté.",
        tiers: [
          {
            kicker: "Jasné prvé vydanie", title: "Starter Platform", description: "Pre jednu službu, odborníka alebo sústredené MVP s profesionálnym základom.",
            buildPrice: "€490", growthPrice: "€490 + €390/mes.",
            features: ["Landing page alebo kompaktný service site", "Responzívna realizácia a základná prístupnosť", "Technické SEO a measurement mapa", "Launch-support v dohodnutom rozsahu"],
            growthFeatures: ["Do 3 hodín web-support mesačne", "Mesačný measurement review"], cta: "Spresniť Starter"
          },
          {
            kicker: "Web + meranie + dopyt", title: "Growth Engine", description: "Pre ambulanciu alebo B2B službu, ktorá potrebuje riadenú cestu od reklamy k dopytu.",
            buildPrice: "€1 290", growthPrice: "€1 290 + €390/mes.",
            features: ["Viacstránková conversion architektúra", "GTM + GA4 + conversion plan", "Príprava Search/PMax spustenia", "Cloudflare, formuláre a UTM routing"],
            growthFeatures: ["Jeden Google Ads účet", "Optimalizácia, report a do 4 hodín web-support"], cta: "Navrhnúť Growth", featured: true
          },
          {
            kicker: "Komplexný integrovaný systém", title: "Full Infrastructure", description: "Pre viacjazyčné platformy, migrácie a procesy s vlastnou automatizáciou.",
            buildPrice: "€2 490", growthPrice: "€2 490 + €590/mes.",
            features: ["Custom architektúra a plán migrácie", "Workers/webhooks a integrácie", "Rozšírená measurement architektúra", "Dokumentácia, handover a response windows"],
            growthFeatures: ["Prioritná podpora podľa dohodnutého SLA", "Mesačný roadmap review"], cta: "Prediskutovať Infrastructure"
          }
        ]
      },
      contact: {
        eyebrow: "Ďalší krok", title: "Začnime problémom, nie technológiou.", intro: "Popíšte firmu, cieľ a hlavšie úzke miesto. Ozvem sa s relevantnými otázkami a úprimným odhadom vhodného formátu spolupráce.",
        stepOneTitle: "Krátka diagnostika", stepOneBody: "Prepojíme cieľ, dáta a aktuálnu infraštruktúru.", stepTwoTitle: "Jasný ďalší krok", stepTwoBody: "Dostanete odporúčaný rozsah, termín a východiskovú cenu.",
        nameLabel: "Meno", namePlaceholder: "Ako vás môžem osloviť?", companyLabel: "Spoločnosť", companyPlaceholder: "Názov alebo odvetvie", contactLabel: "Email alebo Telegram", contactPlaceholder: "name@company.com alebo @username", serviceLabel: "Čo potrebujete spustiť?", messageLabel: "Kontext zadania", messagePlaceholder: "Aktuálna situácia, cieľ a želaný termín. Nevkladajte údaje pacientov ani iné citlivé informácie.",
        consent: "Súhlasím s odovzdaním týchto údajov Arseniimu na zodpovedanie dopytu. Údaje sa na tomto webe neukladajú.", submit: "Pokračovať v Telegrame", note: "Telegram sa otvorí s pripravenou správou — pred odoslaním ju môžete skontrolovať.", selectPlaceholder: "Vyberte oblasť",
        services: ["Starter Platform", "Growth Engine", "Full Infrastructure", "Technický audit", "Google Ads & Measurement", "Iné"], requiredError: "Skontrolujte povinné polia a súhlas.", openingStatus: "Hotovo — otváram Telegram s návrhom správy.", fallbackStatus: "Novú kartu sa nepodarilo otvoriť. Použite priamy Telegram odkaz.",
        privacySummary: "Ako sa spracuje váš dopyt", privacyController: "Prevádzkovateľ: Arsenii Leno, xlenoa@stuba.sk.", privacyPurpose: "Účel a základ: odpoveď na váš B2B dopyt a kroky pred možnou spoluprácou. Korešpondencia sa uchováva len tak dlho, ako je potrebné pre dopyt a povinné obchodné záznamy.", privacyTelegram: "Web formulár neodosiela ani neukladá: vytvorí návrh správy, ktorý odošlete sami cez Telegram. Po odoslaní údaje spracúva aj Telegram podľa vlastných podmienok.", privacyRights: "Ak chcete získať, opraviť alebo odstrániť údaje z korešpondencie, napíšte na email vyššie. Neposielajte údaje pacientov, zdravotné ani iné citlivé informácie."
      }
    },
    about: {
      hero: { eyebrow: "Inžinierstvo s obchodným kontextom", title: "Technická hĺbka.", titleAccent: "Zodpovednosť za celú cestu.", lede: "Budujem digitálne systémy na prieniku softvérového inžinierstva, merateľného marketingu a právne uvedomelého delivery — bez predstavy, že jeden nástroj vyrieši obchodný problém.", cta: "Prediskutovať zadanie", secondaryCta: "Pozrieť projekty" },
      profile: { label: "Profil praxe", role: "Digital Infrastructure & Growth Engineer", status: "Bratislava · Užhorod · Remote", facts: [{ label: "Zameranie", value: "Clinics & B2B" }, { label: "Jazyky", value: "UK · SK · EN" }, { label: "Model", value: "Founder-led" }] },
      tracks: {
        eyebrow: "Tri disciplíny, jeden systém myslenia", title: "Vzdelanie, ktoré mení spôsob delivery.", intro: "Ide o aktuálne študijné smery, nie tvrdenie o licencovanej právnej praxi. Ich hodnota je v lepších technických, zmluvných a obchodných rozhodnutiach.",
        items: [
          { type: "Inžiniersky smer · študent", title: "FIIT STU Bratislava", body: "Softvérové inžinierstvo: algoritmy, aplikačná architektúra, asynchrónne systémy a performance myslenie." },
          { type: "Právny smer · študent", title: "Právnická fakulta UzhNU", body: "IT a zmluvné právo, duševné vlastníctvo a privacy riziká ako kontext technického delivery." },
          { type: "Doplnkový biznis smer", title: "Ekonómia & medzinárodné vzťahy", body: "Ekonómia a medzinárodné vzťahy pomáhajú hodnotiť unit economics, trhy a obchodné obmedzenia." }
        ]
      },
      principles: {
        eyebrow: "Pracovná filozofia", title: "Tri princípy, ktoré prežijú zmenu stacku.",
        items: [
          { title: "Performance before decoration", body: "Najprv jasná content path, sémantika a rozpočet výkonu. Animácia má zmysel iba vtedy, keď neškodí cieľu." },
          { title: "Decisions from evidence", body: "Udalosti, konverzie a reklamné ciele sa plánujú pred spustením. Ak signál nemožno spoľahlivo merať, nemá riadiť rozpočet." },
          { title: "One accountable system", body: "Frontend, measurement, acquisition a lead routing sa riešia spolu. Hranice zodpovednosti a handover sú písomné." }
        ]
      },
      process: {
        eyebrow: "Ako prebieha spolupráca", title: "Od diagnostiky po kontrolované spustenie.", intro: "Každá etapa má rozhodnutie, výstup a kritérium dokončenia. Znižuje to riziko nekonečných úprav a nečakaných nákladov.",
        items: [
          { title: "Diagnose", body: "Cieľ, publikum, technický stav, dáta a riziká.", output: "Audit brief" },
          { title: "Architect", body: "Scope, user journey, measurement mapa a delivery plán.", output: "System map" },
          { title: "Build & validate", body: "Iteratívna realizácia, accessibility, performance a edge cases.", output: "Release candidate" },
          { title: "Launch & hand over", body: "Production launch, dokumentácia, transfer a 30-dňový support window.", output: "Handover pack" }
        ]
      },
      safeguards: {
        eyebrow: "Štandardy spolupráce", title: "Menej sľubov. Viac dohodnutých podmienok.", intro: "Forma ochrany závisí od jurisdikcie a projektu; regulované otázky majú dokumenty posúdené kvalifikovaným právnikom.",
        items: [
          { title: "Scope & acceptance", body: "Výstupy, hranice, etapy a kritériá prevzatia sa určia pred začiatkom vývoja." },
          { title: "Response windows", body: "Komunikačné kanály, priority a reakčné časy sú v dohode, nie v marketingovom badge." },
          { title: "IP handover", body: "Kód, prístupy a majetkové práva sa odovzdávajú v rozsahu výslovne určenom zmluvou." },
          { title: "Launch support", body: "30 dní minimálnej pomoci po vydaní na dohodnuté launch issues; ďalší rozvoj je samostatný scope." }
        ],
        noteTitle: "Dôležité:", note: "právne štúdium pomáha identifikovať riziká a pripraviť materiály na review, ale nenahrádza advokáta ani licencované právne poradenstvo."
      },
      cta: { eyebrow: "Potrebujete jeden zodpovedný systém?", title: "Spojme inžinierstvo, dáta a rast do jednej roadmapy.", button: "Začať diagnostikou" }
    },
    projects: {
      hero: { eyebrow: "Reálna práca a výskumné systémy", title: "Projekty s kontextom.", titleAccent: "Nie galéria technológií.", lede: "Pri každom projekte uvádzam skutočný status, svoju rolu a hranice dôkazov, aby sa živá klientská práca nemiešala s výskumnými prototypmi." },
      projectIndex: [{ title: "med.uz.ua", status: "Live client platform" }, { title: "gram-event-quant", status: "Active research prototype" }, { title: "DIkastes.ai", status: "Research concept" }, { title: "Clinic-App", status: "Functional prototype" }],
      flagship: {
        status: "Live client platform", eyebrow: "Hlavná prípadová štúdia · 01", visit: "Otvoriť web", challengeTitle: "Zadanie", challenge: "Nahradiť zdedený WordPress ľahšou architektúrou a vytvoriť jasnú cestu od vyhľadania služby ku kontaktu s klinikou.", roleTitle: "Moja rola", role: "Informačná architektúra, Astro realizácia, edge delivery, viacjazyčnosť, privacy-aware analytika a reklamná infraštruktúra.", mapLabel: "Architektúra projektu",
        map: [
          { code: "FE", title: "Localized Astro frontend", detail: "Static-first pages · responsive UI", state: "live" },
          { code: "ED", title: "Cloudflare edge delivery", detail: "Caching · redirects · DNS", state: "live" },
          { code: "MX", title: "Consent-aware measurement", detail: "GTM · GA4 · conversion map", state: "wired" },
          { code: "OP", title: "Lead operations", detail: "Contact flows · appointment paths", state: "active" }
        ],
        outcomes: [{ value: "4 jazyky", label: "UK · SK · EN · HU" }, { value: "Astro 5", label: "verejný live frontend" }, { value: "Cloudflare", label: "edge delivery" }, { value: "2026", label: "live release" }],
        claimNote: "Live status a technológie možno overiť na verejnom webe. Reklamné výsledky nezverejňujem bez odsúhlasených čísel a obdobia porovnania."
      },
      selected: {
        eyebrow: "Vybrané systémy", title: "Od market data po LegalTech.", intro: "Výskumné a prototypové projekty sú tak aj označené. Ukazujú spôsob myslenia, nie sú prezentované ako produkčné referencie.",
        items: [
          { status: "Active research prototype", title: "gram-event-quant", summary: "Asynchrónny event-study pipeline na analýzu reakcie trhu GRAM/TON na udalosti s REST OHLCV dátami a Telegram event inputs.", role: "Research architecture, data pipeline and statistical workflow.", tags: ["Python ≥3.13", "Async I/O", "REST OHLCV", "Event study"], href: "https://github.com/arsenii-leno/gram-event-quant", linkLabel: "Pozrieť public repository", external: true },
          { status: "Research concept", title: "DIkastes.ai", summary: "Zdokumentovaný architektonický koncept legal-research asistenta s retrieval, citation grounding a porovnávaním jurisdikcií.", role: "README-stage concept; nie je prezentovaný ako hotový AI produkt.", tags: ["RAG concept", "Legal research", "Vector retrieval", "Architecture"], href: "https://github.com/arsenii-leno/DIkastes.ai", linkLabel: "Pozrieť research concept", external: true },
          { status: "Functional prototype", title: "Clinic-App", summary: "Expo/React Native prototyp pre appointment workflow, patient records a local-first clinic operations.", role: "Prototype case; materiály poskytnem priamo po source-hygiene review.", tags: ["Expo", "React Native", "TypeScript", "Local-first"], href: "mailto:xlenoa@stuba.sk?subject=Clinic-App%20case", linkLabel: "Vyžiadať case note", external: false }
        ]
      },
      credential: { eyebrow: "Overiteľná kvalifikácia", title: "AI-Powered Performance Ads Certification", body: "Kvalifikácia Google Skillshop pre AI-powered kampane, Smart Bidding, Performance Max a meranie výsledkov.", issuerLabel: "Vydavateľ", idLabel: "Credential ID", verify: "Overiť credential" },
      stack: {
        eyebrow: "Capability matrix", title: "Stack sa volí podľa úzkeho miesta.", intro: "Technológia nie je ponuka. Má zjednodušiť delivery, meranie a následné vlastníctvo systému.",
        items: [
          { title: "Frontend & Performance", technologies: ["Astro · HTML5 · CSS", "TypeScript · React", "Accessibility · CWV", "Responsive delivery"] },
          { title: "Edge & Automation", technologies: ["Cloudflare Workers", "D1 · SQLite · KV", "Telegram Bot API", "GitHub Actions"] },
          { title: "Ads & Measurement", technologies: ["Google Ads · PMax", "GTM · GA4", "Enhanced Conversions", "Offline conversion plan"] },
          { title: "Legacy & Governance", technologies: ["WordPress · PHP", "DNS · cPanel · Fornex", "Scope · acceptance", "IP/privacy review prep"] }
        ]
      },
      cta: { eyebrow: "Máte podobne náročné zadanie?", title: "Ukážte mi aktuálny systém — nájdem bod s najväčším vplyvom.", button: "Požiadať o diagnostiku" }
    }
  },

  en: {
    global: {
      skip: "Skip to main content",
      brandTag: "Infrastructure & Growth",
      navLabel: "Primary navigation",
      languageLabel: "Choose language",
      nav: { services: "Services", about: "About", projects: "Projects", consultation: "Consultation" },
      footer: { tagline: "Digital infrastructure for businesses that measure outcomes.", location: "Bratislava · Uzhhorod · Remote", privacy: "Privacy" }
    },
    meta: {
      home: {
        title: "Arsenii Leno — Digital Infrastructure & Growth Engineering",
        description: "Digital infrastructure for clinics and B2B: fast web platforms, precise measurement, Google Ads, automation and clear handover terms.",
        ogTitle: "Arsenii Leno — Digital Infrastructure & Growth Engineering",
        ogDescription: "Fast web platforms, analytics, acquisition and automation in one accountable system."
      },
      about: {
        title: "Approach — Arsenii Leno",
        description: "Arsenii Leno's engineering, measurement-led and legally aware approach to digital infrastructure for clinics and B2B companies.",
        ogTitle: "Approach — Arsenii Leno",
        ogDescription: "Software engineering, measurable growth and privacy-aware delivery in one practice."
      },
      projects: {
        title: "Projects & Stack — Arsenii Leno",
        description: "Selected client and research work: a healthcare edge platform, market-event analytics, a LegalTech RAG concept and a clinic workflow prototype.",
        ogTitle: "Projects & Stack — Arsenii Leno",
        ogDescription: "Verifiable roles, honest status labels and technical decisions—from a live clinic platform to research prototypes."
      }
    },
    home: {
      hero: {
        status: "Available for a limited number of new projects",
        eyebrow: "For clinics, legal firms and B2B services",
        title: "Not just a website.",
        titleAccent: "A system that turns attention into enquiries.",
        lede: "I connect high-performance web engineering, precise measurement, Google Ads and automation into one manageable digital infrastructure.",
        primaryCta: "Discuss a launch",
        secondaryCta: "Explore the system",
        trustLabel: "Engagement assurances",
        trust: ["Transparent scope", "Contract-defined IP transfer", "30-day launch support"]
      },
      system: {
        ariaLabel: "Digital infrastructure system map", label: "growth-infrastructure.live", live: "LIVE", note: "One accountable system instead of fragmented contractors.",
        nodes: [
          { label: "Performance web", detail: "Astro · semantic HTML · edge", state: "ready" },
          { label: "Measurement", detail: "GTM · GA4 · conversions", state: "mapped" },
          { label: "Demand", detail: "Search · PMax · bidding", state: "active" },
          { label: "Lead operations", detail: "Workers · Telegram · UTM", state: "routed" }
        ],
        metrics: [{ value: "3", label: "market contexts" }, { value: "4", label: "system layers" }, { value: "1", label: "accountable owner" }]
      },
      proofLabel: "Specialisms",
      proof: ["Performance-first web", "Measurement that informs spend", "Founder-led delivery", "UK · SK · EN"],
      pillars: {
        eyebrow: "Four layers of one system", title: "From the first click to a routed lead.", intro: "Each layer strengthens the next: speed improves experience, measurement improves decisions, and automation improves response time.", detailsLabel: "Technical scope",
        items: [
          { metric: "static-first", title: "Frontend & Edge", body: "Semantic, responsive experiences with minimal JavaScript, fast delivery and a controlled technical footprint.", detail: "Astro, HTML5, CSS/Tailwind build, Cloudflare Pages or GitHub Pages, DNS, CDN, redirects and CI/CD." },
          { metric: "serverless ops", title: "Automation & Backend", body: "Forms, webhooks and lead routing without a heavy backend—with UTM context and understandable failure handling.", detail: "Cloudflare Workers, Telegram Bot API, D1/SQLite/KV, WordPress/PHP maintenance and GitHub Actions." },
          { metric: "measured", title: "Ads & Analytics", body: "Campaigns optimise toward a measurable business action, not attractive reports about clicks and reach.", detail: "Google Ads Search/PMax, Smart Bidding, GTM, GA4, Enhanced Conversions and offline conversion import planning." },
          { metric: "review-ready", title: "Ownership & Risk", body: "Scope, support boundaries, IP handover and privacy decisions are defined before launch—not after the first dispute.", detail: "Statement of work, acceptance criteria, response windows, IP handover and privacy-aware implementation prepared for legal review." }
        ]
      },
      case: {
        eyebrow: "Flagship case · med.uz.ua", title: "From legacy WordPress to a managed edge platform.", intro: "A full lifecycle for a private ophthalmology clinic: inherited-system stabilisation, migration, multilingual content, measurement and acquisition infrastructure.", visit: "Open the live project", comparisonLabel: "Architecture before and after", beforeLabel: "Before", beforeTitle: "Fragile legacy system", before: ["Heavy WordPress footprint", "Fragmented measurement", "Manual handling of campaign context"], afterLabel: "After", afterTitle: "Edge-first infrastructure", after: ["Astro static output", "Cloudflare delivery", "Consent-aware GTM/GA4 and forms"],
        metrics: [{ value: "4", label: "live language versions" }, { value: "Astro", label: "static frontend" }, { value: "Edge", label: "Cloudflare delivery" }],
        claimNote: "The live architecture and multilingual delivery are publicly verifiable. Performance scores and advertising outcomes should only be published with a dated report and an agreed comparison period."
      },
      pricing: {
        eyebrow: "Investment without vague estimates", title: "Choose a starting configuration.", toggleLabel: "Pricing mode", buildToggle: "One-time build", growthToggle: "Build + growth", popular: "Most selected", buildCaption: "international market guide · from", growthCaption: "build + monthly minimum", note: "Indicative pricing as of August 2026. The final proposal depends on scope. Media spend, hosting, paid licences, content, translation and taxes are separate.",
        tiers: [
          { kicker: "A clear first release", title: "Starter Platform", description: "For one service, an independent specialist or a focused MVP that needs a professional foundation.", buildPrice: "$950", growthPrice: "$950 + $650/mo", features: ["Landing page or compact service site", "Responsive build and baseline accessibility", "Technical SEO and measurement map", "Launch support within agreed boundaries"], growthFeatures: ["Up to 3 hours of monthly web support", "Monthly measurement review"], cta: "Scope a Starter" },
          { kicker: "Website + measurement + demand", title: "Growth Engine", description: "For a clinic or B2B service that needs a managed path from acquisition to a qualified enquiry.", buildPrice: "$1,950", growthPrice: "$1,950 + $650/mo", features: ["Multi-page conversion architecture", "GTM + GA4 + conversion plan", "Search/PMax launch preparation", "Cloudflare, forms and UTM routing"], growthFeatures: ["One Google Ads account", "Optimisation, reporting and up to 4 hours of web support"], cta: "Design the Growth Engine", featured: true },
          { kicker: "A complex integrated system", title: "Full Infrastructure", description: "For multilingual platforms, migrations and workflows that require custom automation.", buildPrice: "$3,500", growthPrice: "$3,500 + $900/mo", features: ["Custom architecture and migration plan", "Workers/webhooks and integrations", "Advanced measurement architecture", "Documentation, handover and response windows"], growthFeatures: ["Priority support under an agreed SLA", "Monthly roadmap review"], cta: "Discuss Infrastructure" }
        ]
      },
      contact: {
        eyebrow: "Next step", title: "Start with the constraint, not the technology.", intro: "Describe the business, the goal and the main bottleneck. I will come back with relevant questions and an honest view of the right engagement format.", stepOneTitle: "Short diagnosis", stepOneBody: "We connect the goal, available data and current infrastructure.", stepTwoTitle: "A clear next step", stepTwoBody: "You receive a recommended scope, timeline and starting cost.", nameLabel: "Name", namePlaceholder: "How should I address you?", companyLabel: "Company", companyPlaceholder: "Name or sector", contactLabel: "Email or Telegram", contactPlaceholder: "name@company.com or @username", serviceLabel: "What do you need to launch?", messageLabel: "Project context", messagePlaceholder: "Current situation, objective and preferred timing. Do not include patient data or other sensitive information.", consent: "I agree to share these details with Arsenii so he can respond to this enquiry. The data is not stored on this website.", submit: "Continue in Telegram", note: "Telegram will open with a prepared message—you can review it before sending.", selectPlaceholder: "Choose an area", services: ["Starter Platform", "Growth Engine", "Full Infrastructure", "Technical audit", "Google Ads & Measurement", "Other"], requiredError: "Please check the required fields and consent.", openingStatus: "Ready—opening Telegram with your message draft.", fallbackStatus: "The new tab could not be opened. Please use the direct Telegram link.",
        privacySummary: "How this enquiry is handled", privacyController: "Controller: Arsenii Leno, xlenoa@stuba.sk.", privacyPurpose: "Purpose and basis: replying to your B2B enquiry and taking steps toward a possible engagement. Correspondence is kept only as long as needed for the enquiry and required business records.", privacyTelegram: "The website does not submit or store this form: it creates a draft that you choose to send through Telegram. Once sent, Telegram also processes the data under its own terms.", privacyRights: "To access, correct or delete correspondence data, email the address above. Do not submit patient, health or other sensitive information."
      }
    },
    about: {
      hero: { eyebrow: "Engineering with commercial context", title: "Technical depth.", titleAccent: "Ownership of the whole path.", lede: "I build digital systems at the intersection of software engineering, measurable marketing and legally aware delivery—without pretending one tool can solve a business problem.", cta: "Discuss the problem", secondaryCta: "View projects" },
      profile: { label: "Practice profile", role: "Digital Infrastructure & Growth Engineer", status: "Bratislava · Uzhhorod · Remote", facts: [{ label: "Focus", value: "Clinics & B2B" }, { label: "Languages", value: "UK · SK · EN" }, { label: "Model", value: "Founder-led" }] },
      tracks: {
        eyebrow: "Three disciplines, one system of thought", title: "Education that changes delivery decisions.", intro: "These are current study tracks—not claims of licensed legal practice. Their value is in better technical, contractual and commercial decisions.",
        items: [
          { type: "Engineering track · student", title: "FIIT STU Bratislava", body: "Software Engineering: algorithms, application architecture, asynchronous systems and performance thinking." },
          { type: "Legal track · student", title: "UzhNU Faculty of Law", body: "IT and contract law, intellectual property and privacy risk as context for technical delivery." },
          { type: "Additional business track", title: "Economics & International Relations", body: "Economics and international relations help frame unit economics, markets and commercial constraints." }
        ]
      },
      principles: {
        eyebrow: "Working philosophy", title: "Three principles that outlast the stack.",
        items: [
          { title: "Performance before decoration", body: "First: a clear content path, semantics and a performance budget. Motion earns its place only when it does not compromise the job." },
          { title: "Decisions from evidence", body: "Events, conversions and campaign objectives are planned before launch. If a signal cannot be measured reliably, it should not steer budget." },
          { title: "One accountable system", body: "Frontend, measurement, acquisition and lead routing are designed together. Responsibility boundaries and handover are written down." }
        ]
      },
      process: {
        eyebrow: "How the work runs", title: "From diagnosis to a controlled launch.", intro: "Each stage has a decision, a deliverable and a completion criterion. That reduces endless revisions and surprise costs.",
        items: [
          { title: "Diagnose", body: "Goal, audience, technical state, data and risks.", output: "Audit brief" },
          { title: "Architect", body: "Scope, user journey, measurement map and delivery plan.", output: "System map" },
          { title: "Build & validate", body: "Iterative implementation, accessibility, performance and edge cases.", output: "Release candidate" },
          { title: "Launch & hand over", body: "Production launch, documentation, transfer and a 30-day support window.", output: "Handover pack" }
        ]
      },
      safeguards: {
        eyebrow: "Engagement standards", title: "Fewer promises. More defined terms.", intro: "The right protection depends on the jurisdiction and project; regulated matters should be reviewed by qualified counsel.",
        items: [
          { title: "Scope & acceptance", body: "Outputs, boundaries, stages and acceptance criteria are defined before development begins." },
          { title: "Response windows", body: "Communication channels, priorities and response times belong in the agreement—not a marketing badge." },
          { title: "IP handover", body: "Code, access and economic rights transfer only to the extent expressly defined by the contract." },
          { title: "Launch support", body: "30 days of minimum post-release assistance for agreed launch issues; continued development is a separate scope." }
        ],
        noteTitle: "Important:", note: "legal studies help identify risks and prepare materials for review, but do not replace a lawyer or licensed legal advice."
      },
      cta: { eyebrow: "Need one accountable system?", title: "Bring engineering, data and growth into one roadmap.", button: "Start with a diagnosis" }
    },
    projects: {
      hero: { eyebrow: "Live work and research systems", title: "Projects with context.", titleAccent: "Not a technology gallery.", lede: "Every project shows its real status, my role and the limits of public evidence—so live client work is not blurred together with research prototypes." },
      projectIndex: [{ title: "med.uz.ua", status: "Live client platform" }, { title: "gram-event-quant", status: "Active research prototype" }, { title: "DIkastes.ai", status: "Research concept" }, { title: "Clinic-App", status: "Functional prototype" }],
      flagship: {
        status: "Live client platform", eyebrow: "Flagship case · 01", visit: "Open website", challengeTitle: "Challenge", challenge: "Replace an inherited WordPress system with a lighter architecture and create a clear path from service discovery to a clinic enquiry.", roleTitle: "My role", role: "Information architecture, Astro implementation, edge delivery, multilingual content, privacy-aware measurement and acquisition infrastructure.", mapLabel: "Project architecture",
        map: [
          { code: "FE", title: "Localized Astro frontend", detail: "Static-first pages · responsive UI", state: "live" },
          { code: "ED", title: "Cloudflare edge delivery", detail: "Caching · redirects · DNS", state: "live" },
          { code: "MX", title: "Consent-aware measurement", detail: "GTM · GA4 · conversion map", state: "wired" },
          { code: "OP", title: "Lead operations", detail: "Contact flows · appointment paths", state: "active" }
        ],
        outcomes: [{ value: "4 languages", label: "UK · SK · EN · HU" }, { value: "Astro 5", label: "public live frontend" }, { value: "Cloudflare", label: "edge delivery" }, { value: "2026", label: "live release" }],
        claimNote: "The live status and technology are publicly verifiable. Advertising outcomes are not published without approved figures and a defined comparison window."
      },
      selected: {
        eyebrow: "Selected systems", title: "From market data to LegalTech.", intro: "Research and prototype work is labelled as such. It demonstrates thinking and architecture, not fabricated production credentials.",
        items: [
          { status: "Active research prototype", title: "gram-event-quant", summary: "An asynchronous event-study pipeline for analysing GRAM/TON market reactions using REST OHLCV data and Telegram event inputs.", role: "Research architecture, data pipeline and statistical workflow.", tags: ["Python ≥3.13", "Async I/O", "REST OHLCV", "Event study"], href: "https://github.com/arsenii-leno/gram-event-quant", linkLabel: "View public repository", external: true },
          { status: "Research concept", title: "DIkastes.ai", summary: "A documented architecture concept for a legal-research assistant using retrieval, citation grounding and cross-jurisdiction analysis.", role: "README-stage concept; not presented as a finished AI product.", tags: ["RAG concept", "Legal research", "Vector retrieval", "Architecture"], href: "https://github.com/arsenii-leno/DIkastes.ai", linkLabel: "View research concept", external: true },
          { status: "Functional prototype", title: "Clinic-App", summary: "An Expo/React Native prototype for appointment workflow, patient records and local-first clinic operations.", role: "Prototype case; materials are shared directly after a source-hygiene review.", tags: ["Expo", "React Native", "TypeScript", "Local-first"], href: "mailto:xlenoa@stuba.sk?subject=Clinic-App%20case", linkLabel: "Request case note", external: false }
        ]
      },
      credential: { eyebrow: "Verifiable qualification", title: "AI-Powered Performance Ads Certification", body: "A Google Skillshop qualification covering AI-powered campaigns, Smart Bidding, Performance Max and performance measurement.", issuerLabel: "Issuer", idLabel: "Credential ID", verify: "Verify credential" },
      stack: {
        eyebrow: "Capability matrix", title: "The stack follows the constraint.", intro: "Technology is not the offer. It should simplify delivery, measurement and long-term ownership.",
        items: [
          { title: "Frontend & Performance", technologies: ["Astro · HTML5 · CSS", "TypeScript · React", "Accessibility · CWV", "Responsive delivery"] },
          { title: "Edge & Automation", technologies: ["Cloudflare Workers", "D1 · SQLite · KV", "Telegram Bot API", "GitHub Actions"] },
          { title: "Ads & Measurement", technologies: ["Google Ads · PMax", "GTM · GA4", "Enhanced Conversions", "Offline conversion plan"] },
          { title: "Legacy & Governance", technologies: ["WordPress · PHP", "DNS · cPanel · Fornex", "Scope · acceptance", "IP/privacy review prep"] }
        ]
      },
      cta: { eyebrow: "Working through a similar constraint?", title: "Show me the current system—I will find the highest-leverage intervention.", button: "Request a diagnosis" }
    }
  }
};
