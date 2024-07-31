export default function tabs() {
  return (
    <>
      <form className="tab-view tab-view-height-auto">
        <input type="submit" id="userId1" />
        <label htmlFor="userId1">Bear</label>
        <input type="submit" id="userId2" />
        <label htmlFor="userId2">Panda</label>

        <input type="submit" id="tab" />
        <label htmlFor="tab">Add a Member</label>
      </form>
    </>
  )
};
