export function Header() {
  return (
    <div className="flex align-items-center justify-center">
      <button
        className="m-2 py-2 px-8 border-2 rounded-full min-w-[90px]"
        type="button"
      >
        Balanços
      </button>
      <button
        className="m-2 py-2 px-8 border-2 rounded-full min-w-[90px]"
        type="button"
      >
        Novo
      </button>
    </div>
  );
}
