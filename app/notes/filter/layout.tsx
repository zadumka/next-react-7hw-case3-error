import css from './layout.module.css';


export default function LayoutNotes() {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>

        <div>Sidebar content</div>
      </aside>
      <div className={css.notesWrapper}>

        <div>Main content</div>
      </div>
    </section>
  );
