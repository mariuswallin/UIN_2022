export default function Progress({ current, total }) {
  return (
    <div className="relative mt-12 flex items-center gap-12 pt-1">
      <div className="flex items-center justify-between">
        <div>
          <span className="inline-block rounded-full text-sm font-semibold text-white">
            Spørsmål {`${current} / ${total}`}
          </span>
        </div>
      </div>
      <div className="relative h-2 flex-1 overflow-hidden rounded bg-gray-800">
        <div
          style={{
            width: `${Math.round((current / total) * 100)}%`,
          }}
          className="absolute inset-0 rounded bg-emerald-500"
        />
      </div>
    </div>
  )
}
