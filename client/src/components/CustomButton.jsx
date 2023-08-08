import state from '../store'

const CustomButton = () => {

  return (
    <button
      className="back-button"
      onClick={() => state.intro = true}
    >Back to the shoes
    </button>
  )
}

export default CustomButton