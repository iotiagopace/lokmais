(() => {
  const config = window.CMS_CONFIG || {};
  const api = (config.apiBaseUrl || "/api/cms").replace(/\/$/, "");
  const status = config.publicStatus || "published";

  const esc = (value) => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const lines = (value) => String(value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  async function getJson(path) {
    const response = await fetch(`${api}${path}`);
    if (!response.ok) throw new Error(`CMS ${response.status}`);
    return response.json();
  }

  async function section(id) {
    try {
      const { data } = await getJson(`/public/sections/${id}?status=${encodeURIComponent(status)}`);
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.warn(`CMS public section "${id}" failed:`, error);
      return [];
    }
  }

  function imageOf(item) {
    return item.cover_image_url || item.cover || (Array.isArray(item.gallery_images) && item.gallery_images[0]) || "";
  }

  const LOCAL_MOTO_IMGS = [
    { test: h => /semi[\s-]?nova|seminova/.test(h),                          src: "assets/motos/start-160-2025-lateral.webp" },
    { test: h => h.includes("titan"),                                         src: "assets/motos/titan-160-2024-azul.jpeg" },
    { test: h => h.includes("start") && /(2026|0\s?km)/.test(h),             src: "assets/motos/start-160-2026-lateral.webp" },
    { test: h => h.includes("start") && h.includes("2025"),                  src: "assets/motos/start-160-2025-lateral.webp" },
    { test: h => h.includes("start") && h.includes("2024"),                  src: "assets/motos/titan-160-2024-azul.jpeg" },
    { test: h => h.includes("fan")   && h.includes("2026"),                  src: "assets/motos/fan-160-2026-lateral.webp" },
    { test: h => h.includes("fan")   && h.includes("2025"),                  src: "assets/motos/fan-160-2025-lateral.webp" },
    { test: h => h.includes("fan"),                                           src: "assets/motos/fan-160-2026-lateral.webp" },
    { test: h => h.includes("start"),                                         src: "assets/motos/start-160-2025-lateral.webp" },
  ];

  function localMotoImg(item) {
    const hay = [item.modelo, item.title, item.tag, item.category, item.filtro].join(" ").toLowerCase();
    for (const rule of LOCAL_MOTO_IMGS) {
      if (rule.test(hay)) return rule.src;
    }
    return null;
  }

  function renderMotos(items) {
    const targets = [
      document.querySelector(".moto-grid"),
      document.querySelector(".cat-grid")
    ].filter(Boolean);
    if (!items.length || !targets.length) return;

    const html = items.map((item) => {
      const title = item.modelo || item.title || "Moto LokMais";
      const img = localMotoImg(item) || imageOf(item);
      const specs = String(item.specs || "").split("·").map((s) => s.trim()).filter(Boolean);
      const filters = item.filtro || [item.category, item.tag, title].join(" ").toLowerCase();
      return `
        <div class="${document.querySelector(".cat-grid") ? "mcard" : "moto"}" data-cat="${esc(filters)}">
          ${img ? `<img class="moto-photo" src="${esc(img)}" alt="${esc(title)}">` : ""}
          <div class="mb">
            <div class="tagrow"><span class="tag">${esc(item.tag || item.category || "")}</span>${item.planos ? `<span class="tag navy">${esc(item.planos)}</span>` : ""}</div>
            <h3>${esc(title)}</h3>
            ${item.disponivel ? `<div class="sub">${esc(item.disponivel)}</div>` : ""}
            <div class="specs">${specs.map((spec) => `<span>${esc(spec)}</span>`).join("")}</div>
            ${item.preco_semanal ? `<div class="priceblk"><div><span class="lab">A partir de</span><b>R$ ${esc(item.preco_semanal)}<small>/sem</small></b></div></div>` : ""}
            <a class="btn btn-primary" href="/contato">Quero esta moto</a>
          </div>
        </div>`;
    }).join("");

    targets.forEach((target) => { target.innerHTML = html; });
  }

  function renderPlanos(items) {
    const targets = [
      document.querySelector(".plan-grid"),
      document.querySelector(".planos-detail")
    ].filter(Boolean);
    if (!items.length || !targets.length) return;

    const html = items.map((item) => {
      const featured = item.destaque === "Sim" || item.is_featured;
      const rows = lines(item.tabela_precos).map((line) => {
        const [label, value] = line.split("|").map((part) => part.trim());
        return `<div class="row"><span>${esc(label || line)}</span>${value ? `<b>${esc(value)}</b>` : ""}</div>`;
      }).join("");
      const features = lines(item.features).map((feature) => `<li>${esc(feature)}</li>`).join("");
      return `
        <div class="${document.querySelector(".planos-detail") ? "pd" : "plan"} ${featured ? (document.querySelector(".planos-detail") ? "featured" : "feat-plan") : ""}">
          ${featured && item.ribbon ? `<div class="ribbon">${esc(item.ribbon)}</div>` : ""}
          <div class="pname">${esc(item.nome || item.title)}</div>
          <div class="${document.querySelector(".planos-detail") ? "psub" : "pdesc"}">${esc(item.subtitulo || item.duracao || "")}</div>
          <div class="apartir">A partir de</div>
          <div class="price">R$ ${esc(item.preco_semanal || "")}<small>/sem</small></div>
          ${rows ? `<div class="priceall">${rows}</div>` : ""}
          ${features ? `<ul>${features}</ul>` : ""}
          <a class="btn ${featured ? "btn-primary" : "btn-navy"}" href="/contato">Quero este plano</a>
        </div>`;
    }).join("");

    targets.forEach((target) => { target.innerHTML = html; });
  }

  function renderUnidades(items) {
    const target = document.getElementById("units");
    if (!items.length || !target) return;
    target.innerHTML = items.map((item, index) => {
      const city = item.cidade || item.title || "Unidade LokMais";
      const whatsapp = item.whatsapp || "5531972285918";
      return `
        <div class="ucard ${index === 0 ? "on" : ""}" data-id="${esc(item.id)}" data-map="${esc(item.maps_url || "")}">
          <div class="uh"><span class="ut">Unidade · ${esc(item.numero || String(index + 1).padStart(2, "0"))}</span></div>
          <h3>${esc(item.title || `LokMais ${city}`)}</h3>
          <p class="addr">${esc(item.endereco || "")}</p>
          <div class="meta"><span>${esc(item.horario || "")}</span><span>${esc(item.telefone || "")}</span></div>
          <div class="actions">
            <a class="wa" href="https://wa.me/${esc(whatsapp)}">WhatsApp</a>
            <a href="${esc(item.maps_link || item.maps_url || "#")}" target="_blank" rel="noopener">Como chegar</a>
          </div>
        </div>`;
    }).join("");
    const first = items[0];
    const map = document.getElementById("unit-map");
    if (map && first?.maps_url) map.src = first.maps_url;
    document.querySelectorAll(".ucard").forEach((card) => {
      card.onclick = () => {
        document.querySelectorAll(".ucard").forEach((other) => other.classList.toggle("on", other === card));
        if (map && card.dataset.map) map.src = card.dataset.map;
      };
    });
  }

  function renderFaq(items) {
    const homeTarget = document.querySelector(".faq");
    const pageTarget = document.querySelector(".faq-grid > div:last-child");
    if (!items.length || (!homeTarget && !pageTarget)) return;

    const qa = items.map((item) => `
      <div class="qa">
        <button>${esc(item.pergunta || item.title)}<span class="pl">+</span></button>
        <div class="ans"><p>${esc(item.resposta || "")}</p></div>
      </div>`).join("");

    if (homeTarget) homeTarget.innerHTML = qa;
    if (pageTarget) {
      const groups = [...new Set(items.map((item) => item.categoria || item.category || "Geral"))];
      pageTarget.innerHTML = groups.map((group, index) => `
        <div class="faq-cat ${index === 0 ? "on" : ""}" data-c="${esc(group.toLowerCase())}">
          <h2>${esc(group)}</h2>
          ${items.filter((item) => (item.categoria || item.category || "Geral") === group).map((item) => `
            <div class="qa"><button>${esc(item.pergunta || item.title)}<span class="pl">+</span></button><div class="ans"><p>${esc(item.resposta || "")}</p></div></div>
          `).join("")}
        </div>`).join("");
    }

    document.querySelectorAll(".qa button").forEach((button) => {
      button.onclick = () => button.parentElement.classList.toggle("open");
    });
  }

  function renderFranchiseeTestimonials(items) {
    const target = document.querySelector(".tgrid");
    if (!items.length || !target) return;
    target.innerHTML = items.map((item) => `
      <div class="tcard">
        <div class="stars">★★★★★</div>
        <p>${esc(item.texto || "")}</p>
        <div class="who">
          ${imageOf(item) ? `<img src="${esc(imageOf(item))}" alt="${esc(item.nome || "")}" style="width:48px;height:48px;border-radius:50%;object-fit:cover">` : ""}
          <div><b>${esc(item.nome || item.title || "Franqueado LokMais")}</b><span>${esc(item.cidade_uf || item.resultado || "")}</span></div>
        </div>
      </div>`).join("");
  }

  async function hydrateHomeImages() {
    try {
      const { data } = await getJson("/public/settings/home_images");
      if (!data) return;
      document.querySelectorAll("[data-cms-img], [data-home-image]").forEach((el) => {
        const key = el.dataset.cmsImg || el.dataset.homeImage;
        if (key && data[key]) el.src = data[key];
      });
      document.querySelectorAll("image-slot[id]").forEach((slot) => {
        const key = slot.id.replace(/-/g, "_");
        if (data[key]) slot.setAttribute("src", data[key]);
      });
    } catch (error) {
      console.warn("CMS home images failed:", error);
    }
  }

  async function submitLead(form, extra = {}) {
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      ...data,
      ...extra,
      name: data.nome || data.name || "",
      phone: data.fone || data.phone || "",
      subject: data.motivo || data.subject || extra.subject || "Contato pelo site",
      message: data.msg || data.message || data.capital || ""
    };
    try {
      await fetch(`${api}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.warn("CMS lead failed:", error);
    }
    return payload;
  }

  window.CmsTurso = { submitLead };

  document.addEventListener("DOMContentLoaded", async () => {
    hydrateHomeImages();
    const [motos, planos, unidades, faq, franqueados] = await Promise.all([
      section("motos"),
      section("planos"),
      section("unidades"),
      section("faq"),
      section("franqueados_depoimentos")
    ]);
    renderMotos(motos);
    renderPlanos(planos);
    renderUnidades(unidades);
    renderFaq(faq);
    renderFranchiseeTestimonials(franqueados);
  });
})();
