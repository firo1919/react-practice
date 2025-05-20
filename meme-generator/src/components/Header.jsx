import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div className="bg-linear-to-r from-[#672280] to-[#A626D3] h-16 flex items-center pl-8 gap-3">
        <img className='w-10' src={logo} alt="" />
        <p className='font-bold text-2xl text-white'>MemeGenerator</p>
    </div>
  )
}
export default Header