<template>
  <div
    class="mx-[40px] mt-[98px] py-[22px] px-[40px] flex flex-col gap-[12px] bg-white/70 rounded-[10px] shadow-md md:mx-auto md:mt-[176px] md:py-[16px] md:px-[21px] md:w-[234px]">
    <Head>
      <Title>Registration</Title>
    </Head>

    <p class="text-[20px] font-semibold text-center md:text-[16px]">
      Registration
    </p>

    <div class="text-[16px] md:text-[14px]">
      <p>Name</p>
      <input
        v-model="name"
        class="mt-[6px] md:mt-[2px] px-[8px] w-full bg-transparent rounded-[5px] border-[1.5px] border-[#3B3B3B] focus:outline-none" />
    </div>

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

    <div>
      <p class="text-[16px] md:text-[14px]">Profile picture</p>
      <div class="mt-[6px] md:mt-[2px] flex gap-[8px] items-center">
        <div
          class="h-[48px] w-[48px] md:h-[48px] md:w-[48px] rounded-full bg-white/80 shadow overflow-hidden">
          <img
            v-if="urlPicture"
            :src="urlPicture"
            alt="profile picture"
            class="h-full w-full" />
        </div>
        <input
          id="file"
          type="file"
          accept="image/jpeg,image/png"
          @change="onFileChange"
          class="hidden" />
        <label
          for="file"
          class="py-[3px] px-[12px] bg-white/80 rounded-[5px] text-center text-[14px] md:text-[12px] shadow cursor-pointer">
          Choose file
        </label>
      </div>
    </div>

    <button
      @click="createUser"
      class="mx-auto mt-[4px] w-[200px] md:w-[120px] py-[4px] bg-red-400 rounded-[5px] text-white text-[16px] md:text-[12px] text-center font-semibold shadow">
      Sign Up
    </button>

    <p
      v-if="errorMessage"
      class="-mt-[4px] font-bold text-red-500 text-center text-[14px] md:text-[12px]">
      {{ errorMessage }}
    </p>

    <p class="-mt-[4px] text-center text-[14px] md:text-[12px]">
      Already have an account?
      <NuxtLink to="/login" class="text-[#EC665F] font-semibold cursor-pointer"
        >Sign In</NuxtLink
      >
    </p>
  </div>
</template>

<script setup>
import {
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { ref as storageRef, uploadBytes } from 'firebase/storage';
import { auth, storage } from '../database/firebase';

const name = ref(null);
const email = ref(null);
const password = ref(null);
const urlPicture = ref(null);
const filePicture = ref(null);
const errorMessage = ref(null);

const onFileChange = event => {
  urlPicture.value = URL.createObjectURL(event.target.files[0]);
  filePicture.value = event.target.files[0];
};

onAuthStateChanged(auth, user => {
  if (user) {
    navigateTo('/');
  }
});

const createUser = async () => {
  if (name.value.length >= 3 && email.value && password.value.length >= 6) {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async userCredential => {
        const user = userCredential.user;
        if (urlPicture.value) {
          const pictureRef = storageRef(storage, user.uid);
          await uploadBytes(pictureRef, filePicture.value);
          await updateProfile(auth.currentUser, {
            displayName: name.value,
            photoURL: `https://firebasestorage.googleapis.com/v0/b/auth-83f60.appspot.com/o/${user.uid}?alt=media&token=af9cc240-07c2-41d4-8233-b537ad5f863d`,
          });
          await navigateTo('/');
        } else {
          await updateProfile(auth.currentUser, {
            displayName: name.value,
          });
          await navigateTo('/');
        }
      })
      .catch(error => {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          errorMessage.value = 'E-mail is already in use';
        } else {
          errorMessage.value = error.message;
        }
      });
  } else if (
    name.value.length < 3 &&
    email.value &&
    password.value.length >= 6
  ) {
    errorMessage.value = 'Name must be longer than 3 characters';
  } else if (
    name.value.length >= 3 &&
    !email.value &&
    password.value.length >= 6
  ) {
    errorMessage.value = 'E-mail field is required';
  } else if (
    name.value.length >= 3 &&
    email.value &&
    password.value.length < 6
  ) {
    errorMessage.value = 'Password must be longer than 6 characters';
  } else {
    errorMessage.value = 'Some fields are incorrect';
  }
};
</script>
