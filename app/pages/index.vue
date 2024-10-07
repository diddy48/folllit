<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

if(onMounted){
  onMounted(() => {
    const splash = document.querySelector('.splash');

    setTimeout(() => {
      splash.classList.add('display-none');
    }, 13500);
  });
}
</script>

<template>
  <!-- <div>
    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
    >
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1"
          >
            <span
              class="absolute inset-0"
              aria-hidden="true"
            />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>

<ImagePlaceholder />

<ULandingLogos :title="page.logos.title" align="center">
  <UIcon v-for="icon in page.logos.icons" :key="icon" :name="icon"
    class="w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white" />
</ULandingLogos>
</ULandingHero>

<ULandingSection :title="page.features.title" :description="page.features.description"
  :headline="page.features.headline">
  <UPageGrid id="features" class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
    <ULandingCard v-for="(item, index) in page.features.items" :key="index" v-bind="item" />
  </UPageGrid>
</ULandingSection>

<ULandingSection :title="page.pricing.title" :description="page.pricing.description" :headline="page.pricing.headline">
  <UPricingGrid id="pricing" compact class="scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
    <UPricingCard v-for="(plan, index) in page.pricing.plans" :key="index" v-bind="plan" />
  </UPricingGrid>
</ULandingSection>

<ULandingSection :headline="page.testimonials.headline" :title="page.testimonials.title"
  :description="page.testimonials.description">
  <UPageColumns id="testimonials" class="xl:columns-4 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]">
    <div v-for="(testimonial, index) in page.testimonials.items" :key="index" class="break-inside-avoid">
      <ULandingTestimonial v-bind="testimonial" />
    </div>
  </UPageColumns>
</ULandingSection>

<ULandingSection class="bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10">
  <ULandingCTA v-bind="page.cta" :card="false" />
</ULandingSection>

<ULandingSection id="faq" :title="page.faq.title" :description="page.faq.description"
  class="scroll-mt-[var(--header-height)]">
  <ULandingFAQ multiple :items="page.faq.items" :ui="{
          button: {
            label: 'font-semibold',
            trailingIcon: {
              base: 'w-6 h-6'
            }
          }
        }" class="max-w-4xl mx-auto" />
</ULandingSection>
</div> -->
  <div class="hello">
    E' un aprova per vedere se va
  </div>

  <div class="splash"><!-- 
    <h1 class="fade-in">Splash</h1> -->
    <video class="fade-in" autoplay muted loop>
      <source src="~/assets/video/loader.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style lang="css">
.splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  z-index: 200;
  text-align: center;
  line-height: 99vh;
}
video {
  margin: auto;
  width: 100%;
}
body {
  height: 100%;
}

body {
  background-color: black;
  display: flex;
  margin: 0;
}

.splash.display-none {
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  z-index: -10;
  text-align: center;
  line-height: 99vh;
  transition: all 0.5s;
}


@keyframes fadeIn {

  /* from {
    opacity: 0;
  } */
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
}
</style>