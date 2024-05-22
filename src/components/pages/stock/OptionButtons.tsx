export default function OptionButtons() {
  return (
    <div
      className="flex justify-between items-center mt-5 w-full h-16 rounded-2xl"
      style={{ backgroundColor: '#f2f2f2' }}
    >
      <button
        className="w-1/4 h-10 text-white mr-1 rounded-2xl"
        style={{ backgroundColor: '#7D00D0' }}
      >
        일
      </button>
      <button
        className="w-1/4 h-10 text-white mr-1 rounded-2xl"
        style={{ backgroundColor: '#7D00D0' }}
      >
        월
      </button>
      <button
        className="w-1/4 h-10 text-white rounded-2xl mr-1"
        style={{ backgroundColor: '#7D00D0' }}
      >
        주
      </button>
      <button
        className="w-1/4 h-10 text-white rounded-2xl"
        style={{ backgroundColor: '#7D00D0' }}
      >
        년
      </button>
    </div>
  )
}
