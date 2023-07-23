<template>
  <div
    class="text-[#3B3B3B] h-[100vh] w-[100vw] flex flex-col justify-between overflow-hidden bg-cover bg-[url('/assets/gradient.svg')]">
    <NuxtPage />
    <div class="mx-auto mb-[10px] flex flex-col items-center text-[19px]">
      <p>© Alexandr Kalmaev</p>
      <a
        href="https://github.com/shtxkrxl"
        target="_blank"
        class="flex items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3B3B3B"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-github">
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <p>GitHub</p>
      </a>
    </div>
  </div>
</template>
