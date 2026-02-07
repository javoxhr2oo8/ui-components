<script setup>
import Card from '../Ui/Card.vue';
import FlexBox from '../Ui/FlexBox.vue';
import Toggle from '../Ui/Toggle.vue';

const { theme, setTheme, initTheme, isDark } = useTheme();

onMounted(() => {
  initTheme();
});

const isDarkComputed = computed({
  get: () => isDark.value,
  set: (val) => setTheme(val ? 'dark' : 'light')
});
</script>

<template>
    <div class="settings">
        <div class="container">
            <div class="settings-wrapper">
                <span>Settings</span>
                <Card>
                    <FlexBox direction="column" gap="10px">
                        <FlexBox>
                            <FlexBox gap="10px">
                                <i :class="[isDark ? 'fas fa-moon' : 'fas fa-sun', 'th-icon']"></i>
                                <h2>Liquid Dark Mode</h2>
                            </FlexBox>
                            <Toggle v-model:toggle="isDarkComputed"/>
                        </FlexBox>
                    </FlexBox>
                </Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
span {
    font-weight: 600;
    color: #fff;
    opacity: 0.8;
    padding-bottom: 10px;
    font-size: 23px;
    display: block;
}

.th-icon {
    font-size: 26px;
    transition: all 0.3s ease;
}

.reset-btn {
    background: #333;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover { background: #444; }
}
</style>