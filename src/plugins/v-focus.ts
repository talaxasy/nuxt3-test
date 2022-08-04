export default defineNuxtPlugin(
  (nuxtApp) => {
    nuxtApp.vueApp.directive(
      'focus',
      {
        mounted(ref) {
          ref.focus();
        },
      },
    );
  },
);
