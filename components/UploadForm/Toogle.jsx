export default function Toogle({ nomeDoc, form }) {
  return (
    <div className="collapse p-1 grid grid-cols-1 md:grid-cols-3 ">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content shadow-xl">
        {nomeDoc}
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        {form}
      </div>
    </div>
  );
}
