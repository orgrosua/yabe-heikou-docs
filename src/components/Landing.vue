<template>
    <header class="sticky@md top:0 flex w:full mx:auto z-index:99999 bg:white justify-content:center bb:1|solid|rgba(0,0,0,0.1)">
        <div class="flex w:full max-w:xl align-items:center px:32">
            <a href="/" class="flex">
                <h1 class="py:16 f:30">
                    <svg class="svg-inline--fa fill:current" viewBox="1 -42 511.999 511" xmlns="http://www.w3.org/2000/svg" id="fi_1817830">
                        <path d="m203.074219 106.675781c-14.398438 0-26.109375 11.714844-26.109375 26.109375 0 14.394532 11.710937 26.105469 26.109375 26.105469 14.394531 0 26.105469-11.710937 26.105469-26.105469 0-14.394531-11.710938-26.109375-26.105469-26.109375zm0 0"></path>
                        <path d="m508.699219 216.535156c-9.378907-53.6875-53.121094-93.699218-106.324219-99.117187v62.414062h-81.703125v-29.996093h51.707031v-54.679688l-.585937-.808594c-42.632813-58.773437-111.421875-93.847656-184.023438-93.847656-65.867187 0-128.417969 28.515625-171.621093 78.238281l-16.148438 18.574219v132.886719h93.066406c36.339844 0 66.015625 29.085937 66.964844 65.203125h113.167969l-.050781-10.996094c18.027343-3.171875 34.011718-12.121094 46.820312-26.347656 5.730469-6.367188 9.851562-12.707032 12.628906-17.714844h30.378906v26.550781h29.992188v-26.550781h29.519531v26.550781h29.996094v-26.550781h29.519531v26.554688h29.996094v-31.527344zm-305.625-27.648437c-30.9375 0-56.105469-25.167969-56.105469-56.101563s25.167969-56.101562 56.105469-56.101562c30.933593 0 56.101562 25.167968 56.101562 56.101562s-25.167969 56.101563-56.101562 56.101563zm0 0"></path>
                        <path d="m478.269531 325.648438h-24.625v-27.890626h-29.996093v27.890626h-29.976563v-27.890626h-29.996094v27.890626h-29.976562v-27.890626h-29.996094v27.890626h-173.640625v-28.457032c0-20.398437-16.597656-36.996094-36.996094-36.996094h-92.960937c1.585937 31.074219 24.394531 56.644532 54.167969 62.464844l6.535156 39.265625c6.429687 38.511719 39.4375 66.46875 78.488281 66.46875h277.226563c25.667968 0 49.152343-12.96875 62.820312-34.683593l28.917969-45.953126.003906-49.996093h-29.996094zm0 0"></path>
                    </svg>
                    Yabe Heikou
                </h1>
            </a>
            <div class="flex-grow:1"></div>
            <nav class="hidden flex@md primary-nav">
                <div class="flex align-items:center mr:18">
                    <a href="/#features" class="px:15 bg:blue-90:hover py:8:hover r:8">Features</a>
                    <a href="/#pricing" class="px:15 bg:blue-90:hover py:8:hover r:8">Pricing</a>
                    <a href="/en" class="px:15 bg:blue-90:hover py:8:hover r:8">Documentation</a>
                    <a href="https://www.facebook.com/groups/1142662969627943" class="px:15 bg:blue-90:hover py:8:hover r:8">Community</a>
                    <!-- <a class="px:15 bg:blue-90:hover py:8:hover r:8">Blogs</a> -->
                    <a href="https://rosua.org/checkout/order-history" class="px:15 bg:blue-90:hover py:8:hover r:8">Account</a>
                </div>
                <div class="flex align-items:center">
                    <a href="/#pricing" class="px:12 py:8 r:8 bg:green bg:green-40:hover fg:white">Get Yabe Heikou</a>
                </div>
            </nav>
            <div class="">
                <button @click="isMobileMenuOpen = true" class="block hidden@md">
                    <i class="fa-solid fa-bars f:30"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu overlay -->
        <Transition name="mobile-nav-slide">
            <div v-if="isMobileMenuOpen" class="z-index:10 fixed bg:blue-80 w:full h:full">
                <button @click="isMobileMenuOpen = false" class="fixed top:20 right:20">
                    <i class="fa-solid fa-xmark f:30"></i>
                </button>
                <nav class="align-items:center flex h:full primary-nav">
                    <ul class="mobile-menu__container flex flex:col gap-y:20 mx:auto text:center">
                        <li><a href="/#features" class="mobile-menu__link">Features</a></li>
                        <li><a href="/#pricing" class="mobile-menu__link">Pricing</a></li>
                        <li><a href="/en">Documentation</a></li>
                        <li><a href="https://www.facebook.com/groups/1142662969627943"></a>Community</li>
                        <li><a href="https://rosua.org/checkout/order-history">Account</a></li>
                    </ul>
                </nav>
            </div>
        </Transition>
    </header>
    <main id="main">
        <!-- Intro -->
        <div class="block-intro w:full max-w:xl mx:auto flex flex:column text:center my:60">
            <!-- Headline -->
            <div class="headline px:20 mx:30 my:30 lh:1.4">
                <!-- <h1 class="title mt:55 f:30 f:38@sm f:48@md font:bold fg:#222">The <span class="bg:grass-90 r:8 px:6">Design Sets Manager</span> Plugin for Oxygen</h1> -->
                <h1 class="title mt:55 f:30 f:38@sm f:48@md font:bold fg:#222">The <span class="bg:grass-90 r:8 px:6">Parallel</span> development support for Oxygen</h1>
                <p class="my:16 mx:65@md f:22 fg:gray-40">
                    Support multiple users and tabs of Oxygen editor simultaneously and changes synced in real-time.
                </p>
            </div>
            <!-- Core Features -->
            <div class="max-w:fit-content px:32 mx:auto mt:15 mb:30">
                <div class="feature__container grid-cols:2 grid-cols:3@sm grid-cols:6@lg grid-auto-cols:auto gap-x:15 gap-y:30 gap:64@sm">

                    <div class="feature__item ">
                        <div class="feature__icon fg:#4e6fc3">
                            <i class="fa-light fa-rectangle-history-circle-user"></i>
                        </div>
                        <div class="feature__title">
                            Multiple Oxygen editor
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon fg:#ff822d">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <div class="feature__title">
                            Synchronize in real-time
                        </div>
                    </div>

                    <div class="feature__item ">
                        <div class="feature__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M 355.332031 463.945312 C 362.226562 470.832031 370.421875 476.410156 379.515625 480.285156 C 388.757812 484.222656 398.925781 486.398438 409.601562 486.398438 C 452.015625 486.398438 486.398438 452.015625 486.398438 409.601562 C 486.398438 398.925781 484.222656 388.757812 480.285156 379.515625 C 476.410156 370.421875 470.832031 362.226562 463.945312 355.332031 C 450.046875 341.410156 430.828125 332.800781 409.601562 332.800781 C 367.183594 332.800781 332.800781 367.183594 332.800781 409.601562 C 332.800781 430.828125 341.410156 450.046875 355.332031 463.945312 Z M 474.210938 330.152344 C 456.585938 315.800781 434.097656 307.199219 409.601562 307.199219 C 353.046875 307.199219 307.199219 353.046875 307.199219 409.601562 C 307.199219 434.097656 315.800781 456.585938 330.152344 474.210938 C 306.882812 482.113281 281.941406 486.398438 256 486.398438 C 128.753906 486.398438 25.601562 383.246094 25.601562 256 C 25.601562 128.753906 128.753906 25.601562 256 25.601562 C 383.246094 25.601562 486.398438 128.753906 486.398438 256 C 486.398438 281.941406 482.113281 306.882812 474.210938 330.152344 Z M 493.71875 351.1875 C 505.511719 321.765625 512 289.640625 512 256 C 512 114.613281 397.382812 0 256 0 C 114.613281 0 0 114.613281 0 256 C 0 397.382812 114.613281 512 256 512 C 289.640625 512 321.765625 505.511719 351.1875 493.71875 C 367.757812 505.246094 387.886719 512 409.601562 512 C 466.152344 512 512 466.152344 512 409.601562 C 512 387.886719 505.246094 367.757812 493.71875 351.1875 Z M 493.71875 351.1875" fill="#7660e3"></path>
                            </svg>
                        </div>
                        <div class="feature__title">
                            Truly an Oxygen add-on
                        </div>
                    </div>

                    <div class="feature__item">
                        <div class="feature__icon fg:black">
                            <img src="assets/landing/highlighted-feature-pusher-channel.svg" alt="Pusher Channels" class="w:full">
                        </div>
                        <div class="feature__title">
                            Powered by Pusher Channels
                        </div>
                    </div>

                    <div class="feature__item">
                        <div class="feature__icon fg:crimson round">
                            <i class="fa-light fa-face-smile-hearts"></i>
                        </div>
                        <div class="feature__title">
                            Setup once and forget
                        </div>
                    </div>

                    <div class="feature__item">
                        <div class="feature__icon fg:sky">
                            <i class="fa-light fa-feather"></i>
                        </div>
                        <div class="feature__title">
                            Lightweight and blazingly fast
                        </div>
                    </div>

                </div>
            </div>
            <!-- CTA: Get Yabe Heikou Now -->
            <div class="cta my:20 flex flex:column gap:40">
                <a href="/#pricing" class="flex gap:10 align-items:center mx:auto py:20 px:48 bg:green bg:green-40:hover fg:white f:20 rounded">
                    Download Yabe Heikou Now
                    <i class="fa-solid fa-arrow-right-long hidden block@3xs a:hover_{translateX(35%)} ~easing:ease ~duration:300ms"></i>
                </a>

                <div class="badges__list grid-cols:1 grid-cols:2@sm grid-cols:4@md">
                    <!-- <div class="badges__item">
                        <div class="f:24">
                            <i class="fa-solid fa-hand-holding-dollar fg:#29b077"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong>Free</strong> Forever
                        </div>
                    </div> -->

                    <div class="badges__item">
                        <div class="f:24">
                            <i class="fa-solid fa-badge-dollar fg:#29b077"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong>14-day Money</strong>
                            <br> Back Guarantee
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24">
                            <i class="fa-solid fa-headset"></i>
                        </div>
                        <div class="f:12 text:left">
                            <div class="flex fg:#feb82c mb:2">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <strong>Support</strong> Quality
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24 fg:crimson">
                            <i class="fa-solid fa-face-smile-hearts"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong> {{ happyCustomers }}+ Happy</strong>
                            Users
                        </div>
                    </div>

                    <div class="badges__item">
                        <div class="f:24 fg:#4e6fc3">
                            <i class="fa-brands fa-wordpress"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong> {{ activeSites }}+ Active</strong>
                            Sites
                        </div>
                    </div>

                    <!-- <div class="badges__item">
                        <div class="f:24 fg:#4e6fc3">
                            <i class="fa-brands fa-wordpress"></i>
                        </div>
                        <div class="f:12 text:left">
                            <strong>{{ totalDownloads }}+ Download</strong> & Counting
                        </div>
                    </div> -->
                </div>
            </div>

            <!-- Sponsors -->
            <!-- <div class="mx:auto my:40 flex flex:row align-items:center gap:10">
                <a href="https://github.com/sponsors/suabahasa?o=esb" target="_blank" class="github-sponsor px:16 py:5 bg:#fafbfc bg:#f3f4f6:hover font:medium lh:20px r:6 b:1|solid|rgba(27,31,35,.15) ~background-color|.2s|cubic-bezier(0.3,0,0.5,1) text:none user-select:none">
                    <i class="fa-regular fa-heart mr:8 fg:#6a737d f:16 ~transform|.15s|cubic-bezier(0.2,0,0.13,2) scale(1) .github-sponsor:hover_{scale(1.1)}"></i>
                    <span class="f:14 fg:#24292e text-align:center ">Sponsor</span>
                </a>

                <div class="rel flex gap-x:10">
                    <canvas ref="pupRiveCanvas" class="abs z-index:3 h:36 top:-28 right:10"></canvas>
                    <a @mouseenter="$event => koFiHovered = true" @mouseleave="$event => koFiHovered = false" :href="wp_v12.donate_link" target="_blank">
                        <img class="h:28" src="https://storage.ko-fi.com/cdn/brandasset/kofi_button_dark.png" alt="Buy Me a Coffee at ko-fi.com" />
                    </a>
                </div>
            </div> -->

            <!-- Snapshot -->
            <div class="mx:30@sm mx:40@md my:30 px:20">
                <div class="rel bg:gray-90 r:8 p:10">
                    <figure>
                        <img width="1719" height="975" class="w:full h:auto" src="/assets/landing/intro-screenshot.png" alt="">
                    </figure>
                </div>
            </div>

            <!-- As seen on -->
            <div class="flex flex:column align-items:center justify-content:center mb:60 mx:30@sm mx:40@md py:30 r:8 bg:gray-98">
                <div class="f:24 fg:gray-40 mb:20 capitalize font:medium">As seen on</div>
                <!-- <div class="max-w:md grid-cols:1 grid-cols:2@sm grid-cols:4@md gap:20 gap:30@sm align-items:center">
                    <div v-for="seen_on in AS_SEEN_ON" class="flex justify-content:center">
                        <a :href="seen_on.url" target="_blank" rel="noopener noreferrer">
                            <img :src="seen_on.logo" :alt="seen_on.name" class="max-h:64 max-w:full" :title="seen_on.name">
                        </a>
                    </div>
                </div> -->

                <div class="mt:30 text:center">
                    <a href="https://rosua.org/support-portal" target="_blank" class="text:underline">
                        Are you interested in featuring us? We can offer you a free license.
                    </a>
                </div>
            </div>
        </div>

        <!-- Feature Section -->
        <div id="features" class="block-features max-w:xl flex flex:column align-items:center my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">
            <div class="px:8 py:4 mb:8 r:8 bg:sky-95 fg:sky-55 text:center uppercase font:bold ls:2">Fully-featured</div>
            <h2 class="mb:22 f:36 font:semibold text:center">Made for Oxygen Designers and Developers</h2>
            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    At Yabe Heikou, we created an <strong>easy-to-use plugin</strong> for Oxygen to help you simplify and accelerate website building.
                </p>
            </div>


            <!-- Highlighted features -->
            <div class="my:60 w:full">
                <!-- feature container -->
                <div class="feature__container grid grid-cols:1 grid-cols:12@md gap:20 my:30 pl:2%@sm w:full">
                    <div v-for="(feature, index) in HIGHLIGHTED_FEATURES" :class="[feature.class, `bg:${feature.color}-90`]" class="feature__item r:8 overflow:hidden">
                        <div class="h:430 h:600@md">
                            <div class="m:20">
                                <div :class="[`fg:${feature.color}-60`]" class="feature__item-title flex align-items:center column-gap:15">
                                    <i class="fa-solid fa-circle"></i>
                                    <div class="f:18 fg:gray-10 font:semibold">{{ feature.title }}</div>
                                </div>

                                <div class="mt:10 lh:1.5 overflow:hidden">
                                    <div v-html="feature.description"></div>
                                </div>
                            </div>

                            <!-- Feature snapshots -->
                            <div class="feature__snapshot rel pt:10">
                                <img :src="feature.image" :alt="feature.title" width="768" height="768" class="abs w:90% h:auto rtl:8 right:0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Highlighted features -->

            <!-- E-commerce integrations -->
            <!-- <div class="e-commerce-integration flex flex:column-reverse flex:row@md w:full my:60"> -->
                <!-- Feature Detail -->
                <!-- <div class="feature__detail my:30 flex flex:column flex-basis:37%@md align-items:flex-start justify-content:center w:full pr:3%@sm {bt:1|solid|gray-85}>:not([hidden])~:not([hidden])">
                    <div class="w:full flex flex:column align-items:flex-start">
                        <div class="px:8 py:4 mb:8 r:8 fg:indigo-55 bg:indigo-95 uppercase f:14 font:extrabold ls:3 ">
                            commerce-ready
                        </div>
                        <h2 class="mb:22 f:36 font:semibold">
                            E-commerce Platform Integrations
                        </h2>
                        <div class="f:18 lh:1.5">
                            Yabe Heikou provides <strong>effortless integration</strong> with the most widely used e-commerce platforms for WordPress.
                        </div>

                    </div>
                </div> -->

                <!-- E-commerce logo -->
                <!-- <div class="e-commerce__grids flex flex-grow:1">
                    <div class="w:full">
                        <div class="bg:indigo-95 p:20 r:8 flex flex:column align-items:center h:full overflow:hidden">
                            <div class="p:20 h:full w:full r:8 justify-items:center align-items:center grid-cols:2 grid-cols:3@sm grid-cols:4@xl grid-auto-flow:dense bg:white">
                                <a v-for="platform in E_COMMERCE" :href="platform.url" class="flex w:full align-items:center justify-content:center bg:gray-95:hover">
                                    <div class="p:20">
                                        <div class="flex flex:column align-items:center text:center">
                                            <img :src="platform.icon" :alt="platform.name" class="w:64 h:64">
                                            <div class="pt:10">
                                                {{ platform.name }}
                                                <i v-if="platform.pro" class="fa-solid fa-rectangle-pro fg:blue"></i>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> -->
            <!-- </div> -->
        </div>

        <!-- Testimonial -->
        <div id="testimonials" class="block-testimonials max-w:xl flex flex:column my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">

            <h2 class="mb:22 f:36 font:semibold text:center">Wall of Loves <i class="fa-solid fa-square-heart fg:crimson"></i></h2>
            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    We made not only a plugin that works but also a plugin that will make you smile.
                </p>
            </div>

            <div class="testimonials__wall w:full bg:gray-95 my:60 p:20 p:30@sm p:40@md r:8 ">

                <div class="testimonials__container cols:1 cols:2@sm cols:3@md gap-x:20">
                    <div v-for="testimonial in randomizeTestimonials" class="testimonials__item my:20 break-inside:avoid">
                        <figure class="r:16 bg:white p:20 box-shadow:rgb(255,255,255)|0px|0px|0px|0px,rgba(17,24,39,0.05)|0px|0px|0px|1px,rgba(0,0,0,0.1)|0px|0px|0px|0px,rgba(0,0,0,0.1)|0px|0px|6px|-4px box-shadow:rgb(255,255,255)|0px|0px|0px|0px,rgba(17,24,39,0.05)|0px|0px|0px|1px,rgba(0,0,0,0.1)|0px|10px|15px|-3px,rgba(0,0,0,0.1)|0px|4px|6px|-4px:hover">
                            <blockquote class="fg:#111827">
                                <p class="">{{ testimonial.message }}</p>
                            </blockquote>
                            <figcaption class="mt:24 flex align-items:center gap-x:16">
                                <img class="h:40 w:40 rounded obj:cover" :src="testimonial.submitterAvatar ?? '/assets/landing/testimonial-gravatar.svg'" alt="">
                                <div>
                                    <div class="font:semibold">{{ testimonial.submitterName }}</div>
                                    <div class="fg:gray-60">{{ testimonial.submitterTitle }}</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <div class="mt:30 text:center">
                    <a href="https://rosua.org/downloads/yabe-heikou#edd-reviews" target="_blank" class="text:underline">
                        submit your testimonial
                    </a>
                </div>
            </div>
        </div>

        <!-- Pricing -->
        <div id="pricing" class="block-pricing max-w:xl flex flex:column my:60 mx:20 mx:30@sm mx:40@md mx:auto@xl">

            <div class="flex flex:column align-items:center mb:16">
                <div class="px:16 py:6 r:8 bg:crimson-95 fg:crimson-55 b:1|solid|crimson-65 text:center font:medium ls:2 lh:1.5">
                    <i class="fa-solid fa-gift fg:crimson pr:6"></i> <span class="ls:1 font:bold">40% off</span> until <span class="ls:1 font:bold">Aug 20</span>, with code: <code class="font:extrabold bg:white">PARALLEL-OXYGEN</code>
                </div>
            </div>

            <!-- Title -->
            <h2 class="mb:22 f:36 font:semibold text:center">Pricing</h2>

            <div class="flex text:center justify-content:center">
                <p class="max-w:60%@md f:18 lh:1.5">
                    <!-- We have some generous plans for you to choose from. -->
                    Your time and coffee are precious, so we made some generous plans for you to choose from.
                </p>
            </div>

            <!-- <div class="flex justify-content:center my:30">
                <fieldset class="grid-cols:2 gap-x:4 rounded p:4 text:center f:14 font:semibold lh:1.6 box-shadow:rgb(255,255,255)|0px|0px|0px|0px|inset,rgb(229,231,235)|0px|0px|0px|1px|inset,rgba(0,0,0,0)|0px|0px|0px|0px">
                    <legend class="sr-only">Payment frequency</legend>
                    <label @click="selectedPricingDuration = 'year'" :class="[selectedPricingDuration === 'year' ? 'bg:blue fg:white' : 'fg:gray-40 bg:blue/.1:hover']" class="cursor:pointer rounded px:10 py:4">
                        <input type="radio" name="frequency" value="annually" class="sr-only">
                        <span>Annually</span>
                    </label>
                    <label @click="selectedPricingDuration = 'one-time'" :class="[selectedPricingDuration === 'one-time' ? 'bg:blue fg:white' : 'fg:gray-40  bg:blue/.1:hover']" class="cursor:pointer rounded px:10 py:4">
                        <input type="radio" name="frequency" value="one-time" class="sr-only">
                        <span>One-time</span>
                    </label>
                </fieldset>
            </div> -->

            <div class="my:15"></div>

            <div class="pricing__wall w:full bg:white my:30 ">

                <div :class="availablePricing.length % 3 === 0 ? 'grid-cols:3@md mx:5%@md' : 'grid-cols:2@md mx:15%@md'" class="pricing__container gap:20 grid-cols:1">
                    <div v-for="price in availablePricing" :class="{ 'most-popular': price.isMostPopular, 'emphasized': price.isEmphasized }" class="pricing__item r:8 p:32 p:40@md">
                        <div class="flex align-items:center justify-content:space-between gap-x:16">
                            <h3 class="pricing__item-title fg:gray-10 f:20 font:semibold lh:1.8">{{ price.title }}</h3>
                            <p v-if="price.isMostPopular" class="special-badge rounded fg:blue-40 bg:blue-90 px:10 py:4 f:12 font:semibold lh:1.65">
                                Most popular
                            </p>
                            <p v-if="price.isEmphasized" class="special-badge rounded fg:blue-40 bg:blue-90 px:10 py:4 f:12 font:semibold lh:1.65">
                                Most favored
                            </p>
                        </div>
                        <p class="pricing__item-subtitle mt:16 f:16 lh:1.72 fg:gray-40">{{ price.subtitle }}</p>
                        <p v-if="price.amount" class="pricing__item-amount mt:24 flex align-items:baseline gap-x:4">
                            <span class="f:36 font:bold ls:0.4 fg:gray-10">${{ price.amount }}</span>
                            <span v-if="price.duration !== 'one-time'" class="f:16 font:semibold lh:1.72 fg:gray-40">/year</span>
                        </p>
                        <p v-else class="pricing__item-amount mt:24 flex align-items:baseline gap-x:4">
                            <span class="f:36 font:bold ls:0.4 fg:gray-10">Free</span>
                        </p>
                        <a :href="price.purchaseButton.url" class="pricing__item-buy mt:24 block r:8 py:8 px:12 text:center f:16 font:semibold lh:1.72 focus-visible:outline outline-offset:2:focus-visible outline-color:blue:focus-visible">
                            {{ price.purchaseButton.text ?? 'Buy' }}
                        </a>
                        <ul role="list" class="pricing__item-feature-container mt:32 f:16 lh:1.72 fg:gray-50 mt:40@lg">
                            <li v-for="feature in price.features" class="flex gap-x:12">
                                <template v-if="typeof feature === 'object'">
                                    <i :class="feature.icon" class="h:24 w:20 flex:none fg:blue"></i>
                                    {{ feature.text }}
                                </template>
                                <template v-else>
                                    <i class="fa-solid fa-check h:24 w:20 flex:none fg:blue"></i>
                                    {{ feature }}
                                </template>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="mx:auto my:30 flex flex:column gap:40">
                    <div class="badges__list grid-cols:1 grid-cols:2@sm grid-cols:4@md">
                        <div class="badges__item">
                            <div class="f:24">
                                <i class="fa-solid fa-badge-dollar fg:#29b077"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong>14-day Money</strong>
                                <br> Back Guarantee
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24">
                                <i class="fa-solid fa-headset"></i>
                            </div>
                            <div class="f:12 text:left">
                                <div class="flex fg:#feb82c mb:2">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <strong>Support</strong> Quality
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24 fg:crimson">
                                <i class="fa-solid fa-face-smile-hearts"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong> {{ happyCustomers }}+ Happy</strong>
                                Users
                            </div>
                        </div>

                        <div class="badges__item">
                            <div class="f:24 fg:#4e6fc3">
                                <i class="fa-brands fa-wordpress"></i>
                            </div>
                            <div class="f:12 text:left">
                                <strong> {{ activeSites }}+ Active</strong>
                                Sites
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    </main>
    <footer class="flex flex:colum my:60">
        <div class="mx:auto flex align-items:center f:16 fg:gray" title="Made with hundred cups of coffee in Indonesia">
            Made with hundred <i class="fa-solid fa-mug px:8"></i> of <i class="fa-solid fa-coffee-bean px:8"></i> in <span class="font:bold px:4">Indonesia</span>
        </div>
    </footer>
</template>

<script setup>
import { ref, watch, computed, onBeforeMount, onMounted } from 'vue';
// import { Rive } from '@rive-app/canvas';

/** @type {Rive} */
// let pupRive = null;
// const koFiHovered = ref(false);

// const pupRiveCanvas = ref(null);

const isMobileMenuOpen = ref(false);

const happyCustomers = ref(0);
const activeSites = ref(0);
const totalDownloads = ref(0);

// const wp_v10 = ref({
//     downloaded: 1,
// });
// const wp_v12 = ref({
//     version: '1.0.0',
//     active_installs: 1,
//     donate_link: 'https://ko-fi.com/Q5Q75XSF7',
//     download_link: '/#pricing',
// });

const HIGHLIGHTED_FEATURES = [
    {
        title: 'Collaborative development',
        description: `You and your team can simultaneously open multiple Oxygen editors which synchronize in real-time, allowing for faster and more efficient work.`,
        image: '/assets/landing/feature-collaborative-development.png',
        color: 'blue',
        class: 'grid-col-span:6',
    },
    {
        title: 'Lightweight and blazingly fast',
        description: `The sync feature is built on Oxygen's History system and Pusher Channels for real-time data sync between multiple Oxygen editors. It has a small footprint and won't slow down your Oxygen editor.`,
        image: '/assets/landing/feature-lightweight-blazingly-fast.png',
        color: 'grass',
        class: 'grid-col-span:6',
    },
];

const TESTIMONIALS = [
    {
        createdAt: '2023-01-01',
        submitterName: 'Joshua Gugun Siagian',
        submitterAvatar: '/assets/landing/testimonial-joshua-gugun-siagian.jpg',
        submitterTitle: 'Rosua.org',
        message: ``
    },
];

const AS_SEEN_ON = [
    {
        name: 'Rosua',
        url: 'https://rosua.org',
        logo: '/assets/landing/as-seen-on-rosua.png',
    },
];

const E_COMMERCE = [
    {
        name: 'WooCommerce',
        url: '/en/e-commerce/woocommerce/',
        icon: 'assets/landing/e-commerce-woocommerce.svg',
    },
    {
        name: 'Easy Digital Downloads',
        url: '/en/e-commerce/easy-digital-downloads/',
        icon: 'assets/landing/e-commerce-easy-digital-downloads.svg',
        pro: true,
    },
    {
        name: 'SureCart (Soon)',
        url: 'https://surecart.com/?sc=298',
        icon: 'assets/landing/e-commerce-surecart.svg',
        pro: true,
    },
];

const PRICING = [
    // {
    //     duration: 'year',
    //     amount: 0,
    //     isMostPopular: false,
    //     isEmphasized: false,
    //     title: 'Starter',
    //     subtitle: 'Get started with the free version and enjoy the full features',
    //     features: [
    //         'All features',
    //         {
    //             icon: 'fa-regular fa-asterisk',
    //             text: 'Limited integrations'
    //         },
    //         {
    //             icon: 'fa-regular fa-planet-ringed',
    //             text: 'Unlimited personal sites'
    //         },
    //         {
    //             icon: 'fa-regular fa-planet-ringed',
    //             text: 'Unlimited client sites'
    //         },
    //         {
    //             icon: 'fa-solid fa-rotate',
    //             text: 'Free updates'
    //         },
    //         {
    //             icon: 'fa-solid fa-messages',
    //             text: 'Community support'
    //         },
    //     ],
    //     purchaseButton: {
    //         text: 'Download',
    //         url: '/#pricing',
    //     },
    // },
    {
        duration: 'year',
        amount: 19,
        isMostPopular: false,
        isEmphasized: false,
        title: 'Personal',
        subtitle: 'Best for blogger, individual & solopreneur',
        features: [
            'All features',
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-headset',
                text: 'Standard support'
            },
        ],
        purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=1326&edd_options[price_id]=1' },
    },
    {
        duration: 'year',
        amount: 39,
        isMostPopular: true,
        isEmphasized: false,
        title: 'Agency',
        subtitle: 'Perfect For Agency Owners with high volume',
        features: [
            'All features',
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited personal sites'
            },
            {
                icon: 'fa-regular fa-planet-ringed',
                text: 'Unlimited client sites'
            },
            {
                icon: 'fa-solid fa-rotate',
                text: 'Free updates'
            },
            {
                icon: 'fa-solid fa-headset',
                text: 'Standard support'
            },
        ],
        purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=1326&edd_options[price_id]=2' },
    },
    // {
    //     duration: 'one-time',
    //     amount: 79,
    //     isMostPopular: false,
    //     isEmphasized: false,
    //     title: 'Personal',
    //     subtitle: 'Best for blogger, individual & solopreneur',
    //     features: [
    //         'All features',
    //         'All integrations',
    //         {
    //             icon: 'fa-regular fa-planet-ringed',
    //             text: 'Unlimited personal sites'
    //         },
    //         {
    //             icon: 'fa-solid fa-rotate',
    //             text: 'Free updates'
    //         },
    //         {
    //             icon: 'fa-solid fa-headset',
    //             text: 'Standard support (first year)'
    //         },
    //     ],
    //     purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=1326&edd_options[price_id]=3' },
    // },
    // {
    //     duration: 'one-time',
    //     amount: 159,
    //     isMostPopular: false,
    //     isEmphasized: true,
    //     title: 'Agency',
    //     subtitle: 'Perfect For Agency Owners with high volume',
    //     features: [
    //         'All features',
    //         'All integrations',
    //         {
    //             icon: 'fa-regular fa-planet-ringed',
    //             text: 'Unlimited personal sites'
    //         },
    //         {
    //             icon: 'fa-regular fa-planet-ringed',
    //             text: 'Unlimited client sites'
    //         },
    //         {
    //             icon: 'fa-solid fa-rotate',
    //             text: 'Free updates'
    //         },
    //         {
    //             icon: 'fa-solid fa-headset',
    //             text: 'Standard support (first year)'
    //         },
    //     ],
    //     purchaseButton: { url: 'https://rosua.org/checkout/?edd_action=add_to_cart&download_id=1326&edd_options[price_id]=4' },
    // },
];

const selectedFeatureIndex = ref(0);
const getSelectedFeature = computed(() => {
    return HIGHLIGHTED_FEATURES[selectedFeatureIndex.value];
});

const randomizeTestimonials = computed(() => {
    // return TESTIMONIALS;
    return [];
});

// available pricing duration: year, one-time
const selectedPricingDuration = ref('year');

const availablePricing = computed(() => {
    return PRICING.filter(item => item.duration === selectedPricingDuration.value);
});

// watch(koFiHovered, (value) => {
//     pupRive.stateMachineInputs('YeyMachine')[0].value = value;
// });

watch(isMobileMenuOpen, (newState, oldState) => {
    if (newState) {
        setTimeout(() => {
            // auto close the mobile nav when menu item is clicked
            const mobileNavLinks = document.querySelectorAll('.mobile-menu__link');
            mobileNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    isMobileMenuOpen.value = false;
                });
            });
        }, 100);
    }
});

onBeforeMount(() => {
    fetch('https://rosua.org/wp-json/rosua-edd/v1/stats/total_users')
        .then(res => res.json())
        .then(res => {
            happyCustomers.value += res[0].count_users;
        })
        .catch(err => {
            console.log(err);
        });

    fetch('https://rosua.org/wp-json/rosua-edd/v1/stats/total_sites')
        .then(res => res.json())
        .then(res => {
            // search array of object with download_id = 1326 (Yabe Heikou)
            const download = res.find(item => item.download_id === 1326);
            activeSites.value += download.count_sites;
            totalDownloads.value += download.count_sites;
        })
        .catch(err => {
            console.log(err);
        });

    // fetch('https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&slug=yabe-heikou')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error("Not 2xx response", { cause: response });
    //         }

    //         return response.json();
    //     })
    //     .then(data => {
    //         wp_v12.value = data;
    //         activeSites.value += wp_v12.value.active_installs;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // fetch('https://api.wordpress.org/plugins/info/1.0/yabe-heikou.json')
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error("Not 2xx response", { cause: response });
    //         }

    //         return response.json();
    //     })
    //     .then(data => {
    //         wp_v10.value = data;
    //         totalDownloads.value += wp_v10.value.downloaded;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
});

onMounted(() => {

    setTimeout(() => {
        // if hash is not empty, scroll to the element
        const hash = window.location.hash;
        if (hash) {
            const el = document.querySelector(hash);

            if (el) {
                el.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        }

        window.themeService.current = 'light';
    }, 100);


    // pupRive = new Rive({
    //     src: 'https://cdn.jsdelivr.net/gh/orgrosua/yabe-heikou-docs/public/assets/landing/pup.riv',
    //     canvas: pupRiveCanvas.value,
    //     autoplay: true,
    //     stateMachines: 'YeyMachine',
    //     onLoad: () => {
    //         pupRive.resizeDrawingSurfaceToCanvas();
    //     },
    // });

    // Refresh the lightbox when the DOM is ready
    window.refreshFsLightbox();
});
</script>

<style lang="scss">
/* Typography */
* {
    font-family: "Outfit", sans-serif;
}

html {
    scroll-behavior: smooth;
}

.primary-nav {
    font-weight: 600;
}

.block-intro {
    .feature__container {}

    .feature__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }

    .feature__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        width: 64px;
        height: 64px;
        background-color: #f9f8fa;
        border-radius: 50%;

        svg:not(.svg-inline--fa) {
            width: 40px;
            height: 40px;
        }
    }

    .feature__title {
        font-size: 16px;
        color: #555456;
        max-width: 120px;
    }
}

.badges__list {
    margin-left: auto;
    margin-right: auto;
    // display: flex;
    gap: 10px;
}

.badges__item {
    display: flex;
    gap: 8px;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 6px;
    padding-bottom: 6px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 160px;
    border-radius: 1e9em;
}

code {
    padding: 2px 4px;
    font-size: .9rem;
    line-height: 1;
    background-color: #afb8c133;
    border-radius: 6px;
    font-weight: 300;
}

/*
  Mobile nav overlay slide transition
*/
.mobile-nav-slide-enter-active {
    transition: all 0.3s ease-out;
}

.mobile-nav-slide-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.mobile-nav-slide-enter-from,
.mobile-nav-slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.testimonials__item blockquote p {
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    line-height: 1.4;
}

$color-blue-50: #175fe9;
$color-blue-55: #2671ea;

$color-blue-70: #81acf3;
$color-blue-80: #c6dbfe;

$tw-color-gray-300: #d1d5db;
$tw-color-gray-900: #111827;

@function hexAlpha($hex, $alpha) {
    $opacity: $alpha * 100%;
    @return rgba(red($hex), green($hex), blue($hex), $opacity);
}

.pricing__item {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgb(229, 231, 235) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

    // if not most popular and not emphasized
    &:not(.most-popular):not(.emphasized) {
        .pricing__item-buy {
            color: $color-blue-50;
            box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, $color-blue-80 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

            &:hover {
                box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px inset, $color-blue-70 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
            }
        }
    }

    .pricing__item-feature-container {
        &>:not([hidden])~:not([hidden]) {
            margin-top: 0.75rem;
        }
    }

    &.most-popular {
        box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, $color-blue-50 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;

        .pricing__item-title {
            color: $color-blue-50;
        }

        .pricing__item-buy {
            color: white;
            background-color: $color-blue-50;

            &:hover {
                background-color: $color-blue-55;
            }
        }

    }

    &.emphasized {
        background-color: $tw-color-gray-900;

        .pricing__item-title,
        .pricing__item-amount>span {
            color: white;
        }

        .pricing__item-subtitle,
        .pricing__item-feature-container>li {
            color: $tw-color-gray-300;

            svg {
                color: white;
            }
        }

        .pricing__item-buy {
            color: white;
            background-color: hexAlpha(#fff, 0.1);

            &:hover {
                background-color: hexAlpha(#fff, 0.2);
            }
        }

        .special-badge {
            color: white;
            background-color: hexAlpha(#fff, 0.1);
        }
    }
}
</style>