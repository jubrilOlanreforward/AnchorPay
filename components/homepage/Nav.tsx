import { Button } from "@/components/ui/button";
import Image from "next/image";
import logoImage from "@/public/Logo 2.png";
import Menu from "@/public/icons/menu.svg";
import Link from "next/link";
import { CloseIcon } from "@/components/svg";

const navItems = [
  { label: "Loans", href: "#" },
  { label: "Savings", href: "#" },
  { label: "P2P", href: "#" },
  { label: "BNPL", href: "#" },
  { label: "FAQ", href: "#" },
];

const Nav = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-white to-transparent backdrop-blur-lg'>
      <nav aria-label='Global' className='max-w-7xl flex items-center justify-between p-6 lg:px-8'>
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image src={logoImage} alt='' className='h-7 w-auto px-5' />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            command='show-modal'
            commandfor='mobile-menu'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <Image src={Menu} alt='menu' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className='text-sm/6 font-semibold text-gray-900'>
              {item.label}
            </a>
          ))}
        </div>
        <div className='hidden  lg:flex lg:flex-1 lg:justify-end gap-3'>
          <Link href='/auth/get-started'>
            <Button className='text-sm/6 text-white cursor-pointer bg-button-primary px-6 rounded-sm'>
              Get Started
            </Button>
          </Link>
          <Link href='/auth/login'>
            <Button className='text-sm/6 font-semibold cursor-pointer bg-accent text-gray-900 px-6'>
              Log in
            </Button>
          </Link>
        </div>
      </nav>
      <el-dialog>
        <dialog id='mobile-menu' className='backdrop:bg-transparent lg:hidden'>
          <div tabIndex={0} className='fixed inset-0 focus:outline-none'>
            <el-dialog-panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
              <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Your Company</span>
                  <Image src={logoImage} alt='' className='h-7 w-auto' />
                </a>
                <button
                  type='button'
                  command='close'
                  commandfor='mobile-menu'
                  className='-m-2.5 rounded-md p-2.5 text-gray-700 cursor-pointer'
                >
                  <span className='sr-only'>Close menu</span>
                  <CloseIcon />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <div className='py-6 space-y-4'>
                    <Link
                      href='/auth/login'
                      className='-mx-3 bg-light-primary block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-primary text-center hover:mt-0.5'
                    >
                      Log in
                    </Link>
                    <Link
                      href='/auth/get-started'
                      className='-mx-3 bg-button-primary text-center block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:mt-0.5'
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </header>
  );
};

export default Nav;
