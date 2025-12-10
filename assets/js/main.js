// assets/js/main.js

(function () {
    function setText(id, value) {
      var el = document.getElementById(id);
      if (el && value != null) {
        el.textContent = value;
      }
    }
  
    function setHref(id, value) {
      var el = document.getElementById(id);
      if (el && value) {
        el.href = value;
      }
    }
  
    function createElement(tag, className, text) {
      var el = document.createElement(tag);
      if (className) el.className = className;
      if (text != null) el.textContent = text;
      return el;
    }
  
    document.addEventListener("DOMContentLoaded", function () {
      var c = window.SITE_CONTENT || {};
      var profile = c.profile || {};
      var about = c.about || {};
      var news = c.news || [];
      var pubs = c.publications || {};
  
      /* 填充基础信息 */
  
      setText("brand-initials", profile.initials || "");
      setText("brand-name", profile.name || "");
      setText("brand-tagline", profile.tagline || "");
  
      setText("hero-title-prefix", profile.heroTitlePrefix || "I am");
      setText(
        "hero-title-name",
        profile.highlightName || profile.name || "Your Name"
      );
      setText("hero-description", profile.heroDescription || "");
      setText("hero-affiliation", profile.affiliation || "");
      setText("hero-email-display", profile.emailDisplay || profile.email || "");
      setText("hero-location", profile.location || "");
  
      if (profile.cvUrl) setHref("btn-cv", profile.cvUrl);
      if (profile.email) {
        var mailto = "mailto:" + profile.email;
        setHref("btn-email", mailto);
        setHref("icon-email", mailto);
        setHref("footer-email", mailto);
      }
  
      setHref("icon-scholar", profile.scholarUrl || "#");
      setHref("icon-github", profile.githubUrl || "#");
      setHref("icon-linkedin", profile.linkedinUrl || "#");
      setHref("icon-twitter", profile.twitterUrl || "#");
  
      setHref("footer-github", profile.githubUrl || "#");
      setHref("footer-scholar", profile.scholarUrl || "#");
      setHref("footer-twitter", profile.twitterUrl || "#");
  
      if (profile.footerCopy) {
        setText("footer-copy", profile.footerCopy);
      }
  
      // profile 卡片
      var avatar = document.getElementById("profile-avatar");
      if (avatar && profile.avatarUrl) {
        avatar.src = profile.avatarUrl;
        if (profile.name) {
          avatar.alt = profile.name + " portrait";
        }
      }
      setText("profile-name", profile.name || "");
      setText("profile-title", profile.role || "");
      setText(
        "profile-affiliation-long",
        profile.affiliationLong || profile.affiliation || ""
      );
      setText("profile-location-long", profile.location || "");
      setText("profile-status-text", profile.statusText || "Open to collaborations");
      setText(
        "profile-highlight-text",
        profile.highlightText || "Currently working on something interesting."
      );
  
      var tagsContainer = document.getElementById("profile-tags");
      if (tagsContainer && Array.isArray(profile.tags)) {
        tagsContainer.innerHTML = "";
        profile.tags.forEach(function (tagText) {
          var span = createElement("span", "tag", tagText);
          tagsContainer.appendChild(span);
        });
      }
  
      /* About */
  
      var aboutBio = document.getElementById("about-bio");
      if (aboutBio && Array.isArray(about.bioParagraphs)) {
        aboutBio.innerHTML = "";
        about.bioParagraphs.forEach(function (pText) {
          var p = createElement("p", null, pText);
          aboutBio.appendChild(p);
        });
      }
  
      var eduEl = document.getElementById("about-education");
      if (eduEl && Array.isArray(about.education)) {
        eduEl.innerHTML = "";
        about.education.forEach(function (line, idx) {
          eduEl.appendChild(document.createTextNode(line));
          if (idx < about.education.length - 1) {
            eduEl.appendChild(document.createElement("br"));
          }
        });
      }
  
      var advEl = document.getElementById("about-advisors");
      if (advEl && Array.isArray(about.advisors)) {
        advEl.innerHTML = "";
        about.advisors.forEach(function (line, idx) {
          advEl.appendChild(document.createTextNode(line));
          if (idx < about.advisors.length - 1) {
            advEl.appendChild(document.createElement("br"));
          }
        });
      }
  
      var riList = document.getElementById("about-research-list");
      if (riList && Array.isArray(about.researchInterests)) {
        riList.innerHTML = "";
        about.researchInterests.forEach(function (item) {
          var li = document.createElement("li");
          var bullet = createElement("span", "about-research-bullet");
          var span = document.createElement("span");
          var title = item.title ? item.title : "";
          var desc = item.description ? item.description : "";
          span.innerHTML =
            "<strong>" + title + "</strong>" + (desc ? " " + desc : "");
          li.appendChild(bullet);
          li.appendChild(span);
          riList.appendChild(li);
        });
      }
  
      var kwContainer = document.getElementById("about-keywords");
      if (kwContainer && Array.isArray(about.keywords)) {
        kwContainer.innerHTML = "";
        about.keywords.forEach(function (kw, index) {
          var pill = createElement(
            "span",
            "pill" + (index === 0 ? " pill-strong" : ""),
            kw
          );
          kwContainer.appendChild(pill);
        });
      }
  
      var collabEl = document.getElementById("about-collab-note");
      if (collabEl && about.collaborationNote) {
        collabEl.textContent = about.collaborationNote;
      }
  
      /* News */
  
      var newsContainer = document.getElementById("news-container");
      if (newsContainer && Array.isArray(news)) {
        newsContainer.innerHTML = "";
        news.forEach(function (yearBlock) {
          var year = yearBlock.year;
          var items = yearBlock.items || [];
  
          var yearLabel = createElement("div", "news-year", String(year));
          newsContainer.appendChild(yearLabel);
  
          var timeline = createElement("div", "news-timeline");
          items.forEach(function (item) {
            var article = createElement("article", "news-item");
  
            var meta = createElement("div", "news-meta");
            var strongDate = document.createElement("span");
            strongDate.textContent = item.date || "";
            meta.appendChild(strongDate);
            meta.appendChild(document.createTextNode(" · " + (item.category || "")));
            article.appendChild(meta);
  
            var title = createElement("h3", "news-title", item.title || "");
            article.appendChild(title);
  
            var desc = createElement(
              "p",
              "news-description",
              item.description || ""
            );
            article.appendChild(desc);
  
            if (Array.isArray(item.tags) && item.tags.length > 0) {
              var tagsRow = createElement("div", "news-tags");
              item.tags.forEach(function (tagText) {
                var tagEl = createElement("span", "news-tag", tagText);
                tagsRow.appendChild(tagEl);
              });
              article.appendChild(tagsRow);
            }
  
            timeline.appendChild(article);
          });
  
          newsContainer.appendChild(timeline);
        });
      }
  
      /* Publications: Selected */
  
      var selectedContainer = document.getElementById("pub-selected-container");
      if (
        selectedContainer &&
        Array.isArray(pubs.selected) &&
        pubs.selected.length > 0
      ) {
        selectedContainer.innerHTML = "";
        pubs.selected.forEach(function (pub) {
          var card = createElement("article", "pub-card pub-card-featured");
  
          var imageWrapper = createElement("div", "pub-image");
          if (pub.imageUrl) {
            var img = document.createElement("img");
            img.src = pub.imageUrl;
            img.alt = pub.title ? "Figure for " + pub.title : "Publication figure";
            imageWrapper.appendChild(img);
          }
          card.appendChild(imageWrapper);
  
          var content = createElement("div", "pub-content");
  
          var metaText =
            (pub.type || "Publication") + " · " + (pub.year || "");
          var meta = createElement("div", "pub-meta", metaText.trim());
          content.appendChild(meta);
  
          var title = createElement("h3", "pub-title", pub.title || "");
          content.appendChild(title);
  
          if (pub.authors) {
            var authors = createElement("p", "pub-authors");
            // 高亮你的名字
            if (pub.highlightName && pub.authors.indexOf(pub.highlightName) >= 0) {
              var parts = pub.authors.split(pub.highlightName);
              authors.appendChild(document.createTextNode(parts[0]));
              var span = createElement("span", "pub-author-highlight", pub.highlightName);
              authors.appendChild(span);
              if (parts[1]) {
                authors.appendChild(document.createTextNode(parts[1]));
              }
            } else {
              authors.textContent = pub.authors;
            }
            content.appendChild(authors);
          }
  
          if (pub.venue) {
            var venue = createElement("p", "pub-venue", pub.venue);
            content.appendChild(venue);
          }
  
          if (Array.isArray(pub.links) && pub.links.length > 0) {
            var linkRow = createElement("div", "pub-links");
            pub.links.forEach(function (link) {
              if (!link || !link.url) return;
              var a = createElement("a", "pub-link", link.label || "Link");
              a.href = link.url;
              linkRow.appendChild(a);
            });
            content.appendChild(linkRow);
          }
  
          if (pub.abstract) {
            var abstract = createElement("p", "pub-abstract", pub.abstract);
            content.appendChild(abstract);
          }
  
          card.appendChild(content);
          selectedContainer.appendChild(card);
        });
      }
  
      /* Publications: All list */
  
      var allList = document.getElementById("pub-all-list");
      if (allList && Array.isArray(pubs.all)) {
        allList.innerHTML = "";
        pubs.all.forEach(function (pub) {
          var item = createElement("article", "pub-list-item");
  
          var title = createElement("div", "pub-list-title", pub.title || "");
          item.appendChild(title);
  
          if (pub.authors) {
            var authors = createElement("div", "pub-list-authors");
            if (
              pub.highlightName &&
              pub.authors.indexOf(pub.highlightName) >= 0
            ) {
              var parts = pub.authors.split(pub.highlightName);
              authors.appendChild(document.createTextNode(parts[0]));
              var span = createElement(
                "span",
                "pub-author-highlight",
                pub.highlightName
              );
              authors.appendChild(span);
              if (parts[1]) {
                authors.appendChild(document.createTextNode(parts[1]));
              }
            } else {
              authors.textContent = pub.authors;
            }
            item.appendChild(authors);
          }
  
          if (pub.venue) {
            var meta = createElement("div", "pub-list-meta", pub.venue);
            item.appendChild(meta);
          }
  
          if (Array.isArray(pub.links) && pub.links.length > 0) {
            var linksDiv = createElement("div", "pub-list-links");
            pub.links.forEach(function (link) {
              if (!link || !link.url) return;
              var a = document.createElement("a");
              a.href = link.url;
              a.textContent = link.label || "link";
              linksDiv.appendChild(a);
            });
            item.appendChild(linksDiv);
          }
  
          allList.appendChild(item);
        });
      }
  
      /* 滚动相关交互：导航高亮、淡入动画、header 阴影 */
  
      var header = document.querySelector(".site-header");
      var navLinks = document.querySelectorAll('.nav-link[href^="#"]');
      var sections = document.querySelectorAll("section[id]");
      var hero = document.querySelector("#home");
  
      if (hero) {
        hero.classList.add("is-visible");
      }
  
      navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          var targetId = this.getAttribute("href").slice(1);
          var target = document.getElementById(targetId);
          if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });
  
      var scrollDown = document.querySelector(".scroll-down");
      if (scrollDown) {
        scrollDown.addEventListener("click", function (event) {
          var href = this.getAttribute("href");
          if (href && href.startsWith("#")) {
            var target = document.querySelector(href);
            if (target) {
              event.preventDefault();
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        });
      }
  
      if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              var id = entry.target.getAttribute("id");
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                if (id) {
                  document
                    .querySelectorAll(".nav-link")
                    .forEach(function (link) {
                      var href = link.getAttribute("href");
                      if (href && href === "#" + id) {
                        link.classList.add("active");
                      } else if (href && href.startsWith("#")) {
                        link.classList.remove("active");
                      }
                    });
                }
              }
            });
          },
          { threshold: 0.3 }
        );
  
        sections.forEach(function (section) {
          observer.observe(section);
        });
      } else {
        sections.forEach(function (section) {
          section.classList.add("is-visible");
        });
      }
  
      window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
          header.classList.add("site-header--scrolled");
        } else {
          header.classList.remove("site-header--scrolled");
        }
      });
  
      /* 展开/收起全部论文列表 */
  
      var toggleButtons = document.querySelectorAll('[data-toggle="pubs"]');
      toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          var targetId = this.getAttribute("data-target");
          var target = document.getElementById(targetId);
          if (target) {
            var expanded = target.classList.toggle("is-expanded");
            this.textContent = expanded
              ? "Hide older publications"
              : "Show all";
          }
        });
      });
    });
  })();
  