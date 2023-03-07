<template>
    <div>
        <TitlePages general_message="Выпуск продукции" private_message="2022г." />
        <tree class="tree" :TreeElements="TreeElements"></tree>
    </div>
</template>
 
<script>
import TitlePages from '@/components/TitlePages.vue'
import Tree from '@/components/Tree.vue'
export default {
    name: 'year',
    components: {
        TitlePages,
        Tree
    },
    data() {
        return {
            TreeElements: [
                {
                    title: 'Альт-Пласт',
                    selected: false,
                    childrenElements: [
                        {
                            title: 'Готовая продукция',
                            selected: false,
                            childrenElements: [
                                {
                                    title: 'Кухня',
                                    selected: false,
                                    childrenElements: []
                                }
                            ]
                        },
                        {
                            title: 'Произведённые детали',
                            selected: false,
                            childrenElements: []
                        },
                    ]
                },
                {
                    title: 'ИП-Панков',
                    selected: false,
                    childrenElements: {}
                }
            ]
        }
    },
}
</script>
 
<style scoped>
.tree {
    margin: 0 20px;
}
</style>