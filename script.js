/* =========================================================
   TOOTI BIRTHDAY WEBSITE
   JAVASCRIPT
   PART 1 — INITIAL SETUP & DOM ELEMENTS
   ========================================================= */


/* =========================================================
   WAIT FOR THE HTML DOCUMENT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       DOM ELEMENTS
       ===================================================== */

    const loadingScreen =
        document.getElementById("loading-screen");

    const mainContent =
        document.getElementById("main-content");

    const starsContainer =
        document.getElementById("stars-container");

    const heartsContainer =
        document.getElementById("hearts-container");


    /* =====================================================
       PAGE ELEMENTS
       ===================================================== */

    const pageOne =
        document.getElementById("page-one");

    const pageTwo =
        document.getElementById("page-two");

    const pageThree =
        document.getElementById("page-three");

    const pageFour =
        document.getElementById("page-four");

    const pageFive =
        document.getElementById("page-five");


    /* =====================================================
       BUTTON ELEMENTS
       ===================================================== */

    const startButton =
        document.getElementById("start-button");

    const nextButton =
        document.getElementById("next-button");

    const yesButton =
        document.getElementById("yes-button");


    /* =====================================================
       COUNTER ELEMENTS
       ===================================================== */

    const counterMonths =
        document.getElementById("counter-months");

    const counterWeeks =
        document.getElementById("counter-weeks");

    const counterDays =
        document.getElementById("counter-days");

    const counterHours =
        document.getElementById("counter-hours");

    const counterMinutes =
        document.getElementById("counter-minutes");

    const counterSeconds =
        document.getElementById("counter-seconds");


    /* =====================================================
       REASON ELEMENTS
       ===================================================== */

    const reasonText =
        document.getElementById("reason-text");


    /* =====================================================
       FINAL MESSAGE ELEMENTS
       ===================================================== */

    const notEvenClose =
        document.getElementById("not-even-close");

    const finalMessage =
        document.getElementById("final-message");


    /* =====================================================
       WEBSITE STATE
       ===================================================== */

    let currentReasonIndex = -1;

    let finalMessageStarted = false;


    /* =====================================================
       REASONS
       ===================================================== */

    const reasons = [
        "I have always loved your smile.",
        "The way you look at me.",
        "The joy entering my heart every-time I see you.",
        "I have always wanted to become better version of me just for you.",
        "You are the person I want to share every detail of my life with.",
        "I love every little thing about you.",
        "Because it’s simply You."
    ];


    /* =====================================================
       LOVE START DATE
       ===================================================== */

    const loveStartDate =
        new Date(
            2026,
            3,
            28,
            0,
            0,
            0
        );


    /* =====================================================
       BASIC PAGE VISIBILITY
       ===================================================== */

    function showPage(page) {

        if (!page) {
            return;
        }

        page.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }


    /* =====================================================
       INITIAL STATE
       ===================================================== */

    if (mainContent) {

        mainContent.style.opacity = "0";

        mainContent.style.transition =
            "opacity 1s ease";
    }


    /* =====================================================
       MAKE INITIAL HEARTS & STARS
       ===================================================== */

    createStars();

    createFloatingHearts();


    /* =====================================================
       LOADING SCREEN
       ===================================================== */

    setTimeout(() => {

        if (loadingScreen) {

            loadingScreen.classList.add("hidden");
        }

        if (mainContent) {

            mainContent.style.opacity = "1";
        }

    }, 3000);


    /* =====================================================
       START BUTTON
       ===================================================== */

    if (startButton) {

        startButton.addEventListener(
            "click",
            () => {

                showPage(pageTwo);

            }
        );
    }


    /* =====================================================
       START COUNTER
       ===================================================== */

    updateLoveCounter();

    setInterval(
        updateLoveCounter,
        1000
    );


   /* =====================================================
       CREATE STARS
       ===================================================== */

    function createStars() {

        if (!starsContainer) {
            return;
        }


        const numberOfStars =
            window.innerWidth < 600
                ? 70
                : 120;


        for (
            let i = 0;
            i < numberOfStars;
            i++
        ) {

            const star =
                document.createElement("div");


            star.classList.add("star");


            if (Math.random() > 0.82) {

                star.classList.add("large");
            }


            star.style.left =
                `${Math.random() * 100}%`;


            star.style.top =
                `${Math.random() * 100}%`;


            star.style.setProperty(
                "--star-duration",
                `${3 + Math.random() * 5}s`
            );


            star.style.setProperty(
                "--star-delay",
                `${Math.random() * 5}s`
            );


            starsContainer.appendChild(star);
        }
    }


    /* =====================================================
       CREATE FLOATING HEARTS
       ===================================================== */

    function createFloatingHearts() {

        if (!heartsContainer) {
            return;
        }


        const numberOfHearts =
            window.innerWidth < 600
                ? 18
                : 28;


        for (
            let i = 0;
            i < numberOfHearts;
            i++
        ) {

            const heart =
                document.createElement("div");


            heart.classList.add(
                "floating-heart"
            );


            heart.textContent = "💗";


            heart.style.setProperty(
                "--heart-left",
                `${Math.random() * 100}%`
            );


            heart.style.setProperty(
                "--heart-size",
                `${10 + Math.random() * 13}px`
            );


            heart.style.setProperty(
                "--heart-duration",
                `${7 + Math.random() * 7}s`
            );


            heart.style.setProperty(
                "--heart-delay",
                `${Math.random() * 8}s`
            );


            heart.style.setProperty(
                "--heart-x-one",
                `${-20 + Math.random() * 40}px`
            );


            heart.style.setProperty(
                "--heart-x-two",
                `${-25 + Math.random() * 50}px`
            );


            heart.style.setProperty(
                "--heart-x-three",
                `${-20 + Math.random() * 40}px`
            );


            heart.style.setProperty(
                "--heart-x-four",
                `${-25 + Math.random() * 50}px`
            );


            heartsContainer.appendChild(heart);
        }
    }


    /* =====================================================
       LOVE COUNTER
       ===================================================== */

    function updateLoveCounter() {

        const now =
            new Date();


        let difference =
            now.getTime()
            -
            loveStartDate.getTime();


        if (difference < 0) {

            difference = 0;
        }


        const totalSeconds =
            Math.floor(
                difference / 1000
            );


        const secondsInMinute =
            60;


        const secondsInHour =
            secondsInMinute * 60;


        const secondsInDay =
            secondsInHour * 24;


        const totalDays =
            Math.floor(
                totalSeconds /
                secondsInDay
            );


        const weeks =
            Math.floor(
                totalDays / 7
            );


        const days =
            totalDays;


        const hours =
            Math.floor(
                (
                    totalSeconds %
                    secondsInDay
                )
                /
                secondsInHour
            );


        const minutes =
            Math.floor(
                (
                    totalSeconds %
                    secondsInHour
                )
                /
                secondsInMinute
            );


        const seconds =
            totalSeconds %
            secondsInMinute;


        const months =
            calculateFullMonths(
                loveStartDate,
                now
            );


        if (counterMonths) {

            counterMonths.textContent =
                months;
        }


        if (counterWeeks) {

            counterWeeks.textContent =
                weeks;
        }


        if (counterDays) {

            counterDays.textContent =
                days;
        }


        if (counterHours) {

            counterHours.textContent =
                String(hours)
                    .padStart(2, "0");
        }


        if (counterMinutes) {

            counterMinutes.textContent =
                String(minutes)
                    .padStart(2, "0");
        }


        if (counterSeconds) {

            counterSeconds.textContent =
                String(seconds)
                    .padStart(2, "0");
        }
    }


    /* =====================================================
       CALCULATE FULL MONTHS
       ===================================================== */

    function calculateFullMonths(
        startDate,
        endDate
    ) {

        let months =
            (
                endDate.getFullYear()
                -
                startDate.getFullYear()
            )
            *
            12
            +
            (
                endDate.getMonth()
                -
                startDate.getMonth()
            );


        const anniversary =
            new Date(
                startDate
            );


        anniversary.setMonth(
            startDate.getMonth()
            +
            months
        );


        if (
            endDate.getTime()
            <
            anniversary.getTime()
        ) {

            months--;
        }


        return Math.max(
            0,
            months
        );
    }

});
/* =========================================================
   TOOTI BIRTHDAY WEBSITE
   JAVASCRIPT
   PART 2 — REASONS & FINAL MESSAGE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
       ===================================================== */

    const nextButton =
        document.getElementById("next-button");

    const reasonText =
        document.getElementById("reason-text");

    const yesButton =
        document.getElementById("yes-button");

    const notEvenClose =
        document.getElementById("not-even-close");

    const finalMessage =
        document.getElementById("final-message");

    const pageThree =
        document.getElementById("page-three");

    const pageFour =
        document.getElementById("page-four");

    const pageFive =
        document.getElementById("page-five");
  
    let finalMessageStarted = false;

    /* =====================================================
       REASONS
       ===================================================== */

    const reasons = [
        "I have always loved your smile.",
        "The way you look at me.",
        "The joy entering my heart every-time I see you.",
        "I have always wanted to become better version of me just for you.",
        "You are the person I want to share every detail of my life with.",
        "I love every little thing about you.",
        "Because it’s simply You."
    ];


    let currentReason =
        -1;


    let isReasonAnimating =
        false;


    /* =====================================================
       NEXT REASON
       ===================================================== */

    function showNextReason() {

        if (!reasonText) {
            return;
        }


        if (isReasonAnimating) {
            return;
        }


        if (
    currentReason >=
    reasons.length - 1
) {

    if (pageFour) {

        pageFour.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

    return;
}


        isReasonAnimating =
            true;


        /* ---------------------------------------------
           Remove previous animation
           --------------------------------------------- */

        reasonText.classList.remove(
            "visible"
        );


        reasonText.classList.add(
            "exit"
        );


        setTimeout(() => {

            currentReason++;


            reasonText.textContent =
                reasons[currentReason];


            reasonText.classList.remove(
                "exit"
            );


            /*
             * Small delay gives the browser
             * time to register the new state.
             */

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    reasonText.classList.add(
                        "visible"
                    );

                });

            });


            setTimeout(() => {

                isReasonAnimating =
                    false;

            }, 650);

        }, 350);
    }


    /* =====================================================
       NEXT BUTTON STATE
       ===================================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            showNextReason
        );
    }


    /* =====================================================
       YES BUTTON
       ===================================================== */

    if (yesButton) {

        yesButton.addEventListener(
            "click",
            () => {

                if (
                    finalMessageStarted
                ) {
                    return;
                }


                finalMessageStarted =
                    true;


                showFinalSequence();

            }
        );
    }


    /* =====================================================
       FINAL MESSAGE SEQUENCE
       ===================================================== */

    function showFinalSequence() {

        if (!pageFive) {
            return;
        }


        /*
         * Move to the final section.
         */

        pageFive.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


        /*
         * Make sure the first message
         * starts hidden.
         */

        if (notEvenClose) {

            notEvenClose.classList.remove(
                "fade-out"
            );


            notEvenClose.classList.add(
                "visible"
            );
        }


        /*
         * Wait exactly 2 seconds.
         */

        setTimeout(() => {

            if (notEvenClose) {

                notEvenClose.classList.add(
                    "fade-out"
                );
            }


            /*
             * Wait for the fade-out.
             */

            setTimeout(() => {

                if (notEvenClose) {

                    notEvenClose.style.display =
                        "none";
                }


                if (finalMessage) {

                    finalMessage.classList.add(
                        "visible"
                    );
                }


                startConfetti();

            }, 850);


        }, 2000);
    }


    /* =====================================================
       CONFETTI SYSTEM
       ===================================================== */

    function startConfetti() {

        const confettiContainer =
            document.createElement(
                "div"
            );


        confettiContainer.id =
            "confetti-container";


        confettiContainer.style.position =
            "fixed";


        confettiContainer.style.inset =
            "0";


        confettiContainer.style.pointerEvents =
            "none";


        confettiContainer.style.overflow =
            "hidden";


        confettiContainer.style.zIndex =
            "20";


        document.body.appendChild(
            confettiContainer
        );


        /*
         * Create a calm amount of confetti.
         */

        const numberOfPieces =
            window.innerWidth < 600
                ? 45
                : 70;


        for (
            let i = 0;
            i < numberOfPieces;
            i++
        ) {

            createConfettiPiece(
                confettiContainer,
                i
            );
        }


        /*
         * Continue adding a few pieces
         * slowly for a soft effect.
         */

        const gentleInterval =
            setInterval(() => {

                if (
                    !document.body.contains(
                        confettiContainer
                    )
                ) {

                    clearInterval(
                        gentleInterval
                    );

                    return;
                }


                for (
                    let i = 0;
                    i < 3;
                    i++
                ) {

                    createConfettiPiece(
                        confettiContainer,
                        i
                    );
                }

            }, 1800);


        /*
         * Stop generating new confetti
         * after 14 seconds.
         */

        setTimeout(() => {

            clearInterval(
                gentleInterval
            );

        }, 14000);
    }


    /* =====================================================
       CREATE ONE CONFETTI PIECE
       ===================================================== */

    function createConfettiPiece(
        container,
        index
    ) {

        const piece =
            document.createElement(
                "span"
            );


        piece.className =
            "confetti-piece";


        /*
         * Random size.
         */

        const size =
            5 +
            Math.random() * 7;


        piece.style.width =
            `${size}px`;


        piece.style.height =
            `${size * 0.55}px`;


        /*
         * Random starting position.
         */

        piece.style.left =
            `${Math.random() * 100}%`;


        piece.style.top =
            `${-20 - Math.random() * 80}px`;


        /*
         * Soft romantic colors.
         */

        const confettiColors = [
            "#f6c5cf",
            "#e89aaa",
            "#ffffff",
            "#ffd9e1",
            "#c96f84"
        ];


        piece.style.background =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];


        /*
         * Random rotation.
         */

        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        /*
         * Random falling duration.
         */

        const duration =
            6 +
            Math.random() * 7;


        /*
         * Random horizontal movement.
         */

        const drift =
            -100 +
            Math.random() * 200;


        piece.animate(
            [
                {
                    transform:
                        `translate3d(0, 0, 0)
                         rotate(0deg)`,

                    opacity: 0
                },

                {
                    opacity: 0.85,

                    offset: 0.08
                },

                {
                    transform:
                        `translate3d(
                            ${drift * 0.45}px,
                            45vh,
                            0
                        )
                        rotate(180deg)`,

                    opacity: 0.8,

                    offset: 0.5
                },

                {
                    transform:
                        `translate3d(
                            ${drift}px,
                            115vh,
                            0
                        )
                        rotate(360deg)`,

                    opacity: 0
                }
            ],
            {
                duration:
                    duration * 1000,

                delay:
                    Math.random() * 1800,

                easing:
                    "cubic-bezier(0.22, 0.61, 0.36, 1)",

                fill:
                    "forwards"
            }
        );


        container.appendChild(
            piece
        );


        /*
         * Remove the piece after
         * its animation is finished.
         */

        setTimeout(() => {

            if (
                container.contains(
                    piece
                )
            ) {

                piece.remove();
            }

        }, (duration + 3) * 1000);
    }


    /* =====================================================
       INITIAL REASON STATE
       ===================================================== */

    if (reasonText) {

        reasonText.textContent = "";

        reasonText.classList.remove(
            "visible"
        );
    }


    /* =====================================================
       SOFT LOADING HEART SHAKE
       ===================================================== */

    const loadingHeart =
        document.querySelector(
            ".loading-heart"
        );


    if (loadingHeart) {

        loadingHeart.animate(
            [
                {
                    transform:
                        "translateX(0)"
                },

                {
                    transform:
                        "translateX(-2px)"
                },

                {
                    transform:
                        "translateX(2px)"
                },

                {
                    transform:
                        "translateX(-1px)"
                },

                {
                    transform:
                        "translateX(1px)"
                },

                {
                    transform:
                        "translateX(0)"
                }
            ],
            {
                duration: 700,

                easing:
                    "ease-in-out",

                delay: 300,

                iterations: 2
            }
        );
    }


});
/* =========================================================
   TOOTI BIRTHDAY WEBSITE
   JAVASCRIPT
   PART 3 — FINAL POLISH & MOBILE EXPERIENCE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE VIEWPORT FIX
       ===================================================== */

    function setViewportHeight() {

        const viewportHeight =
            window.innerHeight * 0.01;

        document.documentElement.style.setProperty(
            "--vh",
            `${viewportHeight}px`
        );
    }


    setViewportHeight();


    window.addEventListener(
        "resize",
        setViewportHeight
    );


    /* =====================================================
       PREVENT DOUBLE-TAP ZOOM ON BUTTONS
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            "button"
        );


    buttons.forEach((button) => {

        button.addEventListener(
            "touchend",
            () => {

                button.blur();

            },
            {
                passive: true
            }
        );

    });


    /* =====================================================
       INTERSECTION OBSERVER
       FOR SOFT PAGE ENTRANCE ANIMATIONS
       ===================================================== */

    const pages =
        document.querySelectorAll(
            ".page"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const pageObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "page-visible"
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.35
                }
            );


        pages.forEach((page) => {

            pageObserver.observe(
                page
            );

        });

    }


    /* =====================================================
       KEEP BACKGROUND ELEMENTS BEHIND CONTENT
       ===================================================== */

    const starsContainer =
        document.getElementById(
            "stars-container"
        );


    const heartsContainer =
        document.getElementById(
            "hearts-container"
        );


    if (starsContainer) {

        starsContainer.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (heartsContainer) {

        heartsContainer.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    /* =====================================================
       STOP BACKGROUND ANIMATIONS
       WHEN TAB IS NOT VISIBLE
       ===================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            const animatedElements =
                document.querySelectorAll(
                    ".star, .floating-heart"
                );


            animatedElements.forEach(
                (element) => {

                    if (
                        document.hidden
                    ) {

                        element.style.animationPlayState =
                            "paused";

                    } else {

                        element.style.animationPlayState =
                            "running";

                    }

                }
            );

        }
    );


    /* =====================================================
       GENTLE HEART INTRODUCTION
       ===================================================== */

    const floatingHearts =
        document.querySelectorAll(
            ".floating-heart"
        );


    floatingHearts.forEach(
        (heart, index) => {

            heart.animate(
                [
                    {
                        transform:
                            "translateY(0) scale(0.65)",
                        opacity: 0
                    },

                    {
                        transform:
                            "translateY(-3px) scale(0.95)",
                        opacity: 0.5
                    },

                    {
                        transform:
                            "translateY(0) scale(0.75)",
                        opacity: 0
                    }
                ],
                {
                    duration: 650,

                    delay:
                        250 +
                        index * 18,

                    easing:
                        "ease-in-out"
                }
            );

        }
    );


    /* =====================================================
       SOFT PAGE GLOW
       ===================================================== */

    pages.forEach(
        (page) => {

            page.addEventListener(
                "pointermove",
                (event) => {

                    const rect =
                        page.getBoundingClientRect();


                    const x =
                        (
                            event.clientX -
                            rect.left
                        )
                        /
                        rect.width
                        *
                        100;


                    const y =
                        (
                            event.clientY -
                            rect.top
                        )
                        /
                        rect.height
                        *
                        100;


                    page.style.setProperty(
                        "--mouse-x",
                        `${x}%`
                    );


                    page.style.setProperty(
                        "--mouse-y",
                        `${y}%`
                    );

                }
            );

        }
    );


    /* =====================================================
       SMOOTH SCROLL SUPPORT
       ===================================================== */

    document.documentElement.style.scrollBehavior =
        "smooth";


    /* =====================================================
       HANDLE PAGE LOAD POSITION
       ===================================================== */

    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "instant"
        }
    );


    /* =====================================================
       SAFETY CHECK
       ===================================================== */

    window.addEventListener(
        "error",
        (event) => {

            /*
             * Prevent a single visual
             * animation error from breaking
             * the rest of the experience.
             */

            console.warn(
                "Website animation warning:",
                event.message
            );

        }
    );


    /* =====================================================
       FINAL READY STATE
       ===================================================== */

    document.documentElement.classList.add(
        "website-ready"
    );

});

/* =========================================================
   SCROLL HINT NAVIGATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const scrollHints =
            document.querySelectorAll(
                ".scroll-hint"
            );


        scrollHints.forEach(
            (hint) => {

                hint.addEventListener(
                    "click",
                    () => {

                        const targetId =
                            hint.dataset.target;


                        const target =
                            document.getElementById(
                                targetId
                            );


                        if (!target) {
                            return;
                        }


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }
                );

            }
        );

    }
);
