<template>
  <div>
    <div class="title_page_container">
      <div class="title_page_question"></div>
      <div class="title_page_general_message">{{ general_message }}</div>
      <div class="title_page_private_message">{{ private_message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitlePages',
  props: {
    general_message: String,
    private_message: String
  }
}
</script>

<style scoped>
/* === TITLE PAGE === */
.title_page_container {
    display: flex;
    height: 52px;
    margin-bottom: 6px;
    align-items: center;
}

.title_page_question {
    margin-left: 20px;
    width: 16px;
    height: 16px;
    background: url(../../public/img/question.svg);
}

.title_page_general_message {
    margin-left: 8px;
    font-weight: 700;
    font-size: 19px;
    cursor: default;
}

.title_page_private_message {
    margin-left: 8px;
    font-size: 19px;
    cursor: default;
}
</style>
