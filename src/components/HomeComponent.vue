<!-- 
  <template>
    <section class="h-screen relative overflow-hidden mt-0" id="home">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hi, I am Charlene</h1>
            <p class="mt-4 text-xl text-gray-500">
              A highly skilled and detail-oriented virtual assistant with extensive experience in administrative support, customer service, and project management. Proficient in handling a wide range of tasks.
            </p>
          </div>

          <div>
            <div class="mt-10">
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="size-full object-cover" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="size-full object-cover" />
                      </div>
                    </div>
                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="size-full object-cover" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" class="size-full object-cover" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="size-full object-cover" />
                      </div>
                    </div>
                    <div class="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="size-full object-cover" />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="size-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">Let's Talk</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template> 
-->


<template>
  <section class="h-screen flex items-center justify-center" id="home">
    <div class="px-6 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div class="grid gap-8 lg:grid-cols-2">

        <!-- Text Section: Wider div -->
        <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-3xl">
          <div class="max-w-xl mb-6">
            <h2 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Hi, I am Charlene
            </h2>
            <p class="mt-6 text-2xl text-gray-600">
              A highly skilled and detail-oriented virtual assistant with extensive experience in administrative
              support, customer service, and project management. Proficient in handling a wide range of tasks.
            </p>
          </div>
          <div>
            <a href="#contact"
              class="inline-block rounded-md border border-transparent bg-indigo-600 px-10 py-4 text-center font-medium text-white hover:bg-indigo-700">
              Let's Talk
            </a>
          </div>
        </div>

        <!-- Image Section: Narrower div -->
        <div class="flex items-center justify-center -mx-4 lg:pl-8">
          <div class="flex flex-col items-end px-3">
            <img class="object-cover mb-6 rounded shadow-lg h-40 sm:h-56 xl:h-64 w-40 sm:w-56 xl:w-64"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="" />
            <img class="object-cover w-28 h-28 rounded shadow-lg sm:h-40 xl:h-48 sm:w-40 xl:w-48"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="" />
          </div>
          <div class="px-3">
            <img class="object-cover w-48 h-48 rounded shadow-lg sm:h-72 xl:h-96 sm:w-72 xl:w-96"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

