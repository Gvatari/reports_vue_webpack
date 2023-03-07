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
                    childrenElements: [
                        {
                            title: 'Готовая продукция',
                            childrenElements: [
                                {
                                    title: 'Кухня',
                                    childrenElements: []
                                }
                            ]
                        },
                        {
                            title: 'Произведённые детали',
                            childrenElements: []
                        },
                    ]
                },
                {
                    title: 'ИП-Панков',
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