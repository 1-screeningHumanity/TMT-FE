export default function OptionButtons() {
  return (
    <div className="flex justify-between mt-5">
      <button
        className="w-1/3 h-10 text-white mr-1 rounded-2xl"
        style={{ backgroundColor: '#7D00D0' }}
      >
        호가
      </button>
      <button
        className="w-1/3 h-10 text-white mr-1 rounded-2xl"
        style={{ backgroundColor: '#7D00D0' }}
      >
        차트
      </button>
      <button
        className="w-1/3 h-10 text-white rounded-2xl"
        style={{ backgroundColor: '#7D00D0' }}
      >
        투자자
      </button>
    </div>
  )
}
