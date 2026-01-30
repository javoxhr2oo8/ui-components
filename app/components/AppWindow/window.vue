<script setup>
import Card from '../Ui/Card.vue';
import FlexBox from '../Ui/FlexBox.vue';
import Button from '../Ui/Button.vue';
import GridBox from '../Ui/GridBox.vue';
import CardContent from '../Ui/CardContent.vue';

const props = defineProps({
    modelValue: Boolean,
    title: { type: String, default: 'Mini Apps' },
    bgApp: { type: String }
});

const emit = defineEmits(['update:modelValue']);

const close = () => emit('update:modelValue', false);
</script>

<template>
    <Transition name="fade">
        <div v-if="modelValue" class="modal-overlay" @click.self="close">
            <div class="modal-content liquid-glass" :style="{ 'background': bgApp }">
                <FlexBox direction="column" gap="10px">
                    <Card class="web-app-header">
                        <h1>Мини приложения</h1>
                    </Card>

                    <FlexBox gap="10px">
                        <Button>Товарь с доставкой</Button>
                        <Button>Филтрация</Button>
                    </FlexBox>

                    <Button>
                        Техподдрежка
                    </Button>

                    <GridBox>
                        <Card v-for="item in 10">
                            <CardContent :item="item" />
                        </Card>
                    </GridBox>

                    <Button>Показать ещё</Button>
                </FlexBox>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.web-app-header {
    text-align: center;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.liquid-glass {
    height: 700px;
    background: linear-gradient(135deg, rgb(59, 57, 57), rgb(59, 57, 57));
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 1);
    padding: 10px;
    width: 90%;
    max-width: 500px;
    color: white;
    overflow-y: auto;
}

.liquid-glass::-webkit-scrollbar {
    width: 6px;
}

.liquid-glass::-webkit-scrollbar-track {
    background: transparent;
    margin: 15px;
}

.liquid-glass::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
}

.liquid-glass::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
}

.liquid-glass {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 28px;
    cursor: pointer;
    opacity: 0.7;
    transition: 0.2s;
}

.close-btn:hover {
    opacity: 1;
}

.apps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.app-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: transform 0.2s;
}

.app-card:hover {
    transform: translateY(-5px);
}

.app-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    border-radius: 16px;
    transition: box-shadow 0.3s;
}

.app-card:hover .app-icon {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.app-card span {
    font-size: 12px;
    font-weight: 500;
    opacity: 0.8;
}
</style>