<template>
  <div
    class="mx-[24px] mt-[98px] py-[22px] px-[24px] flex gap-[16px] bg-white/70 rounded-[10px] shadow-md md:mx-auto md:mt-[176px] md:py-[16px] md:px-[16px] md:w-[298px]">
    <Head>
      <Title>Auth</Title>
    </Head>

    <div
      class="w-[88px] h-[88px] bg-white/80 shadow rounded-full overflow-hidden">
      <img
        v-if="urlPicture"
        :src="urlPicture"
        alt="profile picture"
        class="h-full w-full object-cover" />
    </div>
    <div>
      <p class="font-semibold text-[16px]">{{ name }}</p>
      <p class="text-[14px] -mt-[4px]">{{ email }}</p>
      <p
        @click="logOut"
        v-if="email"
        class="mt-[3px] text-[14px] text-[#EC665F] cursor-pointer">
        Log Out
      </p>
    </div>
  </div>
</template>

<script setup>
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../database/firebase';

const name = ref(null);
const email = ref(null);
const urlPicture = ref(null);

const logOut = async () => {
  await signOut(auth);
};

onAuthStateChanged(auth, user => {
  if (user) {
    setTimeout(() => {
      name.value = user.displayName;
      email.value = user.email;
      urlPicture.value = user.photoURL;
    }, 1000);
  } else {
    navigateTo('/login');
  }
});
</script>
