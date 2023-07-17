<template>
  <div
    class="mx-[40px] mt-[98px] py-[22px] px-[40px] flex flex-col gap-[12px] bg-white/70 rounded-[10px] shadow-md md:mx-auto md:mt-[176px] md:py-[16px] md:px-[21px] md:w-[234px]">
    <p class="text-[20px] font-semibold text-center md:text-[16px]">Login</p>

    <div class="text-[16px] md:text-[14px]">
      <p>E-mail</p>
      <input
        v-model="email"
        type="email"
        class="mt-[6px] md:mt-[2px] px-[8px] w-full bg-transparent rounded-[5px] border-[1.5px] border-[#3B3B3B] focus:outline-none" />
    </div>

    <div class="text-[16px] md:text-[14px]">
      <p>Password</p>
      <input
        v-model="password"
        type="password"
        class="mt-[6px] md:mt-[2px] px-[8px] w-full bg-transparent rounded-[5px] border-[1.5px] border-[#3B3B3B] focus:outline-none" />
    </div>

    <button
      @click="login"
      class="mx-auto mt-[12px] w-[200px] md:w-[120px] py-[4px] bg-red-400 rounded-[5px] text-white text-[16px] md:text-[12px] text-center font-semibold shadow">
      Sign In
    </button>

    <p
      v-if="errorMessage"
      class="-mt-[4px] font-bold text-red-500 text-center text-[14px] md:text-[12px]">
      {{ errorMessage }}
    </p>

    <p class="-mt-[4px] text-center text-[14px] md:text-[12px]">
      Doesn't have an account?
      <NuxtLink
        to="/registration"
        class="text-[#EC665F] font-semibold cursor-pointer"
        >Sign Up</NuxtLink
      >
    </p>
  </div>
</template>

<script setup>
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../database/firebase';

const email = ref(null);
const password = ref(null);
const errorMessage = ref(null);

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value).catch(error => {
    if (
      error.message === 'Firebase: Error (auth/user-not-found).' ||
      error.message === 'Firebase: Error (auth/wrong-password).'
    ) {
      errorMessage.value = 'Invalid email or password';
    } else {
      errorMessage.value = error.message;
    }
  });
};

onAuthStateChanged(auth, user => {
  if (user) {
    navigateTo('/');
  }
});
</script>
