/* =========================================
   DEVdut KHASTAGIR
   MUSIC PORTFOLIO
========================================= */


/* =========================================
   MUSIC DATA
========================================= */

/*
   IMPORTANT:

   Replace the YouTube IDs below with the IDs
   of your actual YouTube videos.

   Example:

   YouTube URL:
   https://www.youtube.com/watch?v=ABC123XYZ

   Video ID:
   ABC123XYZ
*/

const covers = [

    {
        title: "Tum Hi Ho",
        artist: "Aashiqui 2 Cover",
        date: "May 12, 2024",
        duration: "3:54",
        image: "assets/cover-1.jpg",
        youtube: "YOUR_VIDEO_ID_1"
    },

    {
        title: "Channa Mereya",
        artist: "Ae Dil Hai Mushkil Cover",
        date: "April 28, 2024",
        duration: "4:28",
        image: "assets/cover-2.jpg",
        youtube: "YOUR_VIDEO_ID_2"
    },

    {
        title: "Agar Tum Saath Ho",
        artist: "Tamasha Cover",
        date: "April 10, 2024",
        duration: "3:41",
        image: "assets/cover-3.jpg",
        youtube: "YOUR_VIDEO_ID_3"
    },

    {
        title: "Raabta",
        artist: "Agent Vinod Cover",
        date: "March 20, 2024",
        duration: "4:03",
        image: "assets/cover-4.jpg",
        youtube: "YOUR_VIDEO_ID_4"
    },

    {
        title: "Tera Ban Jaunga",
        artist: "Kabir Singh Cover",
        date: "March 5, 2024",
        duration: "3:48",
        image: "assets/cover-5.jpg",
        youtube: "YOUR_VIDEO_ID_5"
    },

    {
        title: "Hawayein",
        artist: "Jab Harry Met Sejal Cover",
        date: "February 18, 2024",
        duration: "4:12",
        image: "assets/cover-6.jpg",
        youtube: "YOUR_VIDEO_ID_6"
    },

    {
        title: "Pehla Nasha",
        artist: "Jo Jeeta Wohi Sikandar Cover",
        date: "February 2, 2024",
        duration: "4:01",
        image: "assets/cover-1.jpg",
        youtube: "YOUR_VIDEO_ID_7"
    },

    {
        title: "Kesariya",
        artist: "Brahmastra Cover",
        date: "January 20, 2024",
        duration: "3:56",
        image: "assets/cover-2.jpg",
        youtube: "YOUR_VIDEO_ID_8"
    },

    {
        title: "Phir Le Aaya Dil",
        artist: "Barfi Cover",
        date: "January 5, 2024",
        duration: "4:20",
        image: "assets/cover-3.jpg",
        youtube: "YOUR_VIDEO_ID_9"
    },

    {
        title: "Zara Zara",
        artist: "Rehnaa Hai Terre Dil Mein Cover",
        date: "December 18, 2023",
        duration: "4:10",
        image: "assets/cover-4.jpg",
        youtube: "YOUR_VIDEO_ID_10"
    },

    {
        title: "Iktara",
        artist: "Wake Up Sid Cover",
        date: "December 2, 2023",
        duration: "3:44",
        image: "assets/cover-5.jpg",
        youtube: "YOUR_VIDEO_ID_11"
    },

    {
        title: "Tujh Mein Rab Dikhta Hai",
        artist: "Rab Ne Bana Di Jodi Cover",
        date: "November 20, 2023",
        duration: "4:16",
        image: "assets/cover-6.jpg",
        youtube: "YOUR_VIDEO_ID_12"
    }

];


/* =========================================
   DOM ELEMENTS
========================================= */

const coversGrid =
    document.getElementById("coversGrid");

const showMoreBtn =
    document.getElementById("showMoreBtn");

const videoModal =
    document.getElementById("videoModal");

const videoFrame =
    document.getElementById("videoFrame");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalArtist =
    document.getElementById("modalArtist");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const imageModalClose =
    document.getElementById("imageModalClose");

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const header =
    document.getElementById("header");


/* =========================================
   COVER DISPLAY
========================================= */

let showAll = false;

const initialCovers = 4;


function displayCovers() {

    if (!coversGrid) return;

    const visibleCovers = showAll
        ? covers
        : covers.slice(0, initialCovers);

    coversGrid.innerHTML = "";

    visibleCovers.forEach((cover, index) => {

        const card =
            document.createElement("article");

        card.className =
            "cover-card reveal";

        card.style.transitionDelay =
            `${index * 0.05}s`;

        card.innerHTML = `

            <div class="cover-thumbnail">

                <img
                    src="${cover.image}"
                    alt="${cover.title} - ${cover.artist}"
                    loading="lazy"
                >

                <div class="thumbnail-overlay"></div>

                <div class="play-button">
                    <i class="fa-solid fa-play"></i>
                </div>

                <span class="cover-duration">
                    ${cover.duration}
                </span>

            </div>

            <div class="cover-info">

                <h3>
                    ${cover.title}
                </h3>

                <p>
                    ${cover.artist}
                </p>

                <p>
                    ${cover.date}
                </p>

            </div>

        `;

        card.addEventListener("click", () => {

            openVideo(
                cover.youtube,
                cover.title,
                cover.artist
            );

        });

        coversGrid.appendChild(card);

    });

    observeRevealElements();

    if (showAll) {

        showMoreBtn.innerHTML = `
            Show Less
            <i class="fa-solid fa-arrow-up"></i>
        `;

    } else {

        showMoreBtn.innerHTML = `
            View All Covers
            <i class="fa-solid fa-arrow-right"></i>
        `;

    }

}


/* =========================================
   SHOW MORE
========================================= */

if (showMoreBtn) {

    showMoreBtn.addEventListener(
        "click",
        () => {

            showAll = !showAll;

            displayCovers();

            if (showAll) {

                document
                    .getElementById("covers")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }

        }
    );

}


/* =========================================
   VIDEO MODAL
========================================= */

function openVideo(
    videoId,
    title,
    artist
) {

    if (
        !videoId ||
        videoId.includes("YOUR_VIDEO_ID")
    ) {

        alert(
            "Please add your YouTube video ID in script.js first."
        );

        return;
    }

    videoFrame.src =
        `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    modalTitle.textContent = title;

    modalArtist.textContent = artist;

    videoModal.classList.add("active");

    document.body.classList.add("modal-open");

}


function closeVideo() {

    videoModal.classList.remove("active");

    videoFrame.src = "";

    document.body.classList.remove("modal-open");

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeVideo
    );

}


const modalOverlay =
    document.querySelector(".modal-overlay");

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeVideo
    );

}


/* =========================================
   GALLERY MODAL
========================================= */

const galleryItems =
    document.querySelectorAll(".gallery-item");

galleryItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const image =
                item.querySelector("img");

            if (!image) return;

            modalImage.src =
                image.src;

            modalImage.alt =
                image.alt;

            imageModal.classList.add("active");

            document.body.classList.add("modal-open");

        }
    );

});


function closeImageModal() {

    imageModal.classList.remove("active");

    modalImage.src = "";

    document.body.classList.remove("modal-open");

}


if (imageModalClose) {

    imageModalClose.addEventListener(
        "click",
        closeImageModal
    );

}


if (imageModal) {

    imageModal.addEventListener(
        "click",
        event => {

            if (
                event.target === imageModal
            ) {

                closeImageModal();

            }

        }
    );

}


/* =========================================
   ESC KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        closeVideo();

        closeImageModal();

        closeMobileMenu();

    }
);


/* =========================================
   MOBILE MENU
========================================= */

function closeMobileMenu() {

    navMenu.classList.remove("active");

    menuToggle.classList.remove("active");

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle("active");

            menuToggle.classList.toggle("active");

        }
    );

}


const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            closeMobileMenu();

        }
    );

});


/* =========================================
   HEADER SCROLL
========================================= */

function handleHeader() {

    if (
        window.scrollY > 50
    ) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    handleHeader
);

handleHeader();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove(
                    "active"
                );

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================================
   SCROLL REVEAL
========================================= */

function observeRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.visible)"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear =
    document.getElementById(
        "currentYear"
    );

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================
   PRELOADER
========================================= */

window.addEventListener(
    "load",
    () => {

        const preloader =
            document.querySelector(
                ".preloader"
            );

        setTimeout(
            () => {

                preloader.classList.add(
                    "hide"
                );

            },
            500
        );

    }
);


/* =========================================
   INITIALIZE
========================================= */

displayCovers();

observeRevealElements();

updateActiveNav();
