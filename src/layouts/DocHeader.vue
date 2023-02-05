<script setup>
import { openURL } from 'quasar';
import me from 'assets/img/me.svg';
import github from 'assets/svg/github.svg';
import filing from 'assets/img/filing.png';

const docStore = useDocStore();
const darkIcon = computed(() => (docStore.state.dark ? 'light_mode' : 'mode_night'));
const $q = useQuasar();
const name = process.env.DOC_NAME;
const email = process.env.DOC_EMAIL;
const githubUrl = process.env.DOC_GITHUB;
const psneLabel = process.env.DOC_PSNE_LABEL;
const psneUrl = process.env.DOC_PSNE_URL;
const saying = process.env.DOC_SAYING;
function doAction(type) {
  switch (type) {
    case 'dark':
      docStore.toggleDark();
      break;
    case 'email':
      openURL(`Mailto:${email}`);
      break;
    case 'github':
      openURL(githubUrl);
      break;
    case 'psne':
      openURL(psneUrl);
      break;
    default:
  }
}
function showBottomSheet() {
  $q.bottomSheet({
    message: saying,
    actions: [
      {
        label: '暗黑模式',
        icon: darkIcon.value,
        id: 'dark',
      },
      {
        label: email,
        icon: 'email',
        id: 'email',
      },
      {
        label: githubUrl,
        img: github,
        id: 'github',
      },
      {
        label: psneLabel,
        img: filing,
        id: 'psne',
      },
    ],
  }).onOk((action) => {
    doAction(action.id);
  });
}
</script>

<template>
  <q-header bordered :height-hint="60">
    <q-toolbar class="no-padding">
      <q-btn
        flat
        stretch
        aria-label="Menu"
        icon="menu"
        @click="docStore.toggleMenuDrawer"
      ></q-btn>
      <q-btn
        flat
        stretch
        to="/"
        size="lg"
        :label="name"
      >
      </q-btn>
      <q-space></q-space>
      <q-btn
        v-if="$q.platform.is.mobile"
        stretch
        size="lg"
        flat
        :icon="`img:${me}`"
        @click="showBottomSheet"
      >
      </q-btn>
      <q-btn-dropdown
        v-else
        stretch
        size="lg"
        flat
        :icon="`img:${me}`"
      >
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label overline>
                {{ saying }}
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable @click="doAction('dark')">
            <q-item-section avatar>
              <c-icon :name="darkIcon"></c-icon>
            </q-item-section>
            <q-item-section>
              暗黑模式
            </q-item-section>
          </q-item>
          <q-item clickable @click="doAction('email')">
            <q-item-section avatar>
              <c-icon name="email"></c-icon>
            </q-item-section>
            <q-item-section>
              {{ email }}
            </q-item-section>
          </q-item>
          <q-item clickable @click="doAction('github')">
            <q-item-section avatar>
              <c-icon custom name="github"></c-icon>
            </q-item-section>
            <q-item-section>
              {{ githubUrl }}
            </q-item-section>
          </q-item>
          <q-item clickable @click="doAction('psne')">
            <q-item-section avatar>
              <c-icon :name="`img:${filing}`"></c-icon>
            </q-item-section>
            <q-item-section>
              {{ psneLabel }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
  </q-header>
</template>

<!-- <style lang="scss" scoped>
.logo {
  .mu {
    transform: rotate(0deg);
    transition: transform .8s ease-in-out;
    width: 35px;
    height: 50px;
    top: 0;
    left: 16px;
    background-image: url("img/logo.png");
  }
  &:hover   {
    .mu{
      transform: rotate(360deg);
    }
  }
  .linzi{
    height: 50px;
    width: 80px;
    margin-left: 35px;
    background-image: url("img/logo.png");
    background-position: right;
  }
}
</style> -->
