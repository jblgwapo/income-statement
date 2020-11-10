<template lang="html">
  <section>
    <header>Dashboard</header>

    <!-- Wrapper -->
    <div view="main">

      <div>
        <h1>Notes</h1>
        <div frame>
            <textarea notes></textarea>
            <button type="button" name="button">Save</button>
        </div>
      </div>

      <div>
        <h1>Checklist</h1>
        <div frame>
            adsdadas
        </div>
      </div>

      <div>
        <h1>Activities</h1>
        <div frame>
            adsdadas
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name:'Home',

}
</script>

<style lang="scss" scoped>
[notes]{
  font-family: inherit;
  font-size: inherit;
  height: 70px;
  width: 100%;
  border: 0px;
  border-bottom: 1px solid var(--accent);
  outline: 0px;
  resize: vertical;
}
</style>
