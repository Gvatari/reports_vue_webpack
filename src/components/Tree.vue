<template>
   <div class="tree_container">
        <div class="tree_parent" 
            v-for="TreeElement in TreeElements" 
            :key="TreeElement.value"
        >
            <div class="tree_name">
                <input type="checkbox"
                    :TreeElements = "TreeElement.selected"
                    @input="tickChildren"
                >
                {{ TreeElement.title }}
            </div>
            <div class="tree_children">
                <tree 
                    :TreeElements="TreeElement.childrenElements"
                >
                </tree>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'tree',
props: ['TreeElements'],
data() {
    return {
       
    }
},
methods: {
    tickChildren(event) {
        console.log(event.selected);
    }
}
}
</script>

<style scoped>
.tree_container {
    width: 300px;
    max-height: 582px;
    display: flex;
    flex-direction: column;
}
.tree_parent {
    padding-left: 4px;
}
.tree_name {
    height: 36px;
    display: flex;
    align-items: center;
}
</style>