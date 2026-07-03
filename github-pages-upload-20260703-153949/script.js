const header = document.querySelector("[data-elevate]");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const revealItems = document.querySelectorAll(".reveal");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

const proofData = {
  "network-topology": {
    title: "Schéma Packet Tracer",
    description: "Extrait du portfolio: configuration de services réseaux et équipements d'interconnexion.",
    images: [
      { src: "assets/proofs/network-services-04.png", alt: "Page portfolio sur la configuration des services réseaux" }
    ]
  },
  "network-addressing": {
    title: "Plan d'adressage et zones",
    description: "Preuve visuelle de la structuration réseau par bâtiments, zones et équipements.",
    images: [
      { src: "assets/proofs/network-blue-05.png", alt: "Plan bâtiment bleu du projet réseau" }
    ]
  },
  "network-doc": {
    title: "Documentation de configuration",
    description: "Livrable expliquant la configuration, le contexte et le plan de mise en œuvre réseau.",
    images: [
      { src: "assets/proofs/network-services-04.png", alt: "Documentation de configuration réseau" }
    ]
  },
  "network-deploy": {
    title: "Plan d'action déploiement",
    description: "Support de préparation avant implémentation physique du réseau.",
    images: [
      { src: "assets/proofs/network-services-04.png", alt: "Plan d'action réseau" }
    ]
  },
  "cloud-current": {
    title: "Architecture actuelle",
    description: "Extrait Patronus: serveurs physiques web, base de données et fichiers avant migration.",
    images: [
      { src: "assets/proofs/cloud-architecture-10.png", alt: "Architecture actuelle et cible Patronus" }
    ]
  },
  "cloud-target": {
    title: "Architecture cible",
    description: "Vue synthétique de la cible cloud et des bénéfices attendus de la migration.",
    images: [
      { src: "assets/proofs/cloud-architecture-10.png", alt: "Nouvelle architecture cloud simplifiée" }
    ]
  },
  "cloud-steps": {
    title: "Étapes de migration",
    description: "Méthode: analyse, choix fournisseur, environnement, pilote, migration, validation, documentation.",
    images: [
      { src: "assets/proofs/cloud-steps-11.png", alt: "Étapes de migration et estimation des coûts" }
    ]
  },
  "cloud-risks": {
    title: "Analyse risques / coûts",
    description: "Points de vigilance: perte de données, sécurité, conformité RGPD, coûts et accompagnement.",
    images: [
      { src: "assets/proofs/cloud-steps-11.png", alt: "Risques et étapes du projet cloud" }
    ]
  },
  "ad-enumeration": {
    title: "Énumération réseau",
    description: "Preuve d'audit AD: découverte d'hôtes, contrôleur de domaine et services sensibles exposés.",
    images: [
      { src: "assets/proofs/ad-enumeration-13.png", alt: "Énumération Active Directory et services exposés" }
    ]
  },
  "ad-kerberos": {
    title: "Constats Kerberos",
    description: "Analyse de comptes SPN, risques Kerberoasting et mécanismes de chiffrement vulnérables.",
    images: [
      { src: "assets/proofs/ad-kerberos-16.png", alt: "Constats Kerberos et Kerberoasting" }
    ]
  },
  "ad-lateral": {
    title: "Scénario d'élévation",
    description: "Synthèse du mouvement latéral et des risques de compromission dans l'environnement AD.",
    images: [
      { src: "assets/proofs/ad-kerberos-16.png", alt: "Comptes ciblés et scénario d'élévation" }
    ]
  },
  "ad-remediation": {
    title: "Plan de remédiation",
    description: "Recommandations complètes: mots de passe robustes, LAPS, journalisation, segmentation réseau, délégation et plan long terme.",
    images: [
      { src: "assets/proofs/ad-recommendations-19.png", alt: "Recommandations 1 et 2: mots de passe et LAPS" },
      { src: "assets/proofs/ad-recommendations-2-20.png", alt: "Recommandations 3 à 5: journalisation, segmentation et délégation" },
      { src: "assets/proofs/ad-longterm-21.png", alt: "Plan d'action long terme pour la segmentation réseau" }
    ]
  },
  "bank-ebics": {
    title: "Analyse EBICS",
    description: "Visuel personnalisé: contrôle de flux bancaire, certificats, clés, droits et logs.",
    images: [
      { src: "assets/proofs/ebics-flow.png", alt: "Schéma personnalisé d'analyse de flux EBICS" }
    ]
  },
  "bank-xml": {
    title: "Contrôle XML",
    description: "Vérification de fichiers structurés, cohérence des échanges et qualification d'incidents.",
    images: [
      { src: "assets/proofs/xml-certificates.png", alt: "Contrôle XML et sécurité applicative" }
    ]
  },
  "bank-certificates": {
    title: "Certificats électroniques",
    description: "Installation, renouvellement et contrôle de certificats dans un contexte applicatif bancaire.",
    images: [
      { src: "assets/proofs/xml-certificates.png", alt: "Contrôle des certificats électroniques" }
    ]
  },
  "bank-keys": {
    title: "Clés de chiffrement",
    description: "Gestion et vérification de clés nécessaires à la sécurité des échanges applicatifs.",
    images: [
      { src: "assets/proofs/xml-certificates.png", alt: "Clés de chiffrement et contrôle applicatif" }
    ]
  },
  "bank-rights": {
    title: "Droits applicatifs",
    description: "Contrôle des habilitations, profils utilisateurs et droits nécessaires au traitement des flux.",
    images: [
      { src: "assets/proofs/app-rights.png", alt: "Schéma de contrôle des droits applicatifs" }
    ]
  }
};

const proofModal = document.querySelector("#proof-modal");
const proofImage = document.querySelector("#proof-modal-image");
const proofTitle = document.querySelector("#proof-modal-title");
const proofDescription = document.querySelector("#proof-modal-description");
const proofThumbs = document.querySelector("#proof-thumbs");
const proofPrev = document.querySelector("[data-proof-prev]");
const proofNext = document.querySelector("[data-proof-next]");
let activeProof = null;
let activeProofIndex = 0;

const renderProof = () => {
  if (!activeProof || !proofModal) return;
  const item = activeProof.images[activeProofIndex];
  proofTitle.textContent = activeProof.title;
  proofDescription.textContent = activeProof.description;
  proofImage.src = item.src;
  proofImage.alt = item.alt;
  proofPrev.style.display = activeProof.images.length > 1 ? "block" : "none";
  proofNext.style.display = activeProof.images.length > 1 ? "block" : "none";
  proofThumbs.innerHTML = "";

  activeProof.images.forEach((image, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === activeProofIndex ? "is-active" : "";
    button.setAttribute("aria-label", `Afficher la preuve ${index + 1}`);
    button.addEventListener("click", () => {
      activeProofIndex = index;
      renderProof();
    });

    const thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = "";
    button.appendChild(thumb);
    proofThumbs.appendChild(button);
  });
};

const openProof = (key) => {
  activeProof = proofData[key];
  if (!activeProof || !proofModal) return;
  activeProofIndex = 0;
  renderProof();
  proofModal.classList.add("is-open");
  proofModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  proofModal.querySelector("[data-proof-close]").focus();
};

const closeProof = () => {
  if (!proofModal) return;
  proofModal.classList.remove("is-open");
  proofModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const moveProof = (direction) => {
  if (!activeProof) return;
  activeProofIndex = (activeProofIndex + direction + activeProof.images.length) % activeProof.images.length;
  renderProof();
};

document.querySelectorAll("[data-proof]").forEach((button) => {
  button.addEventListener("click", () => openProof(button.dataset.proof));
});

document.querySelectorAll("[data-proof-close]").forEach((button) => {
  button.addEventListener("click", closeProof);
});

proofPrev?.addEventListener("click", () => moveProof(-1));
proofNext?.addEventListener("click", () => moveProof(1));

document.addEventListener("keydown", (event) => {
  if (!proofModal?.classList.contains("is-open")) return;
  if (event.key === "Escape") closeProof();
  if (event.key === "ArrowLeft") moveProof(-1);
  if (event.key === "ArrowRight") moveProof(1);
});
