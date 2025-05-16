import logo from '../assets/images/Globe.svg'

function Header() {
  return (
    <div className="h-14 bg-red-400 flex items-center justify-center text-white">
        <div className="logo flex gap-2 font-inter font-medium">
            <img src={logo} alt="logo" />
            <p className='text-base'>my travel journal.</p>
        </div>
    </div>
  )
}
export default Header