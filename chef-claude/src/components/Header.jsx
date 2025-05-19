import logo from '../assets/images/Chef Claude Icon.svg'

function Header() {
  return (
    <div className="bg-white h-27 px-4 py-6 flex items-center justify-center font-inter shadow-md">
        <div className="flex items-center gap-2">
            <img className='' src={logo} alt="logo" />
            <p className='text-4xl text-deepBlack'>Chef Claude</p>
        </div>
        
    </div>
  )
}
export default Header