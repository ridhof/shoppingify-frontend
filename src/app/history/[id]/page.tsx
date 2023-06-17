import BackNavigation from "~/components/back-navigation";
import CreatedDate from "~/components/created-date";

export default function HistoryDetails() {
  return (
    <main className="min-h-screen w-3/4 py-9 pl-44">
      <header className="mb-9">
        <BackNavigation href="/history" />
      </header>
      <div className="mb-14">
        <h1 className="mb-5 text-2xl font-bold">Eero’s farewell party</h1>
        <CreatedDate date="Mon 24.8.2020" />
      </div>
      <div className="mb-16">
        <h2 className="mb-4 text-lg font-semibold">Cookies</h2>
        <div className="flex items-start gap-5">
          <div className="flex w-[182px] gap-5 rounded-xl bg-white px-4 py-3 text-base font-semibold shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]">
            Cookies Chocolate
            <span className="shrink-0 text-sm text-primary">3 pcs</span>
          </div>
          <div className="flex w-[182px] gap-5 rounded-xl bg-white px-4 py-3 text-base font-semibold shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]">
            Doris Truffle
            <span className="shrink-0 text-sm text-primary">1 pcs</span>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="mb-4 text-lg font-semibold">Beverages</h2>
        <div className="flex items-start gap-5">
          <div className="flex w-[182px] gap-5 rounded-xl bg-white px-4 py-3 text-base font-semibold shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]">
            2 x soft drink 1.5 l
            <span className="shrink-0 text-sm text-primary">2 pcs</span>
          </div>
          <div className="flex w-[182px] gap-5 rounded-xl bg-white px-4 py-3 text-base font-semibold shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]">
            Beer
            <span className="shrink-0 text-sm text-primary">8 pcs</span>
          </div>
          <div className="flex w-[182px] gap-5 rounded-xl bg-white px-4 py-3 text-base font-semibold shadow-[0_2px_12px_2px_rgba(0,0,0,0.05)]">
            Cider
            <span className="shrink-0 text-sm text-primary">6 pcs</span>
          </div>
        </div>
      </div>
    </main>
  );
}
